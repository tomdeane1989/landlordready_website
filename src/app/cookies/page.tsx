import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Learn how LandlordReady uses cookies, what data they collect, and how to manage your cookie preferences.',
  alternates: {
    canonical: '/cookies',
  },
};

const tableHead = 'px-4 py-2 text-left text-sm font-semibold font-body text-forest-green bg-forest-green/5';
const tableCell = 'px-4 py-2 text-sm font-body text-near-black border-t border-forest-green/10';

export default function CookiePolicyPage() {
  return (
    <main className="bg-parchment py-12 md:py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display text-forest-green">
          Cookie Policy
        </h1>
        <p className="text-sm mb-12 text-near-black/60">
          Last updated: 26 March 2026
        </p>

        <div className="space-y-8 text-near-black leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              1. What are cookies
            </h2>
            <p>
              Cookies are small text files that are stored on your device when you visit
              a website. They are widely used to make websites work more efficiently and
              to provide information to the website owners. We use cookies in accordance
              with the UK General Data Protection Regulation (UK GDPR) and the Privacy
              and Electronic Communications Regulations (PECR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              2. How we use cookies
            </h2>
            <p>
              We use cookies to understand how visitors interact with our website, to
              remember your preferences, and to improve your experience. We categorise
              our cookies into four groups: strictly necessary, analytics, functional,
              and marketing. You can manage your preferences at any time using our
              cookie consent banner or the &quot;Cookie Settings&quot; link in the
              footer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              3. Strictly necessary cookies
            </h2>
            <p className="mb-4">
              These cookies are essential for the website to function and cannot be
              disabled. They do not store any personally identifiable information.
            </p>
            <div className="overflow-x-auto rounded-md border border-forest-green/15">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className={tableHead}>Cookie</th>
                    <th className={tableHead}>Purpose</th>
                    <th className={tableHead}>Duration</th>
                    <th className={tableHead}>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tableCell}><code className="text-xs">lr_cookie_consent</code></td>
                    <td className={tableCell}>Stores your cookie consent preferences</td>
                    <td className={tableCell}>1 year</td>
                    <td className={tableCell}>First-party</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              4. Analytics cookies
            </h2>
            <p className="mb-4">
              These cookies help us understand how visitors use our website by
              collecting anonymous usage data. They are only set if you consent to
              analytics cookies. We use Google Analytics 4, which anonymises your IP
              address.
            </p>
            <div className="overflow-x-auto rounded-md border border-forest-green/15">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className={tableHead}>Cookie</th>
                    <th className={tableHead}>Purpose</th>
                    <th className={tableHead}>Duration</th>
                    <th className={tableHead}>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tableCell}><code className="text-xs">_ga</code></td>
                    <td className={tableCell}>Distinguishes unique visitors</td>
                    <td className={tableCell}>2 years</td>
                    <td className={tableCell}>Third-party (Google)</td>
                  </tr>
                  <tr>
                    <td className={tableCell}><code className="text-xs">_ga_&lt;ID&gt;</code></td>
                    <td className={tableCell}>Maintains session state</td>
                    <td className={tableCell}>2 years</td>
                    <td className={tableCell}>Third-party (Google)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              5. Functional cookies
            </h2>
            <p className="mb-4">
              These cookies remember choices you make to provide a more personalised
              experience. They are only set if you consent to functional cookies.
            </p>
            <div className="overflow-x-auto rounded-md border border-forest-green/15">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className={tableHead}>Cookie</th>
                    <th className={tableHead}>Purpose</th>
                    <th className={tableHead}>Duration</th>
                    <th className={tableHead}>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tableCell}><code className="text-xs">lr_modal_dismissed</code></td>
                    <td className={tableCell}>Remembers if you dismissed the sign-up prompt</td>
                    <td className={tableCell}>30 days</td>
                    <td className={tableCell}>First-party</td>
                  </tr>
                  <tr>
                    <td className={tableCell}><code className="text-xs">lr_newsletter_submitted</code></td>
                    <td className={tableCell}>Remembers if you already signed up for the newsletter</td>
                    <td className={tableCell}>30 days</td>
                    <td className={tableCell}>First-party</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              6. Marketing cookies
            </h2>
            <p>
              We do not currently use marketing cookies. If this changes in the future,
              we will update this policy and request your consent before setting any
              marketing cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              7. How to manage cookies
            </h2>
            <p className="mb-4">You can manage your cookie preferences in several ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cookie consent banner:</strong> when you first visit our site,
                you can accept all, reject all, or customise which categories of
                cookies you allow.
              </li>
              <li>
                <strong>Cookie Settings:</strong> click the &quot;Cookie Settings&quot;
                link in the footer at any time to change your preferences.
              </li>
              <li>
                <strong>Browser settings:</strong> most browsers allow you to block or
                delete cookies through their settings. Note that blocking all cookies
                may affect your experience on some websites.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              8. Changes to this policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be
              posted on this page with an updated revision date. We encourage you to
              review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-display text-forest-green">
              9. Contact us
            </h2>
            <p>
              If you have any questions about our use of cookies, please contact us at{' '}
              <a
                href="mailto:privacy@landlord-ready.com"
                className="text-forest-green underline"
              >
                privacy@landlord-ready.com
              </a>
              . You can also read our full{' '}
              <Link href="/privacy" className="text-forest-green underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
