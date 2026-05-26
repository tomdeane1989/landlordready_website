"use client";

import { useState } from "react";
import { SignupModal } from "@/components/SignupModal";

export function InlineCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="my-8 rounded-xl px-6 py-8 text-center bg-pale-green"
      >
        <p
          className="mb-4 text-lg font-medium leading-snug text-near-black font-body"
        >
          LandlordReady tracks this for you automatically.
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-block rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 bg-forest-green font-body"
        >
          Try it free
        </button>
      </div>
      <SignupModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
