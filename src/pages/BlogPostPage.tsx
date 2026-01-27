
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants/blogPosts';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';
import BlogMetadata from '../components/BlogMetadata';
import BlogImage from '../components/BlogImage';
import ShareButtons from '../components/ShareButtons';
import SchemaMarkup from '../components/SchemaMarkup';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const postIndex = BLOG_POSTS.findIndex(p => p.slug === slug);
  const post = postIndex !== -1 ? BLOG_POSTS[postIndex] : null;

  const previousPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  // Use custom meta title and description for the TOEFL Practice Online post
  const metaTitle = post?.slug === 'how-to-use-official-toefl-practice-online' 
    ? 'How to Use Official TOEFL Practice Online (ETS) to Boost Your Score'
    : post ? `${post.title} | TypoGrammar Blog` : 'Blog Post | TypoGrammar';
  
  const metaDescription = post?.slug === 'how-to-use-official-toefl-practice-online'
    ? 'Learn how to use official TOEFL Practice Online from ETS correctly. Avoid common mistakes, analyze results properly, and improve your TOEFL iBT score faster.'
    : post ? post.summary : 'Read articles on grammar, writing, and the quirks of the English language.';

  usePageMetadata({
    title: metaTitle,
    description: metaDescription
  });

  if (!post) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
        <h2 className="font-heading text-4xl font-bold text-red-600 mb-4 dark:text-red-500">Post Not Found</h2>
        <p className="font-body text-xl text-slate-600 dark:text-slate-400">
          Sorry, we couldn't find the blog post you were looking for.
        </p>
        <Link to="/blog" className="mt-6 inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Removed BlogMetadata - now uses custom SEO from pageSeoMap.json for golden pages */}
      {/* <BlogMetadata
        title={post.title}
        description={post.summary}
        author="TypoGrammar Team"
        publishedDate={post.date}
        url={`https://typogrammar.com/blog/${post.slug}`}
        imageUrl="https://typogrammar.com/assets/og-image.png"
      /> */}
      <SchemaMarkup
        type="Article"
        data={{
          headline: post.title,
          description: post.summary,
          image: post.image || 'https://typogrammar.com/assets/og-image.png',
          datePublished: post.date,
          dateModified: post.date,
          author: {
            '@type': 'Organization',
            name: 'TypoGrammar Team',
            url: 'https://typogrammar.com'
          },
          publisher: {
            '@type': 'Organization',
            name: 'TypoGrammar',
            logo: {
              '@type': 'ImageObject',
              url: 'https://typogrammar.com/logo.png'
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://typogrammar.com/blog/${post.slug}`
          },
          articleSection: post.category,
          keywords: post.category
        }}
      />
      {/* Render custom schema markup if provided */}
      {(post as any).schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify((post as any).schemaMarkup)
          }}
        />
      )}
      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start mb-8">
        <div className="text-left">
            <p className="font-body text-base font-semibold text-blue-600 mb-2 dark:text-blue-400">{post.category}</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">{post.title}</h1>
            <p className="font-body text-slate-500 dark:text-slate-400">
              By {post.author === 'TypoGrammar Editorial Team' ? (
                <Link to="/about/editorial-team" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">
                  {post.author}
                </Link>
              ) : (
                post.author
              )} on {post.date}
            </p>
        </div>
      </div>
      
      <div className="mb-8 rounded-xl overflow-hidden">
        <BlogImage
          slug={post.slug}
          fallbackUrl={post.image}
          alt={post.title}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="prose prose-lg max-w-none">
        {post.content}
      </div>

      <ShareButtons 
        url={`https://typogrammar.com/blog/${post.slug}`}
        title={post.title}
        description={post.summary}
      />

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {previousPost ? (
            <Link to={`/blog/${previousPost.slug}`} className="group w-full md:w-auto text-left flex items-center space-x-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-blue-300 hover:shadow-md transition-all duration-200 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-blue-500">
              <div className="p-2 bg-slate-100 rounded-full group-hover:bg-blue-100 transition-colors dark:bg-slate-700 dark:group-hover:bg-blue-900/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500 group-hover:text-blue-600 transition-colors dark:text-slate-400 dark:group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Previous Post</p>
                <p className="font-semibold font-body text-slate-700 group-hover:text-blue-600 transition-colors dark:text-slate-300 dark:group-hover:text-blue-400">{previousPost.title}</p>
              </div>
            </Link>
          ) : (
            <div className="w-full md:w-auto" /> // Empty div to maintain spacing
          )}
          {nextPost ? (
            <Link to={`/blog/${nextPost.slug}`} className="group w-full md:w-auto text-right flex items-center justify-end space-x-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-blue-300 hover:shadow-md transition-all duration-200 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-blue-500">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Next Post</p>
                <p className="font-semibold font-body text-slate-700 group-hover:text-blue-600 transition-colors dark:text-slate-300 dark:group-hover:text-blue-400">{nextPost.title}</p>
              </div>
              <div className="p-2 bg-slate-100 rounded-full group-hover:bg-blue-100 transition-colors dark:bg-slate-700 dark:group-hover:bg-blue-900/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500 group-hover:text-blue-600 transition-colors dark:text-slate-400 dark:group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ) : (
            <div className="w-full md:w-auto" /> // Empty div to maintain spacing
          )}
        </div>
        
        <div className="mt-12 text-center">
            <Link to="/blog" className="group inline-flex items-center text-blue-600 font-semibold dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all articles
            </Link>
        </div>
      </div>
    </article>
    </>
  );
};

export default BlogPostPage;