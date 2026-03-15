import type { Metadata } from 'next';
import Link from 'next/link';
import { SignupButton } from '@/components/SignupButton';

export const metadata: Metadata = {
  title: 'About LandlordReady — Our Mission',
  description:
    'Built by landlords, for landlords. Learn how LandlordReady helps private landlords in England stay compliant with the Renters\' Rights Act 2025 and beyond.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-parchment py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display text-forest-green">
            Built by landlords, for landlords
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-near-black leading-relaxed">
            LandlordReady exists for one reason: to help private landlords stay
            compliant with confidence. No jargon. No guesswork. Just clear
            guidance you can act on.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display text-forest-green">
            Our story
          </h2>
          <div className="space-y-6 text-near-black leading-relaxed text-lg">
            <p>
              The Renters&apos; Rights Act 2025 is the biggest change to private
              renting in a generation. It introduces mandatory periodic
              tenancies, reformed possession grounds, a new Private Rented
              Sector Database, and extends Awaab&apos;s Law to the private
              sector. For landlords managing large portfolios, compliance teams
              and legal departments can absorb the change. But most private
              landlords in England own just one or two properties — and
              they&apos;re expected to meet exactly the same standards.
            </p>
            <p>
              We saw the gap first-hand. Landlords were trawling through
              government guidance documents, piecing together advice from
              forums, and hoping they hadn&apos;t missed a deadline. Fines of up
              to £7,000 for a first offence and £40,000 for repeat breaches
              meant the stakes were too high for guesswork. There had to be a
              better way.
            </p>
            <p>
              LandlordReady was founded to give every private landlord the
              tools and knowledge to stay on the right side of the law. We
              translate complex legislation into clear, actionable tasks. We
              track your deadlines so you don&apos;t have to. And when the
              regulations change — as they inevitably will — we update your
              obligations automatically. Because compliance shouldn&apos;t
              require a law degree.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-pale-green py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-display text-forest-green">
            What we believe
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Compliance shouldn\u2019t be complicated',
                description:
                  'Plain English, clear deadlines, no legal jargon. Every obligation is explained in language you can actually understand, with specific dates and actions attached.',
              },
              {
                title: 'Small landlords deserve big support',
                description:
                  'Compliance dashboards, deadline tracking, and regulation alerts were previously only available to portfolio landlords and letting agents. We believe every landlord deserves those tools.',
              },
              {
                title: 'Stay ahead, not behind',
                description:
                  'Proactive alerts before deadlines hit, not penalties after they\u2019ve passed. We\u2019d rather send you a reminder than see you receive a fine.',
              },
            ].map((card) => (
              <article key={card.title} className="p-6 rounded-lg bg-parchment">
                <h3 className="text-xl font-semibold mb-3 text-forest-green">
                  {card.title}
                </h3>
                <p className="leading-relaxed text-near-black">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment to Accuracy */}
      <section className="bg-pale-amber py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display text-forest-green">
            Our commitment to accuracy
          </h2>
          <p className="text-lg mb-8 text-near-black leading-relaxed">
            When you&apos;re relying on guidance to avoid fines and legal
            action, accuracy isn&apos;t optional. Here&apos;s how we earn your
            trust:
          </p>
          <ul className="space-y-4 text-near-black text-lg">
            <li className="flex gap-3">
              <span className="text-forest-green font-bold mt-0.5 shrink-0">✓</span>
              <span>
                All content is reviewed by qualified housing professionals with
                direct experience of landlord compliance in England.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-forest-green font-bold mt-0.5 shrink-0">✓</span>
              <span>
                We cite specific regulations — including the Housing Act 1988,
                the Renters&apos; Rights Act 2025, and relevant statutory
                instruments — so you can verify everything we say.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-forest-green font-bold mt-0.5 shrink-0">✓</span>
              <span>
                Our guides are updated when the law changes. Every article
                carries a publication date and a last-reviewed date so you know
                the information is current.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-forest-green font-bold mt-0.5 shrink-0">✓</span>
              <span>
                We&apos;re transparent about what we know and what we
                don&apos;t. Where regulations are still awaiting secondary
                legislation or official guidance, we say so clearly.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* The Team */}
      <section className="bg-parchment py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display text-forest-green">
            The team
          </h2>
          <p className="text-lg mb-8 text-near-black leading-relaxed">
            The LandlordReady team combines property law expertise, housing
            regulation experience, and technology. We work together to make
            compliance straightforward for every private landlord in England.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <article className="p-6 rounded-lg bg-white">
              <h3 className="text-xl font-semibold mb-1 text-forest-green">
                Sarah Mitchell
              </h3>
              <p className="text-sm font-medium mb-3 text-amber">
                Head of Compliance
              </p>
              <p className="leading-relaxed text-near-black">
                Sarah has spent 15 years advising private landlords on housing
                regulation. She holds a degree in Housing Law from the
                University of Westminster and is a member of the Chartered
                Institute of Housing.
              </p>
            </article>
            <article className="p-6 rounded-lg bg-white">
              <h3 className="text-xl font-semibold mb-1 text-forest-green">
                LandlordReady Team
              </h3>
              <p className="text-sm font-medium mb-3 text-amber">
                Compliance Experts
              </p>
              <p className="leading-relaxed text-near-black">
                The LandlordReady team combines decades of experience in
                property law, landlord compliance, and housing regulation.
                We&apos;re on a mission to help every private landlord in
                England stay compliant with confidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-green py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-parchment">
            Ready to get compliant?
          </h2>
          <p className="text-lg mb-8 text-pale-green">
            Join thousands of private landlords who use LandlordReady to stay on
            top of their obligations. Start your free trial today.
          </p>
          <SignupButton
            className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-opacity hover:opacity-90 bg-amber text-near-black"
          >
            Get compliant — free for 30 days
          </SignupButton>
          <p className="mt-4 text-sm text-pale-green/70">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </main>
  );
}
