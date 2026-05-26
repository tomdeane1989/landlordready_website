import type { Metadata } from 'next';
import { FAQJsonLd } from '@/components/seo/FAQJsonLd';
import {
  FAQAccordion,
  FAQItem,
} from '@/components/mdx/FAQAccordion';
import { SignupButton } from '@/components/SignupButton';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Pricing — Plans for Every Landlord',
  description:
    'Simple, transparent pricing for LandlordReady. Solo and Portfolio plans with a 7-day free trial. Stay compliant from £9/mo.',
};

const soloFeatures = [
  'Compliance dashboard',
  'Deadline alerts',
  'Certificate tracking',
  'Regulation updates',
  'Email support',
];

const portfolioFeatures = [
  'Everything in Solo',
  'Multi-property dashboard',
  'Portfolio compliance report',
  'Priority support',
];

const faqItems = [
  {
    question: 'What happens after the free trial?',
    answer:
      'After your 7-day free trial ends, you can choose to subscribe to a paid plan to continue using LandlordReady. If you decide not to subscribe, your account will be paused and your data kept safe — you can reactivate at any time.',
  },
  {
    question: 'Can I change plans later?',
    answer:
      'Absolutely. You can upgrade from Solo to Portfolio at any time and we will pro-rate the difference. If you need to downgrade, the change takes effect at the end of your current billing cycle.',
  },
  {
    question: 'Is there a contract?',
    answer:
      'No long-term contracts. Monthly plans are billed month-to-month and you can cancel at any time. Annual plans are paid upfront for 12 months at a discounted rate.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards (Visa, Mastercard, American Express) as well as Direct Debit via GoCardless for annual plans.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Monthly plans can be cancelled at any time with no refund for the current period. For annual plans, we offer a full refund within the first 30 days if you are not satisfied.',
  },
  {
    question: 'What if I have more than 10 properties?',
    answer:
      'If you manage more than 10 properties, please get in touch with our team. We offer custom Portfolio Plus plans tailored to larger portfolios with volume pricing and dedicated account management.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. We use bank-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Our infrastructure is hosted in UK data centres and we are fully GDPR compliant.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees. Your access continues until the end of your current billing period.',
  },
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-forest-green"
    >
      <path
        d="M6 10L9 13L14 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-parchment py-12 md:py-20 px-6">
      <FAQJsonLd questions={faqItems} />

      <div className="max-w-5xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display text-forest-green">
            Simple, transparent pricing
          </h1>
          <p className="text-lg max-w-2xl mx-auto font-body text-near-black">
            No hidden fees, no surprise charges. Pick the plan that fits your
            portfolio and start your 7-day free trial today.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {/* Solo card */}
          <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col">
            <h2 className="text-2xl font-bold font-display text-forest-green mb-2">
              Solo
            </h2>
            <p className="text-sm font-body text-near-black mb-6">
              For landlords with 1–2 properties
            </p>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold font-display text-near-black">
                  £9
                </span>
                <span className="text-sm font-body text-near-black">/mo</span>
              </div>
              <p className="text-sm font-body text-near-black mt-1">
                or{' '}
                <span className="font-semibold">£79/yr</span>{' '}
                <span className="text-amber font-semibold">(save £29)</span>
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {soloFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm font-body text-near-black"
                >
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>

            <SignupButton
              className="block w-full text-center rounded-lg py-3 px-6 font-semibold text-sm no-underline transition-opacity hover:opacity-90 bg-forest-green text-parchment font-body"
            >
              Start free for 7 days
            </SignupButton>
          </div>

          {/* Portfolio card */}
          <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col relative border-2 border-amber">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-amber text-near-black font-body">
              Most popular
            </span>

            <h2 className="text-2xl font-bold font-display text-forest-green mb-2">
              Portfolio
            </h2>
            <p className="text-sm font-body text-near-black mb-6">
              For landlords with up to 10 properties
            </p>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold font-display text-near-black">
                  £18
                </span>
                <span className="text-sm font-body text-near-black">/mo</span>
              </div>
              <p className="text-sm font-body text-near-black mt-1">
                or{' '}
                <span className="font-semibold">£149/yr</span>{' '}
                <span className="text-amber font-semibold">(save £67)</span>
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {portfolioFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm font-body text-near-black"
                >
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>

            <SignupButton
              className="block w-full text-center rounded-lg py-3 px-6 font-semibold text-sm no-underline transition-opacity hover:opacity-90 bg-forest-green text-parchment font-body"
            >
              Start free for 7 days
            </SignupButton>
          </div>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-20">
          {[
            'Cancel anytime',
            '7-day free trial on all plans',
          ].map((signal) => (
            <p
              key={signal}
              className="flex items-center gap-2 text-sm font-semibold font-body text-forest-green"
            >
              <CheckIcon />
              {signal}
            </p>
          ))}
        </div>

        {/* FAQ section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-display text-forest-green">
            Frequently asked questions
          </h2>

          <FAQAccordion>
            {faqItems.map((item) => (
              <FAQItem key={item.question} question={item.question}>
                <p>{item.answer}</p>
              </FAQItem>
            ))}
          </FAQAccordion>
        </div>
      </div>
    </main>
  );
}
