'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getConsent, setConsent, updateGoogleConsent, DEFAULT_CONSENT } from '@/lib/consent';
import type { ConsentState } from '@/lib/consent';

const categories = [
  {
    key: 'essential' as const,
    label: 'Strictly necessary',
    description: 'Required for the website to function. Cannot be disabled.',
    locked: true,
  },
  {
    key: 'analytics' as const,
    label: 'Analytics',
    description: 'Help us understand how visitors use our site via Google Analytics.',
    locked: false,
  },
  {
    key: 'functional' as const,
    label: 'Functional',
    description: 'Remember your preferences such as dismissed banners.',
    locked: false,
  },
  {
    key: 'marketing' as const,
    label: 'Marketing',
    description: 'Used for targeted advertising. We do not currently use marketing cookies.',
    locked: false,
  },
] as const;

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<ConsentState>({ ...DEFAULT_CONSENT });

  useEffect(() => {
    const existing = getConsent();
    if (existing) {
      updateGoogleConsent(existing);
    } else {
      setVisible(true);
    }

    function handleOpen() {
      const current = getConsent();
      if (current) setPreferences(current);
      setShowPreferences(true);
      setVisible(true);
    }

    window.addEventListener('lr:open-cookie-settings', handleOpen);
    return () => window.removeEventListener('lr:open-cookie-settings', handleOpen);
  }, []);

  function acceptAll() {
    const all: ConsentState = { analytics: true, functional: true, marketing: true };
    setConsent(all);
    setVisible(false);
    setShowPreferences(false);
  }

  function rejectAll() {
    setConsent({ ...DEFAULT_CONSENT });
    setVisible(false);
    setShowPreferences(false);
  }

  function savePreferences() {
    setConsent(preferences);
    setVisible(false);
    setShowPreferences(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[90] border-t border-forest-green/20 bg-parchment shadow-lg"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-6">
        {!showPreferences ? (
          /* Default banner */
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-body text-near-black mb-0 md:max-w-[60%]">
              We use cookies to analyse site traffic and improve your experience.
              You can customise your preferences or accept all cookies.{' '}
              <Link href="/cookies" className="underline text-forest-green">
                Cookie Policy
              </Link>
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 shrink-0">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-md border border-forest-green px-4 py-2 text-sm font-semibold font-body text-forest-green bg-transparent cursor-pointer transition-opacity hover:opacity-80"
              >
                Reject all
              </button>
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="rounded-md border border-forest-green px-4 py-2 text-sm font-semibold font-body text-forest-green bg-transparent cursor-pointer transition-opacity hover:opacity-80"
              >
                Manage preferences
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-md bg-forest-green px-4 py-2 text-sm font-semibold font-body text-parchment border-none cursor-pointer transition-opacity hover:opacity-90"
              >
                Accept all
              </button>
            </div>
          </div>
        ) : (
          /* Preferences panel */
          <div>
            <h3 className="text-lg font-semibold font-heading text-near-black mb-4">
              Cookie Preferences
            </h3>
            <div className="flex flex-col gap-4 mb-6">
              {categories.map((cat) => {
                const isToggleable = !cat.locked;
                const checked = cat.locked || (isToggleable && preferences[cat.key as keyof ConsentState]);

                return (
                  <label
                    key={cat.key}
                    className="flex items-start gap-4 cursor-pointer"
                  >
                    <span className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        checked={checked}
                        disabled={cat.locked}
                        onChange={(e) => {
                          if (!isToggleable) return;
                          setPreferences((prev) => ({
                            ...prev,
                            [cat.key]: e.target.checked,
                          }));
                        }}
                        className="peer sr-only"
                      />
                      <span
                        className={`block h-6 w-10 rounded-full transition-colors ${
                          checked ? 'bg-forest-green' : 'bg-near-black/20'
                        } ${cat.locked ? 'opacity-60' : ''}`}
                      />
                      <span
                        className={`absolute left-0.5 top-0.5 block h-5 w-5 rounded-full bg-white transition-transform ${
                          checked ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold font-body text-near-black">
                        {cat.label}
                      </span>
                      <span className="block text-xs font-body text-near-black/70">
                        {cat.description}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <button
                type="button"
                onClick={savePreferences}
                className="rounded-md border border-forest-green px-4 py-2 text-sm font-semibold font-body text-forest-green bg-transparent cursor-pointer transition-opacity hover:opacity-80"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-md bg-forest-green px-4 py-2 text-sm font-semibold font-body text-parchment border-none cursor-pointer transition-opacity hover:opacity-90"
              >
                Accept all
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
