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
          <Link href="/" className="text-forest-green no-underline hover:underline">Home</Link>
          <span className="mx-2 text-amber">›</span>
          <Link href="/blog" className="text-forest-green no-underline hover:underline">Blog</Link>
          <span className="mx-2 text-amber">›</span>
          <span className="text-near-black">#{tag}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-12 font-display text-forest-green">
          Articles tagged &ldquo;{tag}&rdquo;
        </h1>

        {posts.length === 0 ? (
          <p className="text-near-black">
            No articles with this tag yet. Check back soon.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.frontmatter.slug}
                href={`/blog/${post.frontmatter.slug}`}
                className="block rounded-lg p-6 no-underline transition-shadow hover:shadow-md bg-white"
              >
                <p className="text-xs font-semibold uppercase tracking-wide mb-2 text-amber">
                  {post.frontmatter.category.replace(/-/g, ' ')}
                </p>
                <h3 className="text-lg font-bold mb-2 font-display text-forest-green">
                  {post.frontmatter.title}
                </h3>
                <p className="text-sm leading-relaxed mb-3 text-near-black line-clamp-2">
                  {post.frontmatter.excerpt}
                </p>
                <p className="text-xs text-amber">
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
