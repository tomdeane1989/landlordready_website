import type { ReactNode } from "react";

interface LegalBlockProps {
  citation?: string;
  children: ReactNode;
}

export function LegalBlock({ citation, children }: LegalBlockProps) {
  return (
    <div
      className="my-6 rounded-lg border-l-4 py-4 pl-5 pr-4"
      style={{
        borderLeftColor: "var(--color-amber)",
        backgroundColor: "var(--color-pale-amber)",
        fontFamily: "var(--font-mono)",
      }}
    >
      <div
        className="text-sm leading-relaxed [&>p]:m-0"
        style={{ color: "var(--color-near-black)" }}
      >
        {children}
      </div>
      {citation && (
        <footer
          className="mt-3 border-t pt-3 text-xs opacity-70"
          style={{
            borderColor: "var(--color-amber)",
            color: "var(--color-near-black)",
          }}
        >
          {citation}
        </footer>
      )}
    </div>
  );
}
