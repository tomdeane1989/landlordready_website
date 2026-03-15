import type { Metadata } from 'next';
import Link from 'next/link';
import { getPostsByTag, getAllTags } from '@/lib/content';

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `#${tag} — Landlord Compliance Articles`,
    description: `Articles tagged with "${tag}" — expert guides for private landlords.`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);

  return (
    <main className="py-12 md:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8 text-sm">
          <Link href="/" className="no-underline hover:underline" style={{ color: 'var(--color-forest-green)' }}>Home</Link>
          <span className="mx-2" style={{ color: 'var(--color-amber)' }}>›</span>
          <Link href="/blog" className="no-underline hover:underline" style={{ color: 'var(--color-forest-green)' }}>Blog</Link>
          <span className="mx-2" style={{ color: 'var(--color-amber)' }}>›</span>
          <span style={{ color: 'var(--color-near-black)' }}>#{tag}</span>
        </nav>

        <h1
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest-green)' }}
        >
          Articles tagged &ldquo;{tag}&rdquo;
        </h1>

        {posts.length === 0 ? (
          <p style={{ color: 'var(--color-near-black)' }}>
            No articles with this tag yet. Check back soon.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-8">
            {posts.map((post) => (
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
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest-green)' }}
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
                  {post.readingTime}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
