import type { Post } from '@/lib/content';
import { CategoryBadge } from './CategoryBadge';
import { ReadingTime } from './ReadingTime';
import { ShareButtons } from './ShareButtons';

interface ArticleHeaderProps {
  post: Post;
  authorName: string;
  authorRole: string;
}

export function ArticleHeader({ post, authorName, authorRole }: ArticleHeaderProps) {
  const { frontmatter, readingTimeMinutes } = post;

  const formattedDate = new Date(frontmatter.publishedAt).toLocaleDateString(
    'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  return (
    <header className="mb-10">
      <div className="mb-4">
        <CategoryBadge slug={frontmatter.category} />
      </div>

      <h1
        className="mb-4 text-4xl font-bold leading-tight md:text-[2.5rem]"
        style={{
          fontFamily: 'var(--font-display)',
          color: 'var(--color-near-black)',
        }}
      >
        {frontmatter.title}
      </h1>

      <p
        className="mb-6 text-lg leading-relaxed"
        style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--color-near-black)',
          opacity: 0.75,
        }}
      >
        {frontmatter.excerpt}
      </p>

      <div
        className="flex flex-wrap items-center gap-4 border-b border-t py-4"
        style={{ borderColor: 'var(--color-pale-green)' }}
      >
        <div className="flex flex-col" style={{ fontFamily: 'var(--font-body)' }}>
          <span className="text-sm font-semibold" style={{ color: 'var(--color-near-black)' }}>
            {authorName}
          </span>
          <span className="text-xs" style={{ color: 'var(--color-near-black)', opacity: 0.6 }}>
            {authorRole}
          </span>
        </div>

        <span
          className="hidden h-4 w-px sm:block"
          style={{ backgroundColor: 'var(--color-pale-green)' }}
          aria-hidden="true"
        />

        <time
          dateTime={frontmatter.publishedAt}
          className="text-sm"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-near-black)', opacity: 0.6 }}
        >
          {formattedDate}
        </time>

        <span
          className="hidden h-4 w-px sm:block"
          style={{ backgroundColor: 'var(--color-pale-green)' }}
          aria-hidden="true"
        />

        <ReadingTime minutes={readingTimeMinutes} />

        <div className="ml-auto">
          <ShareButtons url={`/blog/${frontmatter.slug}`} title={frontmatter.title} />
        </div>
      </div>
    </header>
  );
}
