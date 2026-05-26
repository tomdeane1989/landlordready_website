'use client';

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent('lr:open-cookie-settings'))}
      className="text-sm no-underline transition-opacity hover:opacity-70 font-body text-near-black cursor-pointer bg-transparent border-none p-0"
    >
      Cookie Settings
    </button>
  );
}
