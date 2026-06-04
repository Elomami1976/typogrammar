/**
 * typogrammar-ai Cloudflare Worker
 * --------------------------------
 * Endpoint: https://typogrammar-ai.elomami1976.workers.dev/
 *
 * Supports four POST body types:
 *
 *   { type: "paraphrase", text }
 *   { type: "grammar",    text }
 *   { type: "essay",      category? }
 *   { type: "chat",       message, history? }       <-- NEW
 *
 * The chat type:
 *   1. Fetches the TypoGrammar content index (chatbot-index.json) — cached
 *      in-memory per Worker isolate.
 *   2. Scores the user message against indexed topics/blogs (keyword overlap
 *      with title-match boost).
 *   3. If the best score is very high → returns the cached snippet + link
 *      WITHOUT calling the LLM (free).
 *   4. If medium score → calls OpenRouter with the matched snippet as
 *      grounding context and instructs the model to end with a "Read more"
 *      link.
 *   5. If no match → calls OpenRouter for a short generic answer with NO
 *      external links.
 *
 * Cost controls:
 *   - Response cache (in-memory, 1h) per normalized question.
 *   - Per-IP rate limit (20 chat messages / minute).
 *   - Message length cap (500 chars).
 *   - max_tokens: 250 for chat replies.
 *
 * Secret required:
 *   OPENROUTER_API_KEY
 */

const INDEX_URL = "https://typogrammar.com/chatbot-index.json";
const SITE_BASE = "https://typogrammar.com";

const CHAT_MODEL = "openai/gpt-4o-mini";
const CHAT_MAX_TOKENS = 250;
const CHAT_TEMPERATURE = 0.4;

const MAX_MESSAGE_CHARS = 500;
const RATE_LIMIT_PER_MIN = 20;

const HIGH_SCORE_THRESHOLD = 6; // direct-answer (no LLM)
const LOW_SCORE_THRESHOLD = 2;  // grounded LLM call below high, generic below low

// ---------------------------------------------------------------------------
// Module-scope caches (per Worker isolate)
// ---------------------------------------------------------------------------

let INDEX_CACHE = null;            // { entries, fetchedAt }
const RESPONSE_CACHE = new Map();  // normalizedQuestion -> { value, expires }
const RATE_BUCKETS = new Map();    // ip -> { count, resetAt }

const STOPWORDS = new Set([
  "a","an","the","is","are","was","were","be","been","being","am",
  "do","does","did","doing","done","have","has","had","having",
  "i","you","he","she","it","we","they","me","him","her","us","them",
  "my","your","his","its","our","their","this","that","these","those",
  "and","or","but","if","then","so","because","as","of","to","in","on",
  "at","by","for","with","about","into","over","under","from","up","down",
  "what","which","who","whom","whose","when","where","why","how",
  "can","could","should","would","may","might","must","will","shall",
  "not","no","yes","please","tell","explain","mean","means","meaning"
]);

// ---------------------------------------------------------------------------
// Index loading + search
// ---------------------------------------------------------------------------

async function loadIndex() {
  if (INDEX_CACHE && Date.now() - INDEX_CACHE.fetchedAt < 10 * 60 * 1000) {
    return INDEX_CACHE.entries;
  }
  try {
    const res = await fetch(INDEX_URL, { cf: { cacheTtl: 600 } });
    if (!res.ok) throw new Error(`index fetch ${res.status}`);
    const data = await res.json();
    INDEX_CACHE = { entries: data.entries || [], fetchedAt: Date.now() };
    return INDEX_CACHE.entries;
  } catch (err) {
    if (INDEX_CACHE) return INDEX_CACHE.entries; // serve stale on error
    return [];
  }
}

