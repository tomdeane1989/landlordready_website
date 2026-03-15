import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Features — Compliance Tracking Made Simple',
  description:
    'Discover how LandlordReady helps landlords in England stay compliant with the Renters\' Rights Act. Compliance dashboard, deadline alerts, regulation updates, document storage, and portfolio management — all in one place.',
};

const features = [
  {
    slug: 'compliance-dashboard',
    label: 'Compliance Dashboard',
    headline: 'See every obligation at a glance',
    paragraphs: [
      'Your personalised compliance dashboard shows every legal obligation for your properties in one place. Gas safety, electrical certificates, EPC ratings, deposit protection, licensing — all tracked with clear status indicators.',
      'No more cross-referencing spreadsheets or digging through emails to find out what\u2019s due. LandlordReady pulls everything together so you can see what\u2019s compliant, what\u2019s due soon, and what needs attention right now.',
      'Built specifically for the Renters\u2019 Rights Act era, the dashboard adapts as new requirements come into force — so you always know where you stand.',
    ],
    bullets: [
      'Traffic-light status for every compliance requirement',
      'At-a-glance overview across all your properties',
      'Tracks gas safety, EICRs, EPCs, deposit protection, and licensing',
      'Automatically flags overdue or expiring items',
    ],
  },
  {
    slug: 'deadline-alerts',
    label: 'Deadline Alerts',
    headline: 'Never miss a renewal deadline again',
    paragraphs: [
      'Certificate renewals, safety inspections, and licence expiry dates can easily slip through the cracks — especially when you\u2019re managing compliance alongside a full-time job. One missed deadline can mean a hefty fine.',
      'LandlordReady sends you email and dashboard alerts 90, 60, and 30 days before anything expires. You choose how and when you\u2019re reminded, so you\u2019re always ahead of the deadline rather than scrambling after it.',
    ],
    bullets: [
      'Automatic alerts at 90, 60, and 30 days before expiry',
      'Email and in-dashboard notifications',
      'Customisable reminder schedule per certificate type',
      'Weekly compliance summary email',
    ],
  },
  {
    slug: 'regulation-updates',
    label: 'Regulation Updates',
    headline: 'Stay ahead of changing legislation',
    paragraphs: [
      'The Renters\u2019 Rights Act is being implemented in phases, Awaab\u2019s Law is extending to the private sector, and safety regulations are tightening. Keeping up with every change is a job in itself.',
      'When the law changes, your dashboard updates automatically. We monitor legislation, government guidance, and regulatory announcements — then translate changes into clear, actionable tasks for your specific properties. No legalese, no guesswork.',
    ],
    bullets: [
      'Automatic updates when legislation affecting your properties changes',
      'Plain-English explanations of new requirements',
      'Actionable tasks added to your dashboard automatically',
      'Covers the Renters\u2019 Rights Act, Awaab\u2019s Law, and safety regulations',
    ],
  },
  {
    slug: 'document-storage',
    label: 'Document Storage',
    headline: 'All your documents, one secure place',
    paragraphs: [
      'When a tenant asks for a copy of the gas safety certificate or your local authority wants to see your EICR, you need to find it fast. Rummaging through filing cabinets and email attachments wastes time and causes stress.',
      'Upload and store all your property compliance documents in one secure place. Gas safety certificates, EICRs, EPC reports, tenancy agreements, deposit protection certificates — everything organised by property and easily accessible when you need it.',
    ],
    bullets: [
      'Secure cloud storage for all compliance documents',
      'Organised by property for easy retrieval',
      'Upload PDFs, images, and scanned documents',
      'Share documents with tenants or agents in one click',
    ],
  },
  {
    slug: 'property-portfolio',
    label: 'Property Portfolio',
    headline: 'Manage every property from one place',
    paragraphs: [
      'Whether you own one buy-to-let or a handful of rental properties, managing compliance across your portfolio shouldn\u2019t mean duplicating effort. LandlordReady gives you a single dashboard for everything.',
      'Add property details, track obligations per property, compare compliance status across your portfolio, and generate reports showing your overall compliance position. Perfect for landlords who want a clear, honest picture of where they stand.',
    ],
    bullets: [
      'Add unlimited properties to your dashboard',
      'Per-property compliance tracking and status',
      'Portfolio-wide compliance comparison view',
      'Generate compliance reports for your records or letting agents',
    ],
  },
];

const steps = [
  {
    number: '1',
    title: 'Sign up',
    description:
      'Create your free account in under two minutes.',
  },
  {
    number: '2',
    title: 'Add your properties',
    description:
      'Enter your property details and existing certificates. We\u2019ll build your compliance picture.',
  },
  {
    number: '3',
    title: 'Stay compliant',
    description:
      'Get alerts, track deadlines, and keep every document in one place. Stress-free compliance.',
  },
];

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-forest-green py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display text-parchment">
            Everything you need to stay compliant
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-pale-green">
            LandlordReady replaces the spreadsheets, calendar reminders, and
            guesswork with one compliance dashboard built for private landlords
            in England.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-lg no-underline transition-opacity hover:opacity-90 bg-amber text-near-black"
          >
            Start your free trial
          </Link>
          <p className="mt-4 text-sm text-pale-green/70">
            7-day free trial. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Feature sections */}
      {features.map((feature, index) => (
        <section
          key={feature.slug}
          className={`${index % 2 === 0 ? 'bg-parchment' : 'bg-pale-green'} py-16 md:py-20 px-6`}
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-medium mb-4 tracking-wide uppercase text-amber">
              {feature.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display text-forest-green">
              {feature.headline}
            </h2>
            <div className="space-y-4 mb-8">
              {feature.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-lg leading-relaxed text-near-black"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="space-y-3 mb-8">
              {feature.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 mt-1 text-forest-green"
                  >
                    <path
                      d="M16.667 5L7.5 14.167 3.333 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-near-black">{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href={`/features/${feature.slug}`}
              className="inline-block font-semibold no-underline text-forest-green border-b-2 border-forest-green transition-opacity hover:opacity-70"
            >
              Learn more &rarr;
            </Link>
          </div>
        </section>
      ))}

      {/* How it works */}
      <section className="bg-pale-amber py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-display text-forest-green">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="p-6">
                <div className="w-12 h-12 rounded-full bg-forest-green text-parchment flex items-center justify-center text-xl font-bold mx-auto mb-4 font-display">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-forest-green">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-near-black">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-forest-green py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display text-parchment">
            Ready to take the stress out of compliance?
          </h2>
          <p className="text-lg mb-8 text-pale-green">
            Join landlords across England who are using LandlordReady to stay on
            top of every obligation. Start your free 7-day trial today.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-lg no-underline transition-opacity hover:opacity-90 bg-amber text-near-black"
          >
            Start your free trial
          </Link>
          <p className="mt-4 text-sm text-pale-green/70">
            Cancel anytime.
          </p>
        </div>
      </section>
    </main>
  );
}
