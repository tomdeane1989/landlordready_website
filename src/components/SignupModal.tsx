"use client";

import { useState, useEffect, type FormEvent } from "react";

interface SignupModalProps {
  open: boolean;
  onClose: () => void;
}

export function SignupModal({ open, onClose }: SignupModalProps) {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    companyName: "",
    marketingConsent: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.email || !form.marketingConsent) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          phone: form.phone,
          companyName: form.companyName,
          source: "signup-modal",
        }),
      });

      if (!res.ok) throw new Error("Signup failed");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    onClose();
    // Reset after animation
    setTimeout(() => {
      setStatus("idle");
      setForm({ email: "", phone: "", companyName: "", marketingConsent: false });
    }, 200);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-md rounded-xl bg-parchment p-8 shadow-xl">
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 text-2xl leading-none text-near-black/60 hover:text-near-black"
          aria-label="Close"
        >
          &times;
        </button>

        {status === "success" ? (
          <div className="text-center py-6">
            <h2 className="text-2xl font-bold text-forest-green font-display mb-3">
              You&apos;re on the list!
            </h2>
            <p className="text-sm text-near-black font-body mb-6">
              We&apos;ll be in touch when early access is ready.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="rounded-md px-6 py-2.5 text-sm font-semibold text-white bg-forest-green hover:opacity-90"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-forest-green font-display mb-1">
              Get compliant
            </h2>
            <p className="text-sm text-near-black font-body mb-6">
              Sign up for early access &mdash; free for 30 days.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-near-black mb-1 font-body">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-forest-green px-4 py-2.5 text-sm outline-none focus:ring-2 ring-forest-green"
                />
              </div>

              <div>
                <label htmlFor="signup-phone" className="block text-sm font-medium text-near-black mb-1 font-body">
                  Phone
                </label>
                <input
                  id="signup-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-forest-green px-4 py-2.5 text-sm outline-none focus:ring-2 ring-forest-green"
                />
              </div>

              <div>
                <label htmlFor="signup-company" className="block text-sm font-medium text-near-black mb-1 font-body">
                  Company name
                </label>
                <input
                  id="signup-company"
                  name="companyName"
                  type="text"
                  value={form.companyName}
                  onChange={handleChange}
                  className="w-full rounded-md border border-forest-green px-4 py-2.5 text-sm outline-none focus:ring-2 ring-forest-green"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  name="marketingConsent"
                  type="checkbox"
                  required
                  checked={form.marketingConsent}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 rounded border-forest-green accent-forest-green"
                />
                <span className="text-xs text-near-black font-body">
                  I agree to receive marketing communications from LandlordReady. You can unsubscribe at any time. <span className="text-red-600">*</span>
                </span>
              </label>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-md px-5 py-3 text-sm font-semibold text-white bg-forest-green hover:opacity-90 disabled:opacity-60 font-body"
              >
                {status === "loading" ? "Submitting\u2026" : "Get early access"}
              </button>

              {status === "error" && (
                <p className="text-sm text-red-600 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
