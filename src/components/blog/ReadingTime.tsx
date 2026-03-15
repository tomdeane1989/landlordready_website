interface ReadingTimeProps {
  minutes: number;
}

export function ReadingTime({ minutes }: ReadingTimeProps) {
  return (
    <span
      className="inline-flex items-center gap-1 text-sm"
      style={{
        color: 'var(--color-near-black)',
        fontFamily: 'var(--font-body)',
        opacity: 0.6,
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      {minutes} min read
    </span>
  );
}
