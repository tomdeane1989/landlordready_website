import type { ReactNode } from "react";

type CalloutVariant = "tip" | "warning";

interface CalloutProps {
  variant?: CalloutVariant;
  children: ReactNode;
}

const icons: Record<CalloutVariant, ReactNode> = {
  tip: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
      <path
        d="M6 10.5L8.5 13L14 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  warning: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M10 2L19 18H1L10 2Z"
        fill="currentColor"
        opacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 8V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="10" cy="15" r="1" fill="currentColor" />
    </svg>
  ),
};

export function Callout({ variant = "tip", children }: CalloutProps) {
  const isTip = variant === "tip";

  return (
    <aside
      className="my-6 flex gap-3 rounded-lg border-l-4 px-5 py-4"
      style={{
        backgroundColor: isTip
          ? "var(--color-pale-green)"
          : "var(--color-pale-amber)",
        borderLeftColor: isTip
          ? "var(--color-forest-green)"
          : "var(--color-amber)",
        color: "var(--color-near-black)",
      }}
      role="note"
    >
      <span
        className="mt-0.5"
        style={{
          color: isTip ? "var(--color-forest-green)" : "var(--color-amber)",
        }}
      >
        {icons[variant]}
      </span>
      <div className="min-w-0 text-sm leading-relaxed [&>p]:m-0">
        {children}
      </div>
    </aside>
  );
}