function tokenize(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

function scoreEntry(entry, qTokens) {
  if (!qTokens.length) return 0;
  const titleLower = (entry.title || "").toLowerCase();
  const text = entry.searchText || "";
  let score = 0;
  for (const t of qTokens) {
    if (titleLower.includes(t)) score += 3;
    else if (text.includes(t)) score += 1;
  }
  return score;
}

function findBestMatch(message, entries) {
  const qTokens = tokenize(message);
  if (!qTokens.length || !entries.length) return null;
  let best = null;
  for (const entry of entries) {
    const score = scoreEntry(entry, qTokens);
    if (!best || score > best.score) best = { entry, score };
  }
  return best;
}

// ---------------------------------------------------------------------------
// Rate limiting (per-isolate, best-effort — not a hard global limit)
// ---------------------------------------------------------------------------

function checkRateLimit(ip) {
  const now = Date.now();
  const bucket = RATE_BUCKETS.get(ip);
  if (!bucket || bucket.resetAt < now) {
    RATE_BUCKETS.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (bucket.count >= RATE_LIMIT_PER_MIN) return false;
  bucket.count++;
  return true;
}

// ---------------------------------------------------------------------------
// Response cache
// ---------------------------------------------------------------------------

function normalizeQuestion(s) {
  return s.toLowerCase().replace(/\s+/g, " ").trim();
}

function getCached(question) {
  const key = normalizeQuestion(question);
  const hit = RESPONSE_CACHE.get(key);
  if (hit && hit.expires > Date.now()) return hit.value;
  if (hit) RESPONSE_CACHE.delete(key);
  return null;
}

function setCached(question, value) {
  if (RESPONSE_CACHE.size > 500) {
    // simple eviction: clear oldest 100
    const keys = Array.from(RESPONSE_CACHE.keys()).slice(0, 100);
    for (const k of keys) RESPONSE_CACHE.delete(k);
  }
  RESPONSE_CACHE.set(normalizeQuestion(question), {
    value,
    expires: Date.now() + 60 * 60 * 1000, // 1h
  });
}

// ---------------------------------------------------------------------------
// OpenRouter call
// ---------------------------------------------------------------------------

async function callOpenRouter(env, { model, messages, maxTokens, temperature }) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://typogrammar.com",
        "X-Title": "TypoGrammar",
      },
      body: JSON.stringify({
        model,
        messages,
        temperature,
        max_tokens: maxTokens,
      }),
    }
  );
  const data = await response.json();
  if (!response.ok) {
    const err = new Error("openrouter_failed");
    err.status = response.status;
    err.detail = data;
    throw err;
  }
  const result = data?.choices?.[0]?.message?.content;
  if (!result) {
    const err = new Error("empty_model_response");
    err.status = 500;
    throw err;
  }
  return result.trim();
}

// ---------------------------------------------------------------------------
// CHAT handler
// ---------------------------------------------------------------------------

async function handleChat(env, body, ip) {
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message) {
    return { status: 400, json: { error: "No message provided" } };
  }
  if (message.length > MAX_MESSAGE_CHARS) {
    return {
      status: 400,
      json: { error: `Message too long (max ${MAX_MESSAGE_CHARS} chars)` },
    };
  }
  if (!checkRateLimit(ip)) {
    return {
      status: 429,
      json: { error: "Too many requests. Please wait a minute." },
    };
  }

  // Cache hit?
  const cached = getCached(message);
  if (cached) return { status: 200, json: { ...cached, cached: true } };

  // Search index
  const entries = await loadIndex();
  const best = findBestMatch(message, entries);

  // CASE 1 — Very strong match: return snippet directly, no LLM call
  if (best && best.score >= HIGH_SCORE_THRESHOLD) {
    const e = best.entry;
    const result = {
      result:
        `${e.snippet}\n\nRead more on TypoGrammar: ${e.title} — ${SITE_BASE}${e.url}`,
      source: { title: e.title, url: `${SITE_BASE}${e.url}` },
      mode: "direct",
    };
    setCached(message, result);
    return { status: 200, json: result };
  }

  // CASE 2 — Medium match: ask LLM with grounding context
  if (best && best.score >= LOW_SCORE_THRESHOLD) {
    const e = best.entry;
    const system =
      "You are TypoGrammar's helpful English-learning assistant. Answer ONLY using the TypoGrammar content provided below. Keep the answer under 120 words, friendly, and accurate. End your answer with: Read more on TypoGrammar: " +
      e.title + " — " + SITE_BASE + e.url;
    const userPrompt =
      "TypoGrammar content:\n" +
      `Title: ${e.title}\n` +
      (e.category ? `Category: ${e.category}\n` : "") +
      `Summary: ${e.snippet}\n\n` +
      `User question: ${message}`;
    try {
      const answer = await callOpenRouter(env, {
        model: CHAT_MODEL,
        messages: [
          { role: "system", content: system },
          { role: "user", content: userPrompt },
        ],
        maxTokens: CHAT_MAX_TOKENS,
        temperature: CHAT_TEMPERATURE,
      });
      const result = {
        result: answer,
        source: { title: e.title, url: `${SITE_BASE}${e.url}` },
        mode: "grounded",
      };
      setCached(message, result);
      return { status: 200, json: result };
    } catch (err) {
      return {
        status: err.status || 500,
        json: { error: err.message, detail: err.detail || null },
      };
    }
  }

  // CASE 3 — No relevant content: short generic answer, no links
  const system =
    "You are TypoGrammar's English-learning assistant. Answer the user's question in 2–3 short sentences. " +
    "Do NOT include any URLs, external links, or references to other websites. " +
    "If the question is not about English grammar, vocabulary, writing, or language learning, politely say you focus on English learning topics.";
  try {
    const answer = await callOpenRouter(env, {
      model: CHAT_MODEL,
      messages: [
        { role: "system", content: system },
        { role: "user", content: message },
      ],
      maxTokens: CHAT_MAX_TOKENS,
      temperature: CHAT_TEMPERATURE,
    });
    const result = { result: answer, source: null, mode: "generic" };
    setCached(message, result);
    return { status: 200, json: result };
  } catch (err) {
    return {
      status: err.status || 500,
      json: { error: err.message, detail: err.detail || null },
    };
  }
}

