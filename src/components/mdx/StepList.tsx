import type { ReactNode } from "react";

interface StepListProps {
  children: ReactNode;
}

interface StepProps {
  number: number;
  children: ReactNode;
}

export function StepList({ children }: StepListProps) {
  return (
    <ol className="my-6 flex list-none flex-col gap-6 pl-0">{children}</ol>
  );
}

export function Step({ number, children }: StepProps) {
  return (
    <li className="flex gap-4">
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white bg-forest-green"
        aria-label={`Step ${number}`}
      >
        {number}
      </span>
      <div
        className="min-w-0 pt-0.5 text-sm leading-relaxed [&>p]:m-0 text-near-black"
      >
        {children}
      </div>
    </li>
  );
}
