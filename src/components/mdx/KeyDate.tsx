interface KeyDateProps {
  date: string;
}

export function KeyDate({ date }: KeyDateProps) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold leading-5 text-white whitespace-nowrap bg-forest-green font-body"
    >
      {date}
    </span>
  );
}
