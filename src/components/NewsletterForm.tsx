"use client";

import { useState, type FormEvent } from "react";

interface NewsletterFormProps {
  source: string;
  heading?: string;
  description?: string;
  compact?: boolean;
}

export function NewsletterForm({
  source,
  heading = "Stay informed",
  description = "Compliance updates in your inbox. No spam.",
  compact = false,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      if (!res.ok) throw new Error("Subscription failed");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className={`font-medium text-forest-green ${compact ? "text-xs" : "text-sm"}`}>
        Thank you! We&apos;ll be in touch shortly.
      </p>
    );
  }

  return (
    <>
      {heading && (
        <h4 className={`font-bold text-forest-green ${compact ? "text-sm mb-2" : "text-lg mb-2"}`}>
          {heading}
        </h4>
      )}
      {description && (
        <p className={`text-near-black ${compact ? "text-xs mb-3" : "text-sm mb-4"}`}>
          {description}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`rounded-md border border-forest-green ${compact ? "px-3 py-2 text-sm" : "px-4 py-2 text-sm"}`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`rounded-md font-semibold bg-forest-green text-parchment disabled:opacity-60 ${compact ? "px-3 py-2 text-sm" : "px-4 py-2 text-sm"}`}
        >
          {status === "loading" ? "Subscribing\u2026" : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </>
  );
}
