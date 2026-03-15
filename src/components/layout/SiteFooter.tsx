import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/newsletter", label: "Newsletter" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer
      className="w-full border-t"
      style={{
        backgroundColor: "var(--color-parchment)",
        borderColor: "rgba(26, 61, 43, 0.2)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Wordmark */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold no-underline"
              style={{
                fontFamily: "var(--font-display), serif",
                color: "var(--color-forest-green)",
              }}
            >
              LandlordReady
            </Link>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4
                  className="mb-4 text-sm font-semibold uppercase tracking-wide"
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    color: "var(--color-forest-green)",
                  }}
                >
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm no-underline transition-opacity hover:opacity-70"
                        style={{
                          fontFamily: "var(--font-body), sans-serif",
                          color: "var(--color-near-black)",
                        }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 border-t pt-8"
          style={{ borderColor: "rgba(26, 61, 43, 0.15)" }}
        >
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-mono), monospace",
              color: "var(--color-near-black)",
              opacity: 0.6,
              marginBottom: 0,
            }}
          >
            &copy; {new Date().getFullYear()} LandlordReady. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
