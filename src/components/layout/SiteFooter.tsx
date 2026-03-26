import Link from "next/link";
import Image from "next/image";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";

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
      { href: "/cookies", label: "Cookies" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer
      className="w-full border-t border-forest-green/20 bg-parchment"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Logo */}
          <div>
            <Link href="/" className="no-underline">
              <Image
                src="/images/logos/logo-full-light.png"
                alt="LandlordReady"
                width={200}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4
                  className="mb-4 text-sm font-semibold uppercase tracking-wide font-body text-forest-green"
                >
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm no-underline transition-opacity hover:opacity-70 font-body text-near-black"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                  {col.title === "Legal" && (
                    <li>
                      <CookieSettingsButton />
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 border-t border-forest-green/15 pt-8"
        >
          <p
            className="text-xs font-mono text-near-black opacity-60 mb-0"
          >
            &copy; {new Date().getFullYear()} LandlordReady. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
