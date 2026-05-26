import type { ReactNode } from "react";

interface PullQuoteProps {
  children: ReactNode;
}

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote
      className="my-8 border-l-4 py-2 pl-6 text-xl italic leading-relaxed border-l-forest-green text-forest-green font-display"
    >
      {children}
    </blockquote>
  );
}
