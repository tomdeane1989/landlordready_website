import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How LandlordReady collects, uses, and protects your personal data. Read our full privacy policy for landlords using our compliance tracking service.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="bg-parchment py-12 md:py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display text-forest-green">
          Privacy Policy
        </h1>
        <p className="text-sm mb-12 text-near-black/60">
          Last updated: 16 March 2026
        </p>

        <div className="space-y-8 text-near-black leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              1. Who we are
            </h2>
            <p>
              LandlordReady (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website{' '}
              <Link href="/" className="text-forest-green underline">
                www.landlord-ready.com
              </Link>
              . We are committed to protecting your personal data and complying with the
              UK General Data Protection Regulation (UK GDPR) and the Data Protection
              Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              2. What data we collect
            </h2>
            <p className="mb-4">We may collect the following personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account information:</strong> name, email address, and password
                when you create an account.
              </li>
              <li>
                <strong>Property information:</strong> property addresses and certificate
                details you enter into your compliance dashboard.
              </li>
              <li>
                <strong>Payment information:</strong> billing details processed securely
                by our payment provider. We do not store your full card details.
              </li>
              <li>
                <strong>Usage data:</strong> pages visited, features used, and device
                information collected via cookies and analytics.
              </li>
              <li>
                <strong>Communications:</strong> any messages you send us via email or
                contact forms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              3. How we use your data
            </h2>
            <p className="mb-4">We use your personal data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain the LandlordReady service.</li>
              <li>Send compliance alerts, deadline reminders, and regulation updates.</li>
              <li>Process payments and manage your subscription.</li>
              <li>Improve our service through anonymised usage analytics.</li>
              <li>Respond to your enquiries and provide customer support.</li>
              <li>
                Send our newsletter, where you have opted in. You can unsubscribe at any
                time.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              4. Legal basis for processing
            </h2>
            <p className="mb-4">We process your data on the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contract:</strong> processing necessary to provide the service
                you have signed up for.
              </li>
              <li>
                <strong>Consent:</strong> where you have opted in to analytics cookies
                via our cookie consent banner, or to our newsletter or marketing
                communications.
              </li>
              <li>
                <strong>Legitimate interest:</strong> to improve our service and detect
                fraud, where this does not override your rights.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              5. Data sharing
            </h2>
            <p>
              We do not sell your personal data. We may share data with trusted
              third-party service providers who help us operate our service (e.g.
              payment processors, email delivery, hosting providers). All third parties
              are contractually required to protect your data and process it only on our
              instructions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              6. Data retention
            </h2>
            <p>
              We retain your personal data for as long as your account is active or as
              needed to provide the service. If you close your account, we will delete
              your data within 90 days, unless we are required by law to retain it for
              longer (e.g. financial records for HMRC).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              7. Cookies
            </h2>
            <p>
              We use essential cookies to keep the site functioning and analytics
              cookies (Google Analytics) to understand how visitors use our site.
              Analytics data is anonymised. You can manage your cookie preferences
              at any time using our cookie consent banner or the &quot;Cookie
              Settings&quot; link in the footer. For full details of the cookies
              we use, please see our{' '}
              <Link href="/cookies" className="text-forest-green underline">
                Cookie Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              8. Your rights
            </h2>
            <p className="mb-4">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data.</li>
              <li>Object to or restrict processing of your data.</li>
              <li>Request data portability.</li>
              <li>Withdraw consent at any time (where processing is based on consent).</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at{' '}
              <a
                href="mailto:privacy@landlord-ready.com"
                className="text-forest-green underline"
              >
                privacy@landlord-ready.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              9. Data security
            </h2>
            <p>
              We use industry-standard security measures including AES-256 encryption
              for data at rest and TLS 1.3 for data in transit. Our infrastructure is
              hosted in UK data centres. Despite our best efforts, no method of
              transmission over the internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              10. Changes to this policy
            </h2>
            <p>
              We may update this privacy policy from time to time. We will notify you
              of any significant changes by email or through a notice on our website.
              Your continued use of the service after changes are posted constitutes
              your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              11. Contact us
            </h2>
            <p>
              If you have any questions about this privacy policy or how we handle your
              data, please contact us at{' '}
              <a
                href="mailto:privacy@landlord-ready.com"
                className="text-forest-green underline"
              >
                privacy@landlord-ready.com
              </a>
              .
            </p>
            <p className="mt-4">
              You also have the right to lodge a complaint with the Information
              Commissioner&apos;s Office (ICO) at{' '}
              <a
                href="https://ico.org.uk"
                className="text-forest-green underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
