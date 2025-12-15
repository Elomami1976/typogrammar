import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';

interface GlossaryTerm {
  term: string;
  definition: string;
  example?: string;
  relatedTopics?: { label: string; link: string }[];
}

const glossaryTerms: Record<string, GlossaryTerm[]> = {
  A: [
    {
      term: 'Active Voice',
      definition: 'A sentence structure where the subject performs the action expressed by the verb.',
      example: 'The cat chased the mouse. (The subject "cat" performs the action "chased")',
      relatedTopics: [{ label: 'Passive Voice', link: '/topics/passive-voice' }]
    },
    {
      term: 'Adjective',
      definition: 'A word that describes or modifies a noun or pronoun, providing more information about its qualities, quantity, or state.',
      example: 'The beautiful garden has many colorful flowers.',
      relatedTopics: [{ label: 'Parts of Speech', link: '/grammar-fundamentals/basic-terminology' }]
    },
    {
      term: 'Adverb',
      definition: 'A word that modifies a verb, adjective, or another adverb, often describing how, when, where, or to what extent something happens.',
      example: 'She speaks quickly and very clearly.',
      relatedTopics: [{ label: 'Parts of Speech', link: '/grammar-fundamentals/basic-terminology' }]
    },
    {
      term: 'Antecedent',
      definition: 'The noun or noun phrase that a pronoun refers back to in a sentence.',
      example: 'Sarah lost her keys. ("Sarah" is the antecedent of "her")',
    },
    {
      term: 'Apostrophe',
      definition: "A punctuation mark (') used to indicate possession or the omission of letters in contractions.",
      example: "John's book is on the table. It's raining today.",
    },
    {
      term: 'Article',
      definition: 'A word (a, an, the) that comes before a noun to indicate whether it is specific or general.',
      example: 'The book on the table is mine. I need a pen.',
      relatedTopics: [{ label: 'Articles', link: '/topics/articles' }]
    },
    {
      term: 'Auxiliary Verb',
      definition: 'A helping verb (be, have, do, will, shall, would, should, can, could, may, might, must) used with a main verb to form tenses, questions, or negatives.',
      example: 'She has finished her work. They are studying now.',
      relatedTopics: [{ label: 'Modal Verbs', link: '/topics/modal-verbs' }]
    }
  ],
  B: [
    {
      term: 'Base Form',
      definition: 'The simplest form of a verb without any endings or modifications (infinitive without "to").',
      example: 'go, eat, write, speak',
    }
  ],
  C: [
    {
      term: 'Clause',
      definition: 'A group of words containing a subject and a predicate. Can be independent (complete thought) or dependent (incomplete thought).',
      example: 'Independent: She loves reading. Dependent: Because she loves reading.'
    },
    {
      term: 'Collocation',
      definition: 'Words that are commonly used together in a natural-sounding way.',
      example: 'make a decision, heavy rain, strong coffee',
      relatedTopics: [{ label: 'Collocations', link: '/vocabulary/collocations' }]
    },
    {
      term: 'Comma',
      definition: 'A punctuation mark (,) used to separate items in a list, clauses in a sentence, or to set off introductory elements.',
      example: 'I bought apples, oranges, and bananas. When I arrived, everyone was waiting.',
    },
    {
      term: 'Common Noun',
      definition: 'A general name for a person, place, thing, or idea (not capitalized unless at the start of a sentence).',
      example: 'city, teacher, happiness, book',
    },
    {
      term: 'Comparative',
      definition: 'The form of an adjective or adverb used to compare two things.',
      example: 'bigger, more interesting, better, faster',
      relatedTopics: [{ label: 'Comparatives and Superlatives', link: '/topics/comparatives-superlatives' }]
    },
    {
      term: 'Compound Sentence',
      definition: 'A sentence made up of two or more independent clauses joined by a coordinating conjunction or semicolon.',
      example: 'I wanted to go, but it was raining. She studied hard; she passed the exam.'
    },
    {
      term: 'Conditional',
      definition: 'A sentence structure that expresses hypothetical situations and their consequences, typically using "if" clauses.',
      example: 'If it rains, we will stay home. (First conditional)',
      relatedTopics: [{ label: 'Conditionals', link: '/topics/conditionals' }]
    },
    {
      term: 'Conjunction',
      definition: 'A word that connects words, phrases, or clauses (and, but, or, because, although, when, etc.).',
      example: 'I like tea and coffee. She studied hard, but she failed the exam.',
      relatedTopics: [{ label: 'Conjunctions', link: '/topics/conjunctions' }]
    },
    {
      term: 'Contraction',
      definition: 'A shortened form of a word or group of words created by omitting certain letters and replacing them with an apostrophe.',
      example: "don't (do not), she's (she is), I've (I have)",
    },
    {
      term: 'Countable Noun',
      definition: 'A noun that can be counted and has both singular and plural forms.',
      example: 'one book, two books; a cat, three cats',
      relatedTopics: [{ label: 'Countable vs Uncountable', link: '/topics/countable-uncountable-nouns' }]
    }
  ],
  D: [
    {
      term: 'Definite Article',
      definition: 'The word "the," used to refer to a specific noun that is known to both the speaker and listener.',
      example: 'The book I mentioned yesterday is on the table.',
      relatedTopics: [{ label: 'Articles', link: '/topics/articles' }]
    },
    {
      term: 'Demonstrative Pronoun',
      definition: 'A pronoun used to point to specific things (this, that, these, those).',
      example: 'This is my car. Those are expensive.',
    },
    {
      term: 'Dependent Clause',
      definition: 'A clause that cannot stand alone as a complete sentence and depends on an independent clause.',
      example: 'Because it was raining (incomplete). Because it was raining, we stayed home (complete).'
    },
    {
      term: 'Direct Object',
      definition: 'The noun or pronoun that receives the action of a transitive verb.',
      example: 'She wrote a letter. (The letter receives the action of writing)',
    },
    {
      term: 'Direct Speech',
      definition: 'The exact words someone said, enclosed in quotation marks.',
      example: 'He said, "I am going to the store."',
      relatedTopics: [{ label: 'Reported Speech', link: '/topics/reported-speech' }]
    }
  ],
  E: [
    {
      term: 'Ellipsis',
      definition: 'The omission of words from a sentence when the meaning is clear from context, or three dots (...) indicating omitted text.',
      example: 'She can play the piano, and he [can play] the guitar. The sentence continues...',
    }
  ],
  F: [
    {
      term: 'Future Continuous',
      definition: 'A verb tense used to describe an action that will be in progress at a specific time in the future.',
      example: 'This time tomorrow, I will be flying to Paris.',
      relatedTopics: [{ label: 'Future Progressive', link: '/topics/future-progressive' }]
    },
    {
      term: 'Future Perfect',
      definition: 'A verb tense used to describe an action that will be completed before a specific time in the future.',
      example: 'By next year, I will have graduated from university.',
      relatedTopics: [{ label: 'Future Perfect', link: '/topics/future-perfect' }]
    },
    {
      term: 'Future Simple',
      definition: 'A verb tense used to describe actions that will happen in the future.',
      example: 'I will call you tomorrow. She will arrive at 3 PM.',
      relatedTopics: [{ label: 'Future Simple', link: '/topics/future-simple' }]
    }
  ],
  G: [
    {
      term: 'Gerund',
      definition: 'The -ing form of a verb used as a noun.',
      example: 'Swimming is good exercise. I enjoy reading.',
      relatedTopics: [{ label: 'Gerunds and Infinitives', link: '/topics/gerunds-infinitives' }]
    }
  ],
  H: [
    {
      term: 'Homograph',
      definition: 'Words that are spelled the same but have different meanings and sometimes different pronunciations.',
      example: 'lead (metal) vs. lead (to guide); tear (rip) vs. tear (crying)',
      relatedTopics: [{ label: 'Homophones & Homographs', link: '/vocabulary/homophones-homonyms-homographs' }]
    },
    {
      term: 'Homophone',
      definition: 'Words that sound the same but have different meanings and spellings.',
      example: 'their/there/they\'re, to/too/two, write/right',
      relatedTopics: [{ label: 'Homophones & Homographs', link: '/vocabulary/homophones-homonyms-homographs' }]
    }
  ],
  I: [
    {
      term: 'Idiom',
      definition: 'A phrase or expression whose meaning cannot be understood from the individual words alone.',
      example: 'It\'s raining cats and dogs. (It\'s raining heavily)',
      relatedTopics: [{ label: 'Idioms', link: '/idioms' }]
    },
    {
      term: 'Imperative',
      definition: 'A verb form used to give commands, instructions, or make requests.',
      example: 'Close the door. Please sit down. Don\'t touch that!'
    },
    {
      term: 'Indefinite Article',
      definition: 'The words "a" or "an," used before singular countable nouns when referring to something general or mentioned for the first time.',
      example: 'I need a pen. She is an engineer.',
      relatedTopics: [{ label: 'Articles', link: '/topics/articles' }]
    },
    {
      term: 'Independent Clause',
      definition: 'A clause that can stand alone as a complete sentence with a subject and predicate.',
      example: 'She loves reading. They went to the park.'
    },
    {
      term: 'Indirect Object',
      definition: 'The noun or pronoun that receives the direct object, often answering "to whom" or "for whom."',
      example: 'She gave me a book. ("me" is the indirect object, "book" is the direct object)',
    },
    {
      term: 'Infinitive',
      definition: 'The base form of a verb, usually preceded by "to."',
      example: 'to go, to eat, to write, to speak',
      relatedTopics: [{ label: 'Gerunds and Infinitives', link: '/topics/gerunds-infinitives' }]
    },
    {
      term: 'Interjection',
      definition: 'A word or phrase that expresses strong emotion and is often followed by an exclamation mark.',
      example: 'Wow! Oh no! Ouch! Hey!',
    },
    {
      term: 'Irregular Verb',
      definition: 'A verb that does not follow the regular pattern of adding -ed to form past tense and past participle.',
      example: 'go/went/gone, eat/ate/eaten, write/wrote/written',
      relatedTopics: [{ label: 'Irregular Verbs', link: '/irregular-verbs' }]
    }
  ],
  J: [],
  K: [],
  L: [
    {
      term: 'Linking Verb',
      definition: 'A verb that connects the subject to a subject complement, describing the subject rather than showing action.',
      example: 'She is happy. The soup tastes delicious. He became a doctor.',
    }
  ],
  M: [
    {
      term: 'Modal Verb',
      definition: 'An auxiliary verb (can, could, may, might, must, shall, should, will, would) that expresses possibility, ability, permission, or obligation.',
      example: 'You must study. She can swim. They might come.',
      relatedTopics: [{ label: 'Modal Verbs', link: '/topics/modal-verbs' }]
    },
    {
      term: 'Modifier',
      definition: 'A word, phrase, or clause that provides description or additional information about another word.',
      example: 'The very tall man walked slowly. (Both "very tall" and "slowly" are modifiers)',
    }
  ],
  N: [
    {
      term: 'Noun',
      definition: 'A word that names a person, place, thing, or idea.',
      example: 'teacher, London, happiness, book, freedom',
      relatedTopics: [{ label: 'Parts of Speech', link: '/grammar-fundamentals/basic-terminology' }]
    },
    {
      term: 'Noun Clause',
      definition: 'A dependent clause that functions as a noun in a sentence.',
      example: 'What she said surprised me. I don\'t know where he went.',
    }
  ],
  O: [
    {
      term: 'Object',
      definition: 'The noun or pronoun that receives the action of the verb or follows a preposition.',
      example: 'She kicked the ball. (direct object) He gave her a gift. (indirect object)',
    }
  ],
  P: [
    {
      term: 'Participle',
      definition: 'A verb form that can function as an adjective. Present participles end in -ing; past participles often end in -ed, -en, -d, -t, or -n.',
      example: 'The running water. A broken window. The excited children.',
    },
    {
      term: 'Passive Voice',
      definition: 'A sentence structure where the subject receives the action rather than performing it.',
      example: 'The mouse was chased by the cat. (The subject "mouse" receives the action)',
      relatedTopics: [{ label: 'Passive Voice', link: '/topics/passive-voice' }]
    },
    {
      term: 'Past Continuous',
      definition: 'A verb tense used to describe an action that was in progress at a specific time in the past.',
      example: 'I was studying at 8 PM last night. They were playing football.',
      relatedTopics: [{ label: 'Past Progressive', link: '/topics/past-progressive' }]
    },
    {
      term: 'Past Perfect',
      definition: 'A verb tense used to describe an action that was completed before another action in the past.',
      example: 'She had finished her homework before dinner. I had already left when he arrived.',
      relatedTopics: [{ label: 'Past Perfect', link: '/topics/past-perfect' }]
    },
    {
      term: 'Past Simple',
      definition: 'A verb tense used to describe completed actions in the past.',
      example: 'I walked to school yesterday. She visited Paris last year.',
      relatedTopics: [{ label: 'Past Simple', link: '/topics/past-simple' }]
    },
    {
      term: 'Personal Pronoun',
      definition: 'A pronoun that refers to specific people or things (I, you, he, she, it, we, they).',
      example: 'She is my friend. They went to the store.',
    },
    {
      term: 'Phrasal Verb',
      definition: 'A verb combined with a preposition or adverb (or both) that creates a meaning different from the original verb.',
      example: 'give up (quit), look after (take care of), put off (postpone)',
      relatedTopics: [{ label: 'Phrasal Verbs', link: '/phrasal-verbs' }]
    },
    {
      term: 'Phrase',
      definition: 'A group of words that work together but do not contain both a subject and a verb.',
      example: 'in the morning, very carefully, the big red house',
    },
    {
      term: 'Possessive',
      definition: 'A form that shows ownership or relationship.',
      example: "John's book, my car, their house, yours",
    },
    {
      term: 'Predicate',
      definition: 'The part of a sentence that contains the verb and tells something about the subject.',
      example: 'The cat [slept on the couch]. She [runs every morning].',
    },
    {
      term: 'Prefix',
      definition: 'A group of letters added to the beginning of a word to change its meaning.',
      example: 'un- (unhappy), re- (rewrite), pre- (preview), dis- (disagree)',
      relatedTopics: [{ label: 'Prefixes & Suffixes', link: '/prefixes-suffixes' }]
    },
    {
      term: 'Preposition',
      definition: 'A word that shows the relationship between a noun or pronoun and other words in a sentence.',
      example: 'in, on, at, by, with, from, to, under, over',
      relatedTopics: [{ label: 'Prepositions', link: '/topics/prepositions' }]
    },
    {
      term: 'Present Continuous',
      definition: 'A verb tense used to describe an action happening now or around the present time.',
      example: 'I am studying now. She is working on a project.',
      relatedTopics: [{ label: 'Present Progressive', link: '/topics/present-progressive' }]
    },
    {
      term: 'Present Perfect',
      definition: 'A verb tense used to describe an action that started in the past and continues to the present, or has present relevance.',
      example: 'I have lived here for five years. She has just arrived.',
      relatedTopics: [{ label: 'Present Perfect', link: '/topics/present-perfect' }]
    },
    {
      term: 'Present Simple',
      definition: 'A verb tense used to describe habitual actions, general truths, or permanent situations.',
      example: 'I work every day. The sun rises in the east. She speaks three languages.',
      relatedTopics: [{ label: 'Present Simple', link: '/topics/present-simple' }]
    },
    {
      term: 'Pronoun',
      definition: 'A word that replaces a noun to avoid repetition.',
      example: 'he, she, it, they, we, you, who, which, that',
      relatedTopics: [{ label: 'Parts of Speech', link: '/grammar-fundamentals/basic-terminology' }]
    },
    {
      term: 'Proper Noun',
      definition: 'The specific name of a particular person, place, or thing, always capitalized.',
      example: 'London, Sarah, Microsoft, Amazon River, Monday',
    }
  ],
  Q: [
    {
      term: 'Quantifier',
      definition: 'A word or phrase that indicates quantity (how much or how many).',
      example: 'some, many, few, much, little, all, several, enough'
    },
    {
      term: 'Question Tag',
      definition: 'A short question added to the end of a statement to ask for confirmation.',
      example: 'You like pizza, don\'t you? She can swim, can\'t she?'
    }
  ],
  R: [
    {
      term: 'Reflexive Pronoun',
      definition: 'A pronoun that refers back to the subject of the sentence (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves).',
      example: 'She taught herself to play guitar. I hurt myself.',
    },
    {
      term: 'Regular Verb',
      definition: 'A verb that forms its past tense and past participle by adding -ed.',
      example: 'walk/walked/walked, play/played/played, study/studied/studied',
    },
    {
      term: 'Relative Clause',
      definition: 'A type of dependent clause that modifies a noun, usually beginning with a relative pronoun (who, which, that, whose, where, when).',
      example: 'The book that I bought is interesting. The woman who lives next door is a doctor.',
    },
    {
      term: 'Relative Pronoun',
      definition: 'A pronoun used to introduce a relative clause (who, whom, whose, which, that).',
      example: 'The student who studied hard passed the exam.',
    },
    {
      term: 'Reported Speech',
      definition: 'Reporting what someone said without using their exact words (also called indirect speech).',
      example: 'Direct: He said, "I am tired." Reported: He said that he was tired.',
      relatedTopics: [{ label: 'Reported Speech', link: '/topics/reported-speech' }]
    }
  ],
  S: [
    {
      term: 'Semicolon',
      definition: 'A punctuation mark (;) used to connect two independent clauses or separate items in a complex list.',
      example: 'I love reading; it relaxes me. She bought apples, which were red; oranges, which were sweet; and bananas.',
    },
    {
      term: 'Sentence',
      definition: 'A group of words that expresses a complete thought and contains at least a subject and a predicate.',
      example: 'The cat sleeps. She is studying grammar.'
    },
    {
      term: 'Subject',
      definition: 'The person, place, thing, or idea that performs the action or is described in a sentence.',
      example: '[The dog] barked loudly. [She] is a teacher.',
    },
    {
      term: 'Subject-Verb Agreement',
      definition: 'The rule that subjects and verbs must agree in number (singular subject takes singular verb; plural subject takes plural verb).',
      example: 'She walks (singular). They walk (plural).',
      relatedTopics: [{ label: 'Subject-Verb Agreement', link: '/topics/subject-verb-agreement' }]
    },
    {
      term: 'Subjunctive',
      definition: 'A verb mood used to express wishes, suggestions, demands, or hypothetical situations.',
      example: 'I suggest that he study harder. If I were rich, I would travel.',
    },
    {
      term: 'Suffix',
      definition: 'A group of letters added to the end of a word to change its meaning or grammatical function.',
      example: '-ly (quickly), -ness (happiness), -able (readable), -tion (creation)',
      relatedTopics: [{ label: 'Prefixes & Suffixes', link: '/prefixes-suffixes' }]
    },
    {
      term: 'Superlative',
      definition: 'The form of an adjective or adverb used to compare three or more things, indicating the highest degree.',
      example: 'biggest, most interesting, best, fastest',
      relatedTopics: [{ label: 'Comparatives and Superlatives', link: '/topics/comparatives-superlatives' }]
    }
  ],
  T: [
    {
      term: 'Tense',
      definition: 'The form of a verb that indicates the time of an action or state (past, present, or future).',
      example: 'I walk (present), I walked (past), I will walk (future)',
      relatedTopics: [{ label: 'Tense Visualizer', link: '/tense-visualizer' }]
    },
    {
      term: 'Transitive Verb',
      definition: 'A verb that requires a direct object to complete its meaning.',
      example: 'She bought a car. (The verb "bought" requires the object "a car")',
    }
  ],
  U: [
    {
      term: 'Uncountable Noun',
      definition: 'A noun that cannot be counted individually and has no plural form.',
      example: 'water, information, advice, furniture, money',
      relatedTopics: [{ label: 'Countable vs Uncountable', link: '/topics/countable-uncountable-nouns' }]
    }
  ],
  V: [
    {
      term: 'Verb',
      definition: 'A word that expresses an action, occurrence, or state of being.',
      example: 'run, think, become, exist, have',
      relatedTopics: [{ label: 'Parts of Speech', link: '/grammar-fundamentals/basic-terminology' }]
    },
    {
      term: 'Voice',
      definition: 'The form of a verb that shows whether the subject performs the action (active) or receives it (passive).',
      example: 'Active: The dog bit the man. Passive: The man was bitten by the dog.',
      relatedTopics: [{ label: 'Passive Voice', link: '/topics/passive-voice' }]
    }
  ],
  W: [],
  X: [],
  Y: [],
  Z: []
};

