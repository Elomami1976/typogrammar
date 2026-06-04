import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS_META as BLOG_POSTS, type BlogPostMeta } from '../constants/blogPostsMeta';
import GoogleAd from '../components/GoogleAd';
import usePageMetadata from '../hooks/usePageMetadata';
import BlogImage from '../components/BlogImage';

// Reading time comes from BlogPostMeta.readMinutes (computed by
// scripts/extract-meta.cjs by counting words in the post's JSX content).
const getReadingTime = (post: BlogPostMeta): number => post.readMinutes ?? 5;

const ArrowRight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ClockIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CategoryBadge: React.FC<{ category: string; size?: 'sm' | 'md' }> = ({ category, size = 'sm' }) => (
  <span
    className={`inline-flex items-center font-semibold uppercase tracking-wide rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 ${
      size === 'md' ? 'text-xs px-3 py-1' : 'text-[10px] px-2.5 py-1'
    }`}
  >
    {category}
  </span>
);

const PostMeta: React.FC<{ post: BlogPostMeta; light?: boolean }> = ({ post, light = false }) => {
  const minutes = getReadingTime(post);
  const base = light ? 'text-white/80' : 'text-slate-500 dark:text-slate-400';
  return (
    <div className={`flex items-center gap-3 text-xs font-medium ${base}`}>
      <span>{post.date}</span>
      <span aria-hidden="true">•</span>
      <span className="inline-flex items-center gap-1">
        <ClockIcon className="h-3.5 w-3.5" />
        {minutes} min read
      </span>
    </div>
  );
};

/* ------------------------------------------------------------------------- */
/* Cards                                                                      */
/* ------------------------------------------------------------------------- */

