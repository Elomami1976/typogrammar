
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants/blogPosts';
import GoogleAd from '../components/GoogleAd';
import usePageMetadata from '../hooks/usePageMetadata';
import BlogImage from '../components/BlogImage';

const BlogPage: React.FC = () => {
  usePageMetadata({
    title: 'The TypoGrammar Blog | English Grammar & Writing Tips',
    description: 'Explore articles on grammar, writing, style, and the wonderful quirks of the English language from the TypoGrammar team.'
  });

  return (
    <>
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-heading text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">The TypoGrammar Blog</h1>
        <p className="font-body text-xl text-slate-600 max-w-2xl mx-auto dark:text-slate-400">
          Articles on grammar, writing, and the wonderful quirks of the English language.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map(post => (
          <Link 
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 overflow-hidden flex flex-col hover:border-blue-300 hover:shadow-xl transition-all duration-300 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50 dark:hover:border-blue-500"
          >
            <div className="w-full h-48 overflow-hidden">
              <BlogImage
                slug={post.slug}
                fallbackUrl={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <p className="font-body text-sm font-semibold text-blue-600 mb-2 dark:text-blue-400">{post.category}</p>
              <h2 className="font-heading text-2xl font-bold text-slate-800 mb-3 flex-grow group-hover:text-blue-700 transition-colors duration-200 dark:text-slate-200 dark:group-hover:text-blue-400">{post.title}</h2>
              <p className="font-body text-slate-600 leading-relaxed mb-6 dark:text-slate-400">{post.summary}</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="font-body text-sm text-slate-500 dark:text-slate-400">
                  <p>{post.author}</p>
                  <p>{post.date}</p>
                </div>
                 <div className="flex items-center text-blue-600 font-semibold text-sm dark:text-blue-400">
                   <span>Read More</span>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                 </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <div className="mt-8 max-w-4xl mx-auto">
      <GoogleAd adSlot="6406598038" />
    </div>
    </>
  );
};

export default BlogPage;