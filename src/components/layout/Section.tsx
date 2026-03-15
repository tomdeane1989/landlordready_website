interface SectionProps {
  children: React.ReactNode;
  /** Optional CSS background colour value or CSS variable, e.g. "var(--color-pale-green)" */
  background?: string;
}

export function Section({ children, background }: SectionProps) {
  return (
    <section
      className="py-16 md:py-24"
      style={background ? { backgroundColor: background } : undefined}
    >
      {children}
    </section>
  );
}