const GlossaryPage: React.FC = () => {
  usePageMetadata({
    title: 'Complete English Grammar Glossary A-Z | TypoGrammar',
    description: 'Comprehensive A-Z glossary of English grammar terms with clear definitions, examples, and links to detailed lessons. Your complete reference guide for mastering grammar terminology.'
  });

  const [selectedLetter, setSelectedLetter] = useState<string>('A');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white font-heading">
          Grammar Glossary
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Your complete A-Z reference guide to English grammar terms. Browse by letter to find clear definitions, 
          examples, and links to comprehensive lessons.
        </p>
      </div>

      <GoogleAd adSlot="6406598038" />

      {/* Alphabet Navigation */}
      <div className="mb-8 bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
          Browse by Letter
        </h2>
        <div className="flex flex-wrap gap-2">
          {alphabet.map((letter) => {
            const hasTerms = glossaryTerms[letter] && glossaryTerms[letter].length > 0;
            return (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                disabled={!hasTerms}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                  selectedLetter === letter
                    ? 'bg-blue-600 text-white shadow-lg scale-110'
                    : hasTerms
                    ? 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-slate-600'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-300 dark:text-slate-600 cursor-not-allowed'
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Terms List */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white font-heading">
          {selectedLetter}
        </h2>

        {glossaryTerms[selectedLetter].length === 0 ? (
          <p className="text-slate-600 dark:text-slate-400 text-center py-8">
            No terms available for letter "{selectedLetter}" yet. Check back soon!
          </p>
        ) : (
          <div className="space-y-6">
            {glossaryTerms[selectedLetter].map((item, index) => (
              <div
                key={index}
                className="border-b border-slate-200 dark:border-slate-700 pb-6 last:border-0"
              >
                {/* Term */}
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {item.term}
                </h3>

                {/* Definition */}
                <p className="text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                  {item.definition}
                </p>

                {/* Example */}
                {item.example && (
                  <div className="bg-blue-50 dark:bg-slate-900 border-l-4 border-blue-500 p-4 rounded mb-3">
                    <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">
                      Example:
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 italic">
                      {item.example}
                    </p>
                  </div>
                )}

                {/* Related Topics */}
                {item.relatedTopics && item.relatedTopics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400 mr-2">
                      Related topics:
                    </span>
                    {item.relatedTopics.map((topic, idx) => (
                      <Link
                        key={idx}
                        to={topic.link}
                        className="text-sm bg-slate-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-slate-600 transition-colors"
                      >
                        {topic.label} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white font-heading">
          Need More Help?
        </h2>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Explore our comprehensive learning resources to master English grammar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/grammar-guide"
            className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-3xl mb-2">📚</div>
            <div className="font-semibold text-slate-900 dark:text-white">Grammar Guide</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">All topics organized</div>
          </Link>
          <Link
            to="/getting-started"
            className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-3xl mb-2">🚀</div>
            <div className="font-semibold text-slate-900 dark:text-white">Getting Started</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Begin your journey</div>
          </Link>
          <Link
            to="/blog"
            className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-3xl mb-2">✍️</div>
            <div className="font-semibold text-slate-900 dark:text-white">Blog</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Tips and insights</div>
          </Link>
        </div>
      </div>

      <GoogleAd adSlot="6406598038" />
    </div>
  );
};

export default GlossaryPage;
