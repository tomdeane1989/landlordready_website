export type ConsentCategory = 'analytics' | 'functional' | 'marketing';
export type ConsentState = Record<ConsentCategory, boolean>;

const CONSENT_COOKIE_NAME = 'lr_cookie_consent';
const CONSENT_COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

const DEFAULT_CONSENT: ConsentState = {
  analytics: false,
  functional: false,
  marketing: false,
};

interface StoredConsent {
  v: number;
  a: number;
  f: number;
  m: number;
}

export function getConsent(): ConsentState | null {
  if (typeof document === 'undefined') return null;

  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${CONSENT_COOKIE_NAME}=`));

  if (!match) return null;

  try {
    const stored: StoredConsent = JSON.parse(decodeURIComponent(match.split('=')[1]));
    return {
      analytics: stored.a === 1,
      functional: stored.f === 1,
      marketing: stored.m === 1,
    };
  } catch {
    return null;
  }
}

export function setConsent(state: ConsentState): void {
  if (typeof document === 'undefined') return;

  const stored: StoredConsent = {
    v: 1,
    a: state.analytics ? 1 : 0,
    f: state.functional ? 1 : 0,
    m: state.marketing ? 1 : 0,
  };

  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(stored))}; path=/; max-age=${CONSENT_COOKIE_MAX_AGE}; SameSite=Lax; Secure`;

  window.dispatchEvent(
    new CustomEvent('lr:consent-change', { detail: state })
  );

  updateGoogleConsent(state);
}

export function updateGoogleConsent(state: ConsentState): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('consent', 'update', {
    analytics_storage: state.analytics ? 'granted' : 'denied',
    functionality_storage: state.functional ? 'granted' : 'denied',
    ad_storage: state.marketing ? 'granted' : 'denied',
    ad_user_data: state.marketing ? 'granted' : 'denied',
    ad_personalization: state.marketing ? 'granted' : 'denied',
  });
}

export { DEFAULT_CONSENT };
