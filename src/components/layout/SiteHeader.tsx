"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: "var(--color-parchment)" }}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        {/* Wordmark */}
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

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium no-underline transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  color: "var(--color-forest-green)",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/signup"
          className="hidden rounded-md px-5 py-2.5 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-90 md:inline-block"
          style={{
            fontFamily: "var(--font-body), sans-serif",
            backgroundColor: "var(--color-forest-green)",
          }}
        >
          Get compliant &ndash; free for 30 days
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex flex-col justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 transition-transform duration-200 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
            style={{ backgroundColor: "var(--color-forest-green)" }}
          />
          <span
            className={`block h-0.5 w-6 transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
            style={{ backgroundColor: "var(--color-forest-green)" }}
          />
          <span
            className={`block h-0.5 w-6 transition-transform duration-200 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
            style={{ backgroundColor: "var(--color-forest-green)" }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="flex flex-col gap-6 px-6 pb-8 pt-2 md:hidden"
          style={{ backgroundColor: "var(--color-parchment)" }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium no-underline"
              style={{
                fontFamily: "var(--font-body), sans-serif",
                color: "var(--color-forest-green)",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/signup"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-md px-5 py-3 text-center text-sm font-semibold text-white no-underline transition-opacity hover:opacity-90"
            style={{
              fontFamily: "var(--font-body), sans-serif",
              backgroundColor: "var(--color-forest-green)",
            }}
          >
            Get compliant &ndash; free for 30 days
          </Link>
        </div>
      )}
    </header>
  );
}
