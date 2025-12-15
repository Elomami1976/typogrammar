
import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading, InlineCode, BulletList } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';

const ParaphrasingPage: React.FC = () => {
  usePageMetadata({
    title: 'How to Paraphrase & Avoid Plagiarism | TypoGrammar',
    description: 'Learn effective paraphrasing techniques to avoid plagiarism in academic and professional writing. 4-step guide with examples and tips for restating ideas in your own words.'
  });

  return (
    <>
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Writing Skills</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">How to Paraphrase & Avoid Plagiarism</h1>
        </div>
      </div>

      <ArticleParagraph>
        Paraphrasing is one of the most important skills in academic and professional writing. It allows you to use information from sources to support your argument while demonstrating that you truly understand the material. More than just changing a few words, effective paraphrasing involves processing an idea and restating it in your own unique voice.
      </ArticleParagraph>

      <ArticleHeading>What is Paraphrasing?</ArticleHeading>
      <ArticleParagraph>
        Paraphrasing is restating someone else's ideas in your own words and sentence structure. The goal is to retain the original meaning but express it in a new way. It's different from:
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Quoting:</strong> Using the author's exact words in quotation marks.</>,
        <><strong>Summarizing:</strong> Condensing the main points of a longer text into a brief overview.</>,
      ]} />
      <ArticleParagraph>
        A good paraphrase is typically about the same length as the original passage.
      </ArticleParagraph>

      <ArticleHeading>A 4-Step Guide to Effective Paraphrasing</ArticleHeading>
       <BulletList items={[
        <><strong>1. Read for Understanding:</strong> Read the original passage several times until you fully grasp its meaning. You cannot paraphrase what you don't understand.</>,
        <><strong>2. Look Away and Take Notes:</strong> Cover the original text and write down the main points from memory. Use keywords and short phrases instead of full sentences.</>,
        <><strong>3. Write Your Paraphrase:</strong> Using only your notes, write the idea in a completely new sentence or series of sentences. Focus on conveying the core meaning in your own style.</>,
        <><strong>4. Compare and Cite:</strong> Compare your version with the original. Have you accurately preserved the meaning? Is your sentence structure and vocabulary significantly different? If not, revise again. Finally, add a proper citation to give credit to the original author.</>,
      ]} />

      <ArticleHeading>Techniques for Changing the Original Text</ArticleHeading>
      <ArticleParagraph>When writing your paraphrase, use a combination of these techniques to ensure it is sufficiently different from the original.</ArticleParagraph>
       <BulletList items={[
        <><strong>Use Synonyms:</strong> Replace words with words that have a similar meaning (e.g., <InlineCode>effective</InlineCode> → <InlineCode>successful</InlineCode>, <InlineCode>investigate</InlineCode> → <InlineCode>examine</InlineCode>).</>,
        <><strong>Change the Sentence Structure:</strong> If the original is a complex sentence, try breaking it into two simpler ones. If it's in the active voice, try changing it to the passive voice (e.g., "The scientist conducted the experiment" → "The experiment was conducted by the scientist").</>,
        <><strong>Change Word Forms:</strong> Change nouns to verbs, adjectives to adverbs, etc. (e.g., "a detailed analysis" → "to analyze in detail").</>,
      ]} />

      <ArticleHeading>What is Plagiarism?</ArticleHeading>
      <ArticleParagraph>
        Plagiarism is the act of using someone else's words, ideas, or work without giving them proper credit. It is a serious academic offense. Plagiarism can be intentional (copying and pasting) or unintentional (forgetting to cite a source).
      </ArticleParagraph>
      <div className="my-6 p-4 bg-red-50 border-l-4 border-red-400 text-red-800 dark:bg-red-900/30 dark:border-red-500 dark:text-red-300">
        <p className="font-bold">Important:</p>
        <p>Paraphrasing a source without citing it is still plagiarism, even if you have changed the words.</p>
      </div>

      <ArticleHeading>The Golden Rule: When in Doubt, Cite It</ArticleHeading>
      <ArticleParagraph>
        You must provide a citation for any information that is not your own original thought or common knowledge. This includes direct quotes, paraphrased ideas, and summarized points. Citing your sources is not a sign of weakness; it shows that you have done your research and are engaging in an academic conversation.
      </ArticleParagraph>
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default ParaphrasingPage;
