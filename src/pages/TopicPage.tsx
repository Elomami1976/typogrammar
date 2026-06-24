import React, { useEffect } from 'react';
import GoogleAd from '../components/GoogleAd';
import { useParams, Link } from 'react-router-dom';
import { GRAMMAR_TOPICS } from '../constants/grammarTopics';
import { QUIZZES } from '../constants/quizData';
import Quiz from '../components/Quiz';
import { ArticleHeading } from '../components/ArticleComponents';
import { useProgress } from '../contexts/ProgressContext';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';
import PrintButton from '../components/PrintButton';
import RelatedContent from '../components/RelatedContent';
import StickyNextCTA from '../components/StickyNextCTA';

const TopicPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const { progress, toggleTopicCompletion, updateQuizScore } = useProgress();

  const topic = GRAMMAR_TOPICS.find(t => t.id === topicId);
  const quizForTopic = QUIZZES.find(q => q.topicId === topicId);
  const currentIndex = GRAMMAR_TOPICS.findIndex(t => t.id === topicId);
  
  const previousTopic = currentIndex > 0 ? GRAMMAR_TOPICS[currentIndex - 1] : null;
  const nextTopic = currentIndex < GRAMMAR_TOPICS.length - 1 ? GRAMMAR_TOPICS[currentIndex + 1] : null;

  // Track last visited topic for "Continue Learning" on homepage
  useEffect(() => {
    if (topic) {
      try {
        localStorage.setItem('lastVisitedTopic', JSON.stringify({
          id: topic.id,
          title: topic.title,
          category: topic.category,
        }));
      } catch {}
    }
  }, [topic]);

  // Custom SEO meta for specific topics
  const topicSeoMap: Record<string, { title: string; description: string }> = {
    'make-vs-do': {
      title: 'Make vs Do: Rules, Examples & Common Mistakes | TypoGrammar',
      description: 'Learn the difference between make and do in English. Clear rules, common collocations, fixed expressions, and mistakes to avoid with examples.'
    },
    'few-little-less-fewer': {
      title: 'Few vs Little, Less vs Fewer: Countable & Uncountable Rules | TypoGrammar',
      description: 'Understand when to use few, little, less, and fewer in English. Master countable vs uncountable noun rules with examples and common mistakes.'
    },
    'affect-vs-effect': {
      title: 'Affect vs Effect: Simple Rules to Never Confuse Them Again | TypoGrammar',
      description: 'Learn the difference between affect and effect with the RAVEN rule, examples, common phrases, and mistakes to avoid. Affect = verb, Effect = noun.'
    },
    'lay-vs-lie': {
      title: 'Lay vs Lie: The Complete Guide With All Tense Forms | TypoGrammar',
      description: 'Master lay vs lie in English. Learn transitive vs intransitive usage, all tense forms (lay/laid/lain), memory tricks, and common mistakes with examples.'
    },
    'its-vs-its': {
      title: "It's vs Its: The Simple Rule You Need to Know | TypoGrammar",
      description: "Learn the difference between it's (contraction) and its (possessive) with a simple test, examples, and common mistakes. Never confuse them again."
    },
    'used-to-vs-would': {
      title: 'Used To vs Would: Past Habits & States Explained | TypoGrammar',
      description: 'Learn when to use "used to" vs "would" for past habits and states. Includes key differences, be used to vs used to, and common mistakes with examples.'
    },
    'wish-vs-hope': {
      title: 'Wish vs Hope: When to Use Each (With Examples) | TypoGrammar',
      description: 'Understand the difference between wish and hope in English. Wish = impossible/unlikely, Hope = possible. Clear grammar rules, structures, and examples.'
    },
    // Sentence Structure topics
    'passive-voice': {
      title: 'Passive Voice in English: Formation, Uses & Examples | TypoGrammar',
      description: 'Learn how to form and use the passive voice in English. Covers active vs passive transformation, when to use passive voice, and common mistakes with examples.'
    },
    'subject-verb-agreement': {
      title: 'Subject-Verb Agreement: Rules & Tricky Cases | TypoGrammar',
      description: 'Master subject-verb agreement in English. Learn the basic rule, compound subjects, collective nouns, indefinite pronouns, and tricky cases with clear examples.'
    },
    'question-formation': {
      title: 'Question Formation in English: Yes/No, Wh-, Tag & Indirect Questions | TypoGrammar',
      description: 'Learn how to form all types of English questions: yes/no, wh- questions, tag questions, subject questions, and indirect questions with rules and examples.'
    },
    'reported-speech': {
      title: 'Reported Speech (Indirect Speech): Tense Changes & Rules | TypoGrammar',
      description: 'Master reported speech in English. Learn tense backshift rules, pronoun changes, time expression shifts, and how to convert direct to indirect speech with examples.'
    },
    'direct-and-indirect-speech': {
      title: 'Direct vs Indirect Speech: Rules, Punctuation & Examples | TypoGrammar',
      description: 'Understand the difference between direct and indirect speech. Learn punctuation rules, how to convert between them, and key grammatical changes with examples.'
    },
    'sentence-fragments': {
      title: 'Sentence Fragments: How to Identify & Fix Them | TypoGrammar',
      description: 'Learn what sentence fragments are, common types (dependent clause, -ing, missing subject/verb), and how to fix them. Improve your academic and formal writing.'
    },
    'simple-and-complex-sentences': {
      title: 'Simple, Complex & Compound Sentences: Types & Examples | TypoGrammar',
      description: 'Learn the four sentence types in English: simple, compound, complex, and compound-complex. Includes clauses, punctuation rules, and examples for better writing.'
    },
    // Adjectives & Adverbs topics
    'adjectives-adverbs': {
      title: 'What Is an Adjective & Adverb? Types, Placement & Examples | TypoGrammar',
      description: 'What is an adjective and what is an adverb? Learn the difference, types (manner, place, time, frequency), placement rules, good vs well, and comparative forms with clear examples.'
    },
    'comparative-superlative': {
      title: 'What Is a Comparative & Superlative? Rules, Irregular Forms & Examples | TypoGrammar',
      description: 'What is a comparative and superlative in English? Learn formation rules for short and long adjectives, irregular forms (good/better/best), common mistakes, and when to use than/in/of.'
    },
  };

  const seo = topicId && topicSeoMap[topicId] ? topicSeoMap[topicId] : null;

  usePageMetadata({
    title: seo ? seo.title : (topic ? `${topic.title} | TypoGrammar` : 'Grammar Topic | TypoGrammar'),
    description: seo ? seo.description : (topic ? `Learn all about ${topic.title.toLowerCase()}. This guide covers formation, usage, and examples to help you master this English grammar topic.` : 'Explore English grammar topics on TypoGrammar.'),
    robots: !topic ? 'noindex, follow' : undefined
  });

  if (!topic) {
    return (
       <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
        <h2 className="font-heading text-4xl font-bold text-red-600 mb-4 dark:text-red-500">Topic Not Found</h2>
        <p className="font-body text-xl text-slate-600 dark:text-slate-400">
          Sorry, we couldn't find the grammar topic you were looking for. Please select one from the sidebar.
        </p>
      </div>
    );
  }
  
  const isComplete = progress.completedTopics.includes(topic.id);
  const bestScore = quizForTopic ? progress.quizScores[quizForTopic.topicId] : null;
  const topicSchema = topic ? {
    name: topic.title,
    description: `Learn all about ${topic.title.toLowerCase()}. This comprehensive guide covers formation, usage, and examples.`,
    provider: {
      '@type': 'Organization',
      name: 'TypoGrammar',
      url: 'https://typogrammar.com'
    }
  } : null;

  // Generate FAQ schema for grammar topics
  const generateFAQs = (topicTitle: string, topicId: string) => {
    const baseFAQs = [
      {
        question: `What is ${topicTitle.toLowerCase()} in English grammar?`,
        answer: `${topicTitle} is an important concept in English grammar. This lesson explains the rules, formation, and usage with clear examples to help you master it.`
      },
      {
        question: `How do I use ${topicTitle.toLowerCase()} correctly?`,
        answer: `To use ${topicTitle.toLowerCase()} correctly, follow the rules explained in this lesson. Pay attention to the examples and practice with the quiz at the end of the page.`
      },
      {
        question: `What are common mistakes with ${topicTitle.toLowerCase()}?`,
        answer: `Common mistakes include incorrect formation and usage in context. Review the examples in this lesson to avoid these errors in your writing and speaking.`
      }
    ];
    return baseFAQs;
  };

  const faqSchema = topic ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: generateFAQs(topic.title, topic.id).map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  const relatedTopics = GRAMMAR_TOPICS.filter(
    t => t.category === topic.category && t.id !== topicId
  ).slice(0, 3);

  return (
    <>
      {topicSchema && (
        <SchemaMarkup type="Course" data={topicSchema} />
      )}
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">{topic.category}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">{topic.title}</h1>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 print:hidden">
          <PrintButton />
          <button
            onClick={() => toggleTopicCompletion(topic.id)}
            className={`flex items-center gap-2 font-semibold text-sm py-2 px-4 rounded-full transition-colors duration-200 ${
              isComplete
                ? 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300 dark:hover:bg-green-900'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'
            }`}
          >
            {isComplete ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Completed</span>
              </>
            ) : (
              <span>Mark as Complete</span>
            )}
          </button>
        </div>
      </div>

      <div>{topic.content}</div>

      <div className="my-6">
        <GoogleAd adSlot="5227262163" format="fluid" layout="in-article" />
      </div>

      {quizForTopic && (
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex justify-between items-baseline mb-2">
            <ArticleHeading>Test Your Knowledge</ArticleHeading>
            {bestScore && (
              <p className="font-body text-slate-500 dark:text-slate-400">
                Your best score: <span className="font-bold text-blue-600 dark:text-blue-400">{bestScore.score}/{bestScore.total}</span>
              </p>
            )}
          </div>
          <Quiz
            quizData={quizForTopic}
            onQuizComplete={updateQuizScore}
          />
        </div>
      )}

      {relatedTopics.length > 0 && (
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <ArticleHeading>Related Topics</ArticleHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {relatedTopics.map(related => (
              <Link 
                key={related.id} 
                to={`/topics/${related.id}`}
                className="group block p-6 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-blue-300 hover:shadow-lg transition-all duration-200 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-blue-500"
              >
                <p className="font-semibold font-body text-slate-800 group-hover:text-blue-600 transition-colors dark:text-slate-200 dark:group-hover:text-blue-400 text-lg">{related.title}</p>
                <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">{related.category}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 dark:border-slate-700">
        {previousTopic ? (
          <Link to={`/topics/${previousTopic.id}`} className="group w-full md:w-auto text-left flex items-center space-x-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-blue-300 hover:shadow-md transition-all duration-200 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-blue-500">
            <div className="p-2 bg-slate-100 rounded-full group-hover:bg-blue-100 transition-colors dark:bg-slate-700 dark:group-hover:bg-blue-900/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500 group-hover:text-blue-600 transition-colors dark:text-slate-400 dark:group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Previous Topic</p>
              <p className="font-semibold font-body text-slate-700 group-hover:text-blue-600 transition-colors dark:text-slate-300 dark:group-hover:text-blue-400">{previousTopic.title}</p>
            </div>
          </Link>
        ) : (
          <div className="hidden md:block" /> // Empty div to maintain spacing
        )}
        {nextTopic ? (
          <Link to={`/topics/${nextTopic.id}`} className="group w-full md:w-auto text-right flex items-center justify-end space-x-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-blue-300 hover:shadow-md transition-all duration-200 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-blue-500">
             <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Next Topic</p>
              <p className="font-semibold font-body text-slate-700 group-hover:text-blue-600 transition-colors dark:text-slate-300 dark:group-hover:text-blue-400">{nextTopic.title}</p>
            </div>
             <div className="p-2 bg-slate-100 rounded-full group-hover:bg-blue-100 transition-colors dark:bg-slate-700 dark:group-hover:bg-blue-900/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500 group-hover:text-blue-600 transition-colors dark:text-slate-400 dark:group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
          </Link>
        ) : (
          <div className="hidden md:block" /> // Empty div to maintain spacing
        )}
      </div>
    </article>
    {/* Continue Learning rail with cross-category recommendations */}
    <div className="max-w-4xl mx-auto">
      <RelatedContent
        title="Keep the Momentum Going"
        description="Mix up your study with these complementary tools, articles, and practice resources."
        items={[
          ...(quizForTopic
            ? [{
                to: `/topics/${topic.id}#test-your-knowledge`,
                title: `Quiz: ${topic.title}`,
                subtitle: 'Test what you just learned with instant feedback.',
                badge: 'Quiz',
                meta: `${quizForTopic.questions.length} questions`,
              }]
            : []),
          {
            to: '/quizzes/verb-tenses-quiz/',
            title: 'Free 50-Question Verb Tenses Quiz',
            subtitle: 'Cover all 12 tenses with instant scoring and explanations.',
            badge: 'Quiz',
            meta: '50 questions',
          },
          {
            to: '/grammar-checker/',
            title: 'Free Grammar Checker',
            subtitle: 'Paste your writing and catch mistakes instantly.',
            badge: 'Tool',
            meta: 'No signup',
          },
          {
            to: '/ielts/english-grammar-pdf/',
            title: 'Complete English Grammar PDF',
            subtitle: 'Download the workbook with exercises (free).',
            badge: 'PDF',
            meta: 'Free',
          },
          {
            to: '/blog/common-grammar-mistakes-in-english/',
            title: '50 Common Grammar Mistakes',
            subtitle: 'See the errors most learners make — and how to fix them.',
            badge: 'Article',
            meta: '12 min read',
          },
          ...(nextTopic
            ? [{
                to: `/topics/${nextTopic.id}`,
                title: nextTopic.title,
                subtitle: `Next lesson in ${nextTopic.category}.`,
                badge: 'Lesson',
                meta: 'Up next',
              }]
            : []),
        ]}
      />
    </div>
    {nextTopic && (
      <StickyNextCTA
        to={`/topics/${nextTopic.id}`}
        label={nextTopic.title}
        subtitle="Up next"
        threshold={55}
      />
    )}
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
        <div className="mt-6">
          <GoogleAd adSlot="1564604936" />
        </div>
        <div className="mt-6">
          <GoogleAd adSlot="2686114912" format="autorelaxed" fullWidthResponsive={false} />
        </div>
    </>
  );
};

export default TopicPage;