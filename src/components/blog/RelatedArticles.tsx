import type { Post } from '@/lib/content';
import { ArticleCard } from './ArticleCard';

interface RelatedArticlesProps {
  posts: Post[];
}

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 border-t pt-12" style={{ borderColor: 'var(--color-pale-green)' }}>
      <h2
        className="mb-8 text-2xl font-bold"
        style={{
          fontFamily: 'var(--font-display)',
          color: 'var(--color-near-black)',
        }}
      >
        Related Articles
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post.frontmatter.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
