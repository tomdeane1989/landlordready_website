"use client";

import { useState, type FormEvent } from "react";

export function InlineNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // Replace with your actual newsletter API endpoint
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Subscription failed");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="my-8 rounded-xl px-6 py-8"
      style={{ backgroundColor: "var(--color-pale-green)" }}
    >
      <h3
        className="mb-1 text-lg font-semibold"
        style={{
          color: "var(--color-forest-green)",
          fontFamily: "var(--font-display)",
        }}
      >
        Get landlord compliance updates
      </h3>
      <p
        className="mb-4 text-sm"
        style={{
          color: "var(--color-near-black)",
          fontFamily: "var(--font-body)",
        }}
      >
        Stay on top of regulation changes that affect your properties.
      </p>

      {status === "success" ? (
        <p
          className="text-sm font-medium"
          style={{ color: "var(--color-forest-green)" }}
        >
          Thanks for subscribing! Check your inbox to confirm.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-w-0 flex-1 rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2"
            style={{
              borderColor: "var(--color-forest-green)",
              fontFamily: "var(--font-body)",
              // @ts-expect-error CSS custom property in focus ring
              "--tw-ring-color": "var(--color-forest-green)",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="shrink-0 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            style={{
              backgroundColor: "var(--color-forest-green)",
              fontFamily: "var(--font-body)",
            }}
          >
            {status === "loading" ? "Subscribing\u2026" : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p
          className="mt-2 text-sm"
          style={{ color: "var(--color-red)" }}
        >
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
