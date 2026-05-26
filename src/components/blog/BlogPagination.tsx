import Link from 'next/link';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

function pageHref(basePath: string, page: number): string {
  return page === 1 ? basePath : `${basePath}/page/${page}`;
}

export function BlogPagination({ currentPage, totalPages, basePath }: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | 'ellipsis')[] = [];

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== 'ellipsis') {
      pages.push('ellipsis');
    }
  }

  const linkClass =
    'inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors duration-150';

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-12 flex items-center justify-center gap-2 font-body"
    >
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={pageHref(basePath, currentPage - 1)}
          className="mr-2 inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-forest-green transition-colors duration-150"
          aria-label="Previous page"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Previous
        </Link>
      ) : (
        <span
          className="mr-2 inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-near-black opacity-30"
          aria-disabled="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Previous
        </span>
      )}

      {/* Page numbers */}
      {pages.map((page, index) =>
        page === 'ellipsis' ? (
          <span
            key={`ellipsis-${index}`}
            className="inline-flex h-10 w-10 items-center justify-center text-sm text-near-black opacity-40"
            aria-hidden="true"
          >
            &hellip;
          </span>
        ) : page === currentPage ? (
          <span
            key={page}
            className={`${linkClass} bg-forest-green text-white`}
            aria-current="page"
          >
            {page}
          </span>
        ) : (
          <Link
            key={page}
            href={pageHref(basePath, page)}
            className={`${linkClass} text-near-black hover:bg-pale-green`}
          >
            {page}
          </Link>
        )
      )}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={pageHref(basePath, currentPage + 1)}
          className="ml-2 inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-forest-green transition-colors duration-150"
          aria-label="Next page"
        >
          Next
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      ) : (
        <span
          className="ml-2 inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-near-black opacity-30"
          aria-disabled="true"
        >
          Next
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      )}
    </nav>
  );
}
