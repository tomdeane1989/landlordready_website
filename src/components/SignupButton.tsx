"use client";

import { useState } from "react";
import { SignupModal } from "@/components/SignupModal";

interface SignupButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function SignupButton({ children, className }: SignupButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      <SignupModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
