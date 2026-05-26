import Link from 'next/link';
import type { Post } from '@/lib/content';
import { CategoryBadge } from './CategoryBadge';
import { ReadingTime } from './ReadingTime';

interface ArticleCardProps {
  post: Post;
}

export function ArticleCard({ post }: ArticleCardProps) {
  const { frontmatter, readingTimeMinutes } = post;

  const formattedDate = new Date(frontmatter.publishedAt).toLocaleDateString(
    'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  return (
    <Link
      href={`/blog/${frontmatter.slug}`}
      className="group block rounded-lg border border-pale-green bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="mb-3">
        <CategoryBadge slug={frontmatter.category} />
      </div>

      <h3
        className="mb-2 text-xl font-bold leading-snug font-display text-near-black transition-colors duration-200"
      >
        <span className="group-hover:underline">{frontmatter.title}</span>
      </h3>

      <p
        className="mb-4 line-clamp-2 text-sm leading-relaxed font-body text-near-black opacity-70"
      >
        {frontmatter.excerpt}
      </p>

      <div className="flex items-center gap-3 text-sm text-near-black opacity-50">
        <time dateTime={frontmatter.publishedAt} className="font-body">
          {formattedDate}
        </time>
        <span aria-hidden="true">&middot;</span>
        <ReadingTime minutes={readingTimeMinutes} />
      </div>
    </Link>
  );
}