const FeaturedHeroCard: React.FC<{ post: BlogPostMeta }> = ({ post }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group relative block overflow-hidden rounded-2xl shadow-xl shadow-slate-300/40 dark:shadow-black/40 h-72 sm:h-96 lg:h-full"
  >
    <BlogImage
      slug={post.slug}
      fallbackUrl={post.image}
      alt={post.imageAlt ?? post.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-400 text-slate-900">
          Featured
        </span>
        <CategoryBadge category={post.category} />
      </div>
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 group-hover:text-amber-200 transition-colors">
        {post.title}
      </h2>
      <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3">
        {post.summary}
      </p>
      <PostMeta post={post} light />
    </div>
  </Link>
);

const SideFeaturedCard: React.FC<{ post: BlogPostMeta }> = ({ post }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group relative block overflow-hidden rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-black/30 h-44 sm:h-56 lg:flex-1 lg:min-h-0"
  >
    <BlogImage
      slug={post.slug}
      fallbackUrl={post.image}
      alt={post.imageAlt ?? post.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
    <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
      <div className="mb-2"><CategoryBadge category={post.category} /></div>
      <h3 className="font-heading text-lg sm:text-xl font-bold leading-snug mb-2 group-hover:text-amber-200 transition-colors line-clamp-2">
        {post.title}
      </h3>
      <PostMeta post={post} light />
    </div>
  </Link>
);

const MediumCard: React.FC<{ post: BlogPostMeta }> = ({ post }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group bg-white rounded-xl shadow-md shadow-slate-200/60 border border-slate-200 overflow-hidden flex flex-col hover:border-blue-300 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-black/30 dark:hover:border-blue-500"
  >
    <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
      <BlogImage
        slug={post.slug}
        fallbackUrl={post.image}
        alt={post.imageAlt ?? post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="mb-3"><CategoryBadge category={post.category} /></div>
      <h3 className="font-heading text-lg font-bold text-slate-800 mb-3 leading-snug group-hover:text-blue-700 transition-colors dark:text-slate-100 dark:group-hover:text-blue-400 line-clamp-2">
        {post.title}
      </h3>
      <p className="font-body text-sm text-slate-600 leading-relaxed mb-5 line-clamp-2 dark:text-slate-400">
        {post.summary}
      </p>
      <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/60">
        <PostMeta post={post} />
      </div>
    </div>
  </Link>
);

const CompactCard: React.FC<{ post: BlogPostMeta }> = ({ post }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
  >
    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900">
      <BlogImage
        slug={post.slug}
        fallbackUrl={post.image}
        alt={post.imageAlt ?? post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="flex-grow min-w-0">
      <div className="mb-1.5"><CategoryBadge category={post.category} /></div>
      <h4 className="font-heading text-sm font-bold text-slate-800 leading-snug mb-1.5 group-hover:text-blue-700 transition-colors dark:text-slate-100 dark:group-hover:text-blue-400 line-clamp-2">
        {post.title}
      </h4>
      <PostMeta post={post} />
    </div>
  </Link>
);

/* ------------------------------------------------------------------------- */
/* Section helpers                                                            */
/* ------------------------------------------------------------------------- */

const SectionHeading: React.FC<{
  eyebrow?: string;
  title: string;
  action?: React.ReactNode;
}> = ({ eyebrow, title, action }) => (
  <div className="flex items-end justify-between mb-6 sm:mb-8 gap-4">
    <div>
      {eyebrow && (
        <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 mb-1.5">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
        {title}
      </h2>
    </div>
    {action}
  </div>
);

/* ------------------------------------------------------------------------- */
/* Desktop sidebar (Browse the Journal)                                       */
/* ------------------------------------------------------------------------- */

const SidebarPopularItem: React.FC<{ post: BlogPostMeta; index: number }> = ({ post, index }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group flex items-start gap-3 py-3 border-b border-slate-200/70 dark:border-slate-700/60 last:border-0"
  >
    <span className="font-heading text-2xl font-extrabold text-slate-300 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 leading-none w-7 flex-shrink-0 transition-colors">
      {String(index + 1).padStart(2, '0')}
    </span>
    <div className="min-w-0">
      <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-slate-100 leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {post.title}
      </h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
        {post.readMinutes} min read · {post.category}
      </p>
    </div>
  </Link>
);

const FREE_TOOLS: { label: string; to: string; icon: string }[] = [
  { label: 'Grammar Checker', to: '/grammar-checker/', icon: '✓' },
  { label: 'Commonly Confused Words', to: '/commonly-confused-words/', icon: '⇄' },
  { label: 'Idioms & Expressions', to: '/idioms/', icon: '✦' },
  { label: 'TypoGrammar Write', to: '/typogrammar-write/', icon: '✎' },
];

interface BlogSidebarProps {
  popular: BlogPostMeta[];
  categoryCounts: [string, number][];
  activeCategory: string;
  onSelectCategory: (c: string) => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
  popular,
  categoryCounts,
  activeCategory,
  onSelectCategory,
}) => {
  const [email, setEmail] = useState('');
  const newsletterAction = 'https://gmail.us10.list-manage.com/subscribe/post?u=YOUR_U&id=YOUR_ID';

  return (
    <aside className="hidden lg:block">
      <div className="lg:sticky lg:top-24 space-y-6">
        {/* Popular */}
        <div className="bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-5">
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 mb-1">
            In-Depth Reads
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
            Our most comprehensive articles
          </p>
          <div>
            {popular.map((p, i) => (
              <SidebarPopularItem key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="rounded-2xl p-5 bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/20">
          <h3 className="font-heading text-lg font-extrabold leading-tight">
            Weekly grammar tips, straight to your inbox.
          </h3>
          <p className="text-sm text-blue-100 mt-1.5 mb-4">
            Join 5,000+ learners getting one practical lesson every week. No spam.
          </p>
          <form
            action={newsletterAction}
            method="post"
            target="_blank"
            noValidate
            className="space-y-2"
          >
            <input
              type="email"
              name="EMAIL"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2.5 rounded-lg bg-white/15 backdrop-blur placeholder-blue-100/70 text-white text-sm border border-white/20 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <button
              type="submit"
              className="w-full px-3 py-2.5 rounded-lg bg-white text-blue-700 font-semibold text-sm hover:bg-blue-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Categories */}
        <div className="bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-5">
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 mb-3">
            Categories
          </h3>
          <ul className="space-y-1">
            <li>
              <button
                type="button"
                onClick={() => onSelectCategory(ALL_CATEGORY)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === ALL_CATEGORY
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/40'
                }`}
              >
                <span>All articles</span>
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {categoryCounts.reduce((s, [, n]) => s + n, 0)}
                </span>
              </button>
            </li>
            {categoryCounts.map(([cat, count]) => (
              <li key={cat}>
                <button
                  type="button"
                  onClick={() => onSelectCategory(cat)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/40'
                  }`}
                >
                  <span className="truncate text-left">{cat}</span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 ml-2 flex-shrink-0">
                    {count}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Free tools */}
        <div className="bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-5">
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 mb-3">
            Free Tools
          </h3>
          <ul className="space-y-1">
            {FREE_TOOLS.map((tool) => (
              <li key={tool.to}>
                <Link
                  to={tool.to}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-bold text-sm">
                    {tool.icon}
                  </span>
                  <span>{tool.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

/* ------------------------------------------------------------------------- */
/* Page                                                                       */
/* ------------------------------------------------------------------------- */

const ALL_CATEGORY = 'All';

const BlogPage: React.FC = () => {
  usePageMetadata({
    title: 'The TypoGrammar Blog | English Grammar & Writing Tips',
    description:
      'Explore articles on grammar, writing, style, and the wonderful quirks of the English language from the TypoGrammar team.',
  });

  // BLOG_POSTS comes in source order (newest first by editorial convention).
  const posts = BLOG_POSTS;

  const featured = posts[0];
  const sideFeatured = posts.slice(1, 3);
  const trending = posts.slice(3, 7);
  const remainingAfterTrending = posts.slice(7);

  // Category list for filter tabs
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => set.add(p.category));
    return [ALL_CATEGORY, ...Array.from(set).sort()];
  }, [posts]);

  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORY);
  const [visibleCount, setVisibleCount] = useState<number>(9);

  const filtered = useMemo(() => {
    if (activeCategory === ALL_CATEGORY) return remainingAfterTrending;
    return posts.filter((p) => p.category === activeCategory && p.slug !== featured?.slug);
  }, [posts, activeCategory, remainingAfterTrending, featured]);

  // Group posts by category for the "Browse by Category" section
  const grouped = useMemo(() => {
    const map = new Map<string, BlogPostMeta[]>();
    posts.forEach((p) => {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category)!.push(p);
    });
    return Array.from(map.entries())
      .filter(([, list]) => list.length >= 2)
      .sort((a, b) => b[1].length - a[1].length);
  }, [posts]);

  // Category counts for sidebar
  const categoryCounts = useMemo(() => {
    const map = new Map<string, number>();
    posts.forEach((p) => map.set(p.category, (map.get(p.category) || 0) + 1));
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }, [posts]);

  // "Popular" = longest reads (proxy for comprehensive, in-depth posts),
  // excluding the hero+side+trending already featured above.
  const popular = useMemo(() => {
    const featuredSlugs = new Set(
      [featured, ...sideFeatured, ...trending].filter(Boolean).map((p) => p.slug)
    );
    return [...posts]
      .filter((p) => !featuredSlugs.has(p.slug))
      .sort((a, b) => (b.readMinutes ?? 0) - (a.readMinutes ?? 0))
      .slice(0, 5);
  }, [posts, featured, sideFeatured, trending]);

  const scrollToBrowse = () => {
    document.getElementById('browse-articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <header className="text-center mb-10 sm:mb-14">
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">
            The TypoGrammar Journal
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100 leading-tight">
            From Confused to Confident in English
          </h1>
          <p className="font-body text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed dark:text-slate-400">
            Deeply researched guides on grammar, vocabulary, IELTS, TOEFL, and the wonderful quirks of the English language.
          </p>
        </header>

        {/* HERO: Featured + 2 side */}
        {featured && (
          <section className="mb-16 sm:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 lg:h-[560px]">
              <div className="lg:col-span-2 h-full">
                <FeaturedHeroCard post={featured} />
              </div>
              <div className="flex flex-col gap-5 lg:gap-6 h-full">
                {sideFeatured.map((p) => (
                  <SideFeaturedCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TRENDING — 4 medium cards */}
        {trending.length > 0 && (
          <section className="mb-16 sm:mb-20">
            <SectionHeading eyebrow="Editor's Picks" title="Trending This Week" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trending.map((p) => (
                <MediumCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}

        {/* Inline ad */}
        <div className="mb-16 sm:mb-20">
          <GoogleAd adSlot="6406598038" />
        </div>

        {/* BROWSE BY CATEGORY — top 3 per category, horizontal compact cards */}
        {grouped.length > 0 && (
          <section className="mb-16 sm:mb-20">
            <SectionHeading eyebrow="Topics" title="Browse by Category" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {grouped.slice(0, 6).map(([category, list]) => (
                <div
                  key={category}
                  className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-slate-100">
                      {category}
                    </h3>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory(category);
                        setVisibleCount(9);
                        scrollToBrowse();
                      }}
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      View all
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {list.slice(0, 3).map((p) => (
                      <CompactCard key={p.slug} post={p} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BROWSE ARTICLES with filter tabs + sidebar */}
        <section id="browse-articles" className="mb-16 sm:mb-20 scroll-mt-24">
          <SectionHeading eyebrow="All Articles" title="Browse the Journal" />

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-12">
            <div className="min-w-0">
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => {
                  const isActive = cat === activeCategory;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setActiveCategory(cat);
                        setVisibleCount(9);
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-700 dark:bg-slate-800/50 dark:text-slate-300 dark:border-slate-700 dark:hover:border-blue-500 dark:hover:text-blue-400'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {filtered.length === 0 ? (
                <p className="text-center text-slate-500 dark:text-slate-400 py-10">
                  No articles found in this category yet.
                </p>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                    {filtered.slice(0, visibleCount).map((p) => (
                      <MediumCard key={p.slug} post={p} />
                    ))}
                  </div>

                  {visibleCount < filtered.length && (
                    <div className="text-center mt-10">
                      <button
                        type="button"
                        onClick={() => setVisibleCount((c) => c + 9)}
                        className="inline-flex items-center px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 shadow-lg shadow-slate-900/10 transition-all"
                      >
                        Load more articles
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            <BlogSidebar
              popular={popular}
              categoryCounts={categoryCounts}
              activeCategory={activeCategory}
              onSelectCategory={(c) => {
                setActiveCategory(c);
                setVisibleCount(9);
                document.getElementById('browse-articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
