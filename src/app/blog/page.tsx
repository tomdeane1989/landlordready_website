import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllPosts, getFeaturedPost } from '@/lib/content';
import { categories } from '@/lib/categories';

export const metadata: Metadata = {
  title: 'Blog — Landlord Compliance Guides & News',
  description:
    "Expert guides on the Renters' Rights Act, safety certificates, rent increases, and more. Everything private landlords need to stay compliant.",
};

export default function BlogIndexPage() {
  const allPosts = getAllPosts();
  const featuredPost = getFeaturedPost();
  const regularPosts = allPosts.filter((p) => !p.frontmatter.featured);

  return (
    <main className="py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page header */}
        <div className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest-green)' }}
          >
            Landlord Compliance Blog
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--color-near-black)' }}>
            Expert guides, regulatory updates, and practical advice for private
            landlords navigating the Renters&apos; Rights Act and beyond.
          </p>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          <Link
            href="/blog"
            className="px-4 py-2 rounded-full text-sm font-medium no-underline"
            style={{
              backgroundColor: 'var(--color-forest-green)',
              color: 'var(--color-parchment)',
            }}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog/category/${cat.slug}`}
              className="px-4 py-2 rounded-full text-sm font-medium no-underline transition-colors"
              style={{
                backgroundColor: 'var(--color-pale-green)',
                color: 'var(--color-forest-green)',
              }}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Featured post hero */}
            {featuredPost && (
              <Link
                href={`/blog/${featuredPost.frontmatter.slug}`}
                className="block rounded-lg p-8 mb-12 no-underline transition-shadow hover:shadow-lg"
                style={{ backgroundColor: 'var(--color-pale-green)' }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-3"
                  style={{ color: 'var(--color-amber)' }}
                >
                  Featured · {featuredPost.frontmatter.category.replace(/-/g, ' ')}
                </p>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-forest-green)',
                  }}
                >
                  {featuredPost.frontmatter.title}
                </h2>
                <p className="text-base mb-4" style={{ color: 'var(--color-near-black)' }}>
                  {featuredPost.frontmatter.excerpt}
                </p>
                <p className="text-sm" style={{ color: 'var(--color-forest-green)' }}>
                  {featuredPost.readingTime} · {new Date(featuredPost.frontmatter.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              </Link>
            )}

            {/* Post grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <Link
                  key={post.frontmatter.slug}
                  href={`/blog/${post.frontmatter.slug}`}
                  className="block rounded-lg p-6 no-underline transition-shadow hover:shadow-md"
                  style={{ backgroundColor: 'white' }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: 'var(--color-amber)' }}
                  >
                    {post.frontmatter.category.replace(/-/g, ' ')}
                  </p>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-forest-green)',
                    }}
                  >
                    {post.frontmatter.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{
                      color: 'var(--color-near-black)',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {post.frontmatter.excerpt}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-amber)' }}>
                    {post.readingTime} · {new Date(post.frontmatter.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            {/* Newsletter signup */}
            <div
              className="rounded-lg p-6 mb-8"
              style={{ backgroundColor: 'var(--color-pale-green)' }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: 'var(--color-forest-green)' }}
              >
                Stay informed
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--color-near-black)' }}>
                Get landlord compliance updates straight to your inbox. No spam, just
                the changes that affect you.
              </p>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-md border text-sm"
                  style={{ borderColor: 'var(--color-forest-green)' }}
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md text-sm font-semibold"
                  style={{
                    backgroundColor: 'var(--color-forest-green)',
                    color: 'var(--color-parchment)',
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Categories */}
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: 'white' }}
            >
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: 'var(--color-forest-green)' }}
              >
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/blog/category/${cat.slug}`}
                      className="text-sm no-underline hover:underline"
                      style={{ color: 'var(--color-forest-green)' }}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
