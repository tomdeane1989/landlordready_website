'use client';

import { useEffect, useState } from 'react';
import type { TocItem } from '@/lib/toc';

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    const headingElements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  const tocList = (
    <nav aria-label="Table of contents">
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: item.level === 3 ? '1rem' : '0' }}>
            <a
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className="block rounded px-2 py-1 text-sm leading-snug transition-colors duration-150"
              style={{
                fontFamily: 'var(--font-body)',
                color:
                  activeId === item.id
                    ? 'var(--color-forest-green)'
                    : 'var(--color-near-black)',
                fontWeight: activeId === item.id ? 600 : 400,
                opacity: activeId === item.id ? 1 : 0.65,
                backgroundColor:
                  activeId === item.id ? 'var(--color-pale-green)' : 'transparent',
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <aside className="sticky top-24 hidden lg:block">
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-wider"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--color-near-black)',
            opacity: 0.5,
          }}
        >
          On this page
        </p>
        {tocList}
      </aside>

      {/* Mobile: collapsible */}
      <div
        className="mb-6 rounded-lg border lg:hidden"
        style={{ borderColor: 'var(--color-pale-green)' }}
      >
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--color-near-black)',
          }}
          aria-expanded={isOpen}
        >
          <span>On this page</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {isOpen && <div className="px-4 pb-4">{tocList}</div>}
      </div>
    </>
  );
}
