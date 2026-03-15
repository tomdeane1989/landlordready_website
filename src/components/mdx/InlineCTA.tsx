export function InlineCTA() {
  return (
    <div
      className="my-8 rounded-xl px-6 py-8 text-center"
      style={{ backgroundColor: "var(--color-pale-green)" }}
    >
      <p
        className="mb-4 text-lg font-medium leading-snug"
        style={{
          color: "var(--color-near-black)",
          fontFamily: "var(--font-body)",
        }}
      >
        LandlordReady tracks this for you automatically.
      </p>
      <a
        href="/signup"
        className="inline-block rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        style={{
          backgroundColor: "var(--color-forest-green)",
          fontFamily: "var(--font-body)",
        }}
      >
        Try it free
      </a>
    </div>
  );
}
