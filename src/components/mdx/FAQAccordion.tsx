"use client";

import { useState, type ReactNode } from "react";

interface FAQAccordionProps {
  children: ReactNode;
}

interface FAQItemProps {
  question: string;
  children: ReactNode;
}

export function FAQAccordion({ children }: FAQAccordionProps) {
  return (
    <div
      className="my-6 divide-y rounded-lg border"
      style={{
        borderColor: "var(--color-pale-green)",
        // @ts-expect-error CSS custom property for Tailwind divide color
        "--tw-divide-color": "var(--color-pale-green)",
      }}
    >
      {children}
    </div>
  );
}

export function FAQItem({ question, children }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-colors hover:opacity-80"
        style={{
          color: "var(--color-forest-green)",
          fontFamily: "var(--font-body)",
        }}
        aria-expanded={open}
      >
        <span>{question}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          className="px-5 pb-4 text-sm leading-relaxed [&>p]:m-0"
          style={{
            color: "var(--color-near-black)",
            fontFamily: "var(--font-body)",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