// ---------------------------------------------------------------------------
// Main fetch handler
// ---------------------------------------------------------------------------

export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Only POST allowed" }),
        {
          status: 405,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    try {
      const body = await request.json();
      const { type, text, category } = body;

      // =====================================================================
      // CHAT  (new — content-aware Q&A)
      // =====================================================================
      if (type === "chat") {
        const ip =
          request.headers.get("CF-Connecting-IP") ||
          request.headers.get("X-Forwarded-For") ||
          "unknown";
        const { status, json } = await handleChat(env, body, ip);
        return new Response(JSON.stringify(json), {
          status,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }

      let prompt = "";

      // =====================================================================
      // PARAPHRASE (unchanged)
      // =====================================================================
      if (type === "paraphrase") {
        if (!text || text.trim() === "") {
          return new Response(
            JSON.stringify({ error: "No text provided" }),
            {
              status: 400,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            }
          );
        }
        prompt = `Rewrite this text clearly and naturally.
Return only the rewritten version.

Text:
${text}`;
      }
      // =====================================================================
      // GRAMMAR CHECK (unchanged)
      // =====================================================================
      else if (type === "grammar") {
        if (!text || text.trim() === "") {
          return new Response(
            JSON.stringify({ error: "No text provided" }),
            {
              status: 400,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            }
          );
        }
        prompt = `Correct the grammar, spelling, and punctuation.
Return:

CORRECTED TEXT:
[corrected version]

CORRECTIONS:
- List each correction briefly.

Text:
${text}`;
      }
      // =====================================================================
      // ESSAY TOPIC (unchanged)
      // =====================================================================
      else if (type === "essay") {
        prompt = category
          ? `Generate one IELTS Writing Task 2 topic about ${category}. Return only the topic.`
          : `Generate one IELTS Writing Task 2 topic. Return only the topic.`;
      } else {
        return new Response(
          JSON.stringify({ error: "Invalid request type" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }

      // =====================================================================
      // CALL OPENROUTER  (for paraphrase / grammar / essay)
      // =====================================================================
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://typogrammar.com",
            "X-Title": "TypoGrammar",
          },
          body: JSON.stringify({
            model: "openai/gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
            max_tokens: 400,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return new Response(
          JSON.stringify({
            openrouter_status: response.status,
            openrouter_error: data,
          }),
          {
            status: 500,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }

      const result = data?.choices?.[0]?.message?.content;

      if (!result) {
        return new Response(
          JSON.stringify({ error: "Empty model response" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }

      return new Response(
        JSON.stringify({ result }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    } catch (err) {
      return new Response(
        JSON.stringify({ error: err.message }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
  },
};
