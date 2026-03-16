import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostsByCategory } from '@/lib/content';
import { categories, getCategoryBySlug } from '@/lib/categories';

export const revalidate = false;

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${cat.name} — Landlord Guides`,
    description: cat.description,
    alternates: {
      canonical: `/blog/category/${category}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const posts = getPostsByCategory(category);

  return (
    <main className="py-12 md:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-forest-green no-underline hover:underline">Home</Link>
          <span className="mx-2 text-amber">›</span>
          <Link href="/blog" className="text-forest-green no-underline hover:underline">Blog</Link>
          <span className="mx-2 text-amber">›</span>
          <span className="text-near-black">{cat.name}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display text-forest-green">
          {cat.name}
        </h1>
        <p className="text-lg mb-12 text-near-black">
          {cat.description}
        </p>

        {posts.length === 0 ? (
          <p className="text-near-black">
            No articles in this category yet. Check back soon.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.frontmatter.slug}
                href={`/blog/${post.frontmatter.slug}`}
                className="block rounded-lg p-6 no-underline transition-shadow hover:shadow-md bg-white"
              >
                <h3 className="text-lg font-bold mb-2 font-display text-forest-green">
                  {post.frontmatter.title}
                </h3>
                <p className="text-sm leading-relaxed mb-3 text-near-black line-clamp-2">
                  {post.frontmatter.excerpt}
                </p>
                <p className="text-xs text-amber">
                  {post.readingTime} · {new Date(post.frontmatter.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
