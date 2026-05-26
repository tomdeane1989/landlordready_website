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
        className="mb-4 text-4xl font-bold leading-tight font-display text-near-black md:text-[2.5rem]"
      >
        {frontmatter.title}
      </h1>

      <p
        className="mb-6 text-lg leading-relaxed font-body text-near-black opacity-75"
      >
        {frontmatter.excerpt}
      </p>

      <div
        className="flex flex-wrap items-center gap-4 border-b border-t border-pale-green py-4"
      >
        <div className="flex flex-col font-body">
          <span className="text-sm font-semibold text-near-black">
            {authorName}
          </span>
          <span className="text-xs text-near-black opacity-60">
            {authorRole}
          </span>
        </div>

        <span
          className="hidden h-4 w-px bg-pale-green sm:block"
          aria-hidden="true"
        />

        <time
          dateTime={frontmatter.publishedAt}
          className="text-sm font-body text-near-black opacity-60"
        >
          {formattedDate}
        </time>

        <span
          className="hidden h-4 w-px bg-pale-green sm:block"
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
