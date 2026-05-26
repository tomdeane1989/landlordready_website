import Link from 'next/link';
import { getCategoryName } from '@/lib/categories';

interface CategoryBadgeProps {
  slug: string;
}

export function CategoryBadge({ slug }: CategoryBadgeProps) {
  const name = getCategoryName(slug);

  return (
    <Link
      href={`/blog/category/${slug}`}
      className="inline-block rounded-full bg-forest-green font-body px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
    >
      {name}
    </Link>
  );
}
