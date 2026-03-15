import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs, getRelatedPosts } from '@/lib/content';
import { compileMDXContent } from '@/lib/mdx';
import { extractToc } from '@/lib/toc';
import { ArticleJsonLd } from '@/components/seo/ArticleJsonLd';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import authors from '../../../../content/authors/authors.json';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const { frontmatter } = post;
  return {
    title: frontmatter.seoTitle || frontmatter.title,
    description: frontmatter.seoDescription || frontmatter.excerpt,
    openGraph: {
      title: frontmatter.seoTitle || frontmatter.title,
      description: frontmatter.seoDescription || frontmatter.excerpt,
      type: 'article',
      publishedTime: frontmatter.publishedAt,
      modifiedTime: frontmatter.updatedAt,
      authors: [frontmatter.author],
    },
    alternates: {
      canonical: `/blog/${frontmatter.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, content, readingTime } = post;
  const tocItems = extractToc(content);
  const mdxContent = await compileMDXContent(content);
  const relatedPosts = getRelatedPosts(slug, frontmatter.category, 3);
  const author = authors.find((a) => a.id === frontmatter.author) || authors[0];
  const publishedDate = new Date(frontmatter.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <ArticleJsonLd
        title={frontmatter.title}
        description={frontmatter.excerpt}
        publishedAt={frontmatter.publishedAt}
        updatedAt={frontmatter.updatedAt}
        authorName={author.name}
        url={`https://www.landlordready.co.uk/blog/${frontmatter.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.landlordready.co.uk' },
          { name: 'Blog', url: 'https://www.landlordready.co.uk/blog' },
          { name: frontmatter.title, url: `https://www.landlordready.co.uk/blog/${frontmatter.slug}` },
        ]}
      />

      <main className="py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm" style={{ color: 'var(--color-amber)' }}>
            <Link href="/" className="no-underline hover:underline" style={{ color: 'var(--color-forest-green)' }}>
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="no-underline hover:underline" style={{ color: 'var(--color-forest-green)' }}>
              Blog
            </Link>
            <span className="mx-2">›</span>
            <Link
              href={`/blog/category/${frontmatter.category}`}
              className="no-underline hover:underline"
              style={{ color: 'var(--color-forest-green)' }}
            >
              {frontmatter.category.replace(/-/g, ' ')}
            </Link>
          </nav>

          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Article */}
            <article>
              {/* Header */}
              <header className="mb-12">
                <Link
                  href={`/blog/category/${frontmatter.category}`}
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide no-underline mb-4"
                  style={{
                    backgroundColor: 'var(--color-forest-green)',
                    color: 'var(--color-parchment)',
                  }}
                >
                  {frontmatter.category.replace(/-/g, ' ')}
                </Link>
                <h1
                  className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-4 leading-tight"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-forest-green)',
                  }}
                >
                  {frontmatter.title}
                </h1>
                <p
                  className="text-lg mb-6"
                  style={{ color: 'var(--color-near-black)', opacity: 0.8 }}
                >
                  {frontmatter.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'var(--color-near-black)' }}>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: 'var(--color-forest-green)',
                        color: 'var(--color-parchment)',
                      }}
                    >
                      {author.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <span className="font-medium">{author.name}</span>
                  </div>
                  <span style={{ opacity: 0.5 }}>·</span>
                  <time dateTime={frontmatter.publishedAt}>{publishedDate}</time>
                  <span style={{ opacity: 0.5 }}>·</span>
                  <span>{readingTime}</span>
                </div>
              </header>

              {/* Article body */}
              <div className="prose">{mdxContent}</div>

              {/* Tags */}
              {frontmatter.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--color-pale-green)' }}>
                  <div className="flex flex-wrap gap-2">
                    {frontmatter.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag}`}
                        className="px-3 py-1 rounded-full text-xs no-underline"
                        style={{
                          backgroundColor: 'var(--color-pale-green)',
                          color: 'var(--color-forest-green)',
                        }}
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Author bio */}
              <div
                className="mt-12 p-6 rounded-lg flex gap-4"
                style={{ backgroundColor: 'var(--color-pale-green)' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-lg font-bold"
                  style={{
                    backgroundColor: 'var(--color-forest-green)',
                    color: 'var(--color-parchment)',
                  }}
                >
                  {author.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold mb-0" style={{ color: 'var(--color-forest-green)' }}>
                    {author.name}
                  </p>
                  <p className="text-sm mb-2" style={{ color: 'var(--color-amber)' }}>
                    {author.role}
                  </p>
                  <p className="text-sm mb-0" style={{ color: 'var(--color-near-black)' }}>
                    {author.bio}
                  </p>
                </div>
              </div>

              {/* CTA strip */}
              <div
                className="mt-12 p-8 rounded-lg text-center"
                style={{ backgroundColor: 'var(--color-forest-green)' }}
              >
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-parchment)',
                  }}
                >
                  Stay on top of your obligations
                </h3>
                <p className="mb-6" style={{ color: 'var(--color-pale-green)' }}>
                  LandlordReady tracks deadlines, certificates, and regulatory changes for you.
                </p>
                <Link
                  href="#"
                  className="inline-block px-8 py-3 rounded-lg font-semibold no-underline"
                  style={{
                    backgroundColor: 'var(--color-amber)',
                    color: 'var(--color-near-black)',
                  }}
                >
                  Start your free trial
                </Link>
                <p className="mt-3 text-xs" style={{ color: 'var(--color-pale-green)', opacity: 0.7 }}>
                  No credit card required. Cancel anytime.
                </p>
              </div>

              {/* Related articles */}
              {relatedPosts.length > 0 && (
                <div className="mt-16">
                  <h2
                    className="text-2xl font-bold mb-8"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-forest-green)',
                    }}
                  >
                    Related articles
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {relatedPosts.map((rp) => (
                      <Link
                        key={rp.frontmatter.slug}
                        href={`/blog/${rp.frontmatter.slug}`}
                        className="block rounded-lg p-5 no-underline transition-shadow hover:shadow-md"
                        style={{ backgroundColor: 'white' }}
                      >
                        <p
                          className="text-xs font-semibold uppercase tracking-wide mb-2"
                          style={{ color: 'var(--color-amber)' }}
                        >
                          {rp.frontmatter.category.replace(/-/g, ' ')}
                        </p>
                        <h3
                          className="text-base font-bold mb-1"
                          style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--color-forest-green)',
                          }}
                        >
                          {rp.frontmatter.title}
                        </h3>
                        <p className="text-xs" style={{ color: 'var(--color-amber)' }}>
                          {rp.readingTime}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Share prompt */}
              <div className="mt-12 text-center py-8 border-t" style={{ borderColor: 'var(--color-pale-green)' }}>
                <p className="text-lg font-medium" style={{ color: 'var(--color-forest-green)' }}>
                  Found this useful? Share it with a fellow landlord.
                </p>
              </div>
            </article>

            {/* Sidebar - Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                {tocItems.length > 0 && (
                  <nav className="mb-8">
                    <h4
                      className="text-sm font-bold uppercase tracking-wide mb-4"
                      style={{ color: 'var(--color-forest-green)' }}
                    >
                      In this article
                    </h4>
                    <ul className="space-y-2">
                      {tocItems.map((item) => (
                        <li
                          key={item.id}
                          style={{ paddingLeft: item.level === 3 ? '1rem' : 0 }}
                        >
                          <a
                            href={`#${item.id}`}
                            className="text-sm no-underline hover:underline"
                            style={{ color: 'var(--color-near-black)', opacity: 0.7 }}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}

                {/* Sidebar newsletter */}
                <div
                  className="rounded-lg p-5"
                  style={{ backgroundColor: 'var(--color-pale-green)' }}
                >
                  <h4
                    className="text-sm font-bold mb-2"
                    style={{ color: 'var(--color-forest-green)' }}
                  >
                    Stay informed
                  </h4>
                  <p className="text-xs mb-3" style={{ color: 'var(--color-near-black)' }}>
                    Compliance updates in your inbox. No spam.
                  </p>
                  <form className="flex flex-col gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="px-3 py-2 rounded-md border text-sm"
                      style={{ borderColor: 'var(--color-forest-green)' }}
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 rounded-md text-sm font-semibold"
                      style={{
                        backgroundColor: 'var(--color-forest-green)',
                        color: 'var(--color-parchment)',
                      }}
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
