export type FeatureStep = {
  step: number;
  title: string;
  description: string;
};

export type FeatureData = {
  slug: string;
  name: string;
  headline: string;
  description: string[];
  benefits: string[];
  howItWorks: FeatureStep[];
  ctaAction: string;
  seoTitle?: string;
  seoDescription?: string;
};

export const features: FeatureData[] = [
  {
    slug: 'compliance-dashboard',
    name: 'Compliance Dashboard',
    headline: 'See every obligation at a glance',
    description: [
      'Managing rental properties means juggling a growing list of legal requirements — gas safety certificates, EICRs, EPCs, deposit protection, selective licensing, smoke and CO alarms. Miss one, and you could face fines of up to £30,000. The Compliance Dashboard brings every obligation for every property into a single, clear view so you always know exactly where you stand.',
      'Each requirement is colour-coded by status: green for compliant, amber for due soon, and red for overdue. No digging through emails or spreadsheets — just open your dashboard and see what needs attention today, this month, and this quarter.',
      'LandlordReady is designed for landlords who do not want to become compliance experts. You should not need a law degree to rent out a property safely and legally. The Compliance Dashboard gives you confidence that nothing has been missed, whether you own one buy-to-let or ten.',
    ],
    benefits: [
      'Real-time compliance status across all properties',
      'Property-by-property breakdown of every obligation',
      'Certificate expiry tracking with clear colour coding',
      'Instant visibility of what needs your attention',
      'Works for 1 property or 10',
      'Printable compliance summary for your records',
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Add your properties',
        description:
          'Enter your property details and LandlordReady automatically creates a checklist of every legal obligation that applies.',
      },
      {
        step: 2,
        title: 'Log your certificates',
        description:
          'Record your existing certificates and their expiry dates. Upload documents for safekeeping if you like.',
      },
      {
        step: 3,
        title: 'Check your dashboard',
        description:
          'Your dashboard updates in real time. Green, amber, and red statuses tell you exactly what is compliant, what is coming up, and what is overdue.',
      },
    ],
    ctaAction: 'tracking your compliance',
  },
  {
    slug: 'deadline-alerts',
    name: 'Deadline Alerts',
    headline: 'Never miss a deadline again',
    description: [
      'A lapsed gas safety certificate or an expired EPC does not just put your tenants at risk — it puts your right to serve notice on hold and exposes you to significant fines. The problem is that most landlords rely on memory, calendar reminders, or their letting agent to keep track. That is not good enough when the stakes are this high.',
      'LandlordReady sends automated alerts at 90, 60, and 30 days before any certificate or obligation expires. You get email notifications and clear warnings on your dashboard, so there is always time to book a contractor, arrange an inspection, or renew a licence before the deadline passes.',
      'You choose which alerts you receive and how far in advance. Whether it is a gas safety renewal, the 5-year EICR cycle, EPC validity, deposit re-protection, or a selective licensing renewal, Deadline Alerts has you covered.',
    ],
    benefits: [
      'Configurable alert windows at 90, 60, and 30 days',
      'Email and dashboard notifications',
      'Covers all certificate types and legal obligations',
      'No more manual calendar reminders',
      'Peace of mind between compliance checks',
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Set your preferences',
        description:
          'Choose which alerts you want to receive and when. Set different alert windows for different obligation types if needed.',
      },
      {
        step: 2,
        title: 'Receive timely reminders',
        description:
          'As deadlines approach, you receive email notifications and see warnings on your dashboard — giving you plenty of time to act.',
      },
      {
        step: 3,
        title: 'Renew and confirm',
        description:
          'Once you have renewed a certificate or met an obligation, update your dashboard and the alert resets for the next cycle.',
      },
    ],
    ctaAction: 'tracking your deadlines',
  },
  {
    slug: 'regulation-updates',
    name: 'Regulation Updates',
    headline: 'The law changes. Your dashboard keeps up.',
    description: [
      "The Renters' Rights Act 2025 is being rolled out in phases, and it is not the only thing changing. Awaab's Law is extending to the private sector, safety regulations are being tightened, and local authorities are ramping up enforcement. Keeping track of what has changed and what it means for your properties is a job in itself.",
      'LandlordReady monitors legislative changes at both the national and local level. When something changes that affects your properties, we do not just send you a news bulletin — we create actionable tasks on your dashboard with clear deadlines and plain-English explanations of what you need to do.',
      'No more trawling through government consultations or trying to decode legal jargon. Regulation Updates translates every relevant change into simple, specific actions tied to your property types and your local authority area.',
    ],
    benefits: [
      'Automatic monitoring of legislative changes',
      'Plain-English explanations of what every change means',
      'Actionable tasks created directly on your dashboard',
      'Specific to your property types and locations',
      'Covers both national and local regulations',
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Tell us about your properties',
        description:
          'Your property details — type, location, tenancy status — help us filter regulation changes to only what is relevant to you.',
      },
      {
        step: 2,
        title: 'We monitor the changes',
        description:
          "LandlordReady tracks Renters' Rights Act phases, Awaab's Law requirements, safety regulation updates, and local authority enforcement changes.",
      },
      {
        step: 3,
        title: 'You get actionable tasks',
        description:
          'When something changes, a new task appears on your dashboard with a clear deadline and a plain-English explanation of what to do.',
      },
    ],
    ctaAction: 'tracking regulation changes',
  },
  {
    slug: 'document-storage',
    name: 'Document Storage',
    headline: 'All your documents, one secure place',
    description: [
      'Gas safety certificates in a kitchen drawer. EICRs in an email attachment from three years ago. Tenancy agreements on a hard drive you cannot find. When a tenant, letting agent, or local authority asks for a document, the scramble to find it is stressful and unprofessional — and under the new Property Portal, you will need to produce documents on demand.',
      'LandlordReady gives you a single, secure place to upload and store every property document: gas safety certs, EICRs, EPC reports, tenancy agreements, deposit certificates, insurance policies, and right-to-rent checks. Everything is organised by property, so you can find what you need in seconds.',
      'Documents are stored with bank-grade encryption and backed up automatically. Share files with tenants, agents, or authorities with a click. When the Property Portal requires you to demonstrate compliance, your documents are ready to go.',
    ],
    benefits: [
      'Organised by property for quick access',
      'Quick search and retrieval in seconds',
      'Satisfies Property Portal document requirements',
      'Secure encrypted storage with automatic backups',
      'Share documents easily with tenants and agents',
      'Never lose a certificate again',
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Upload your documents',
        description:
          'Drag and drop or upload certificates, agreements, and reports. LandlordReady files them under the right property automatically.',
      },
      {
        step: 2,
        title: 'Find anything instantly',
        description:
          'Search by property, document type, or date. No more hunting through emails, drawers, or old hard drives.',
      },
      {
        step: 3,
        title: 'Share when needed',
        description:
          'When a tenant, agent, or local authority asks for a document, share it securely with a single click.',
      },
    ],
    ctaAction: 'organising your documents',
    seoTitle: 'Storing Tenancy Documents Securely | Landlord Document Storage — LandlordReady',
    seoDescription: 'Store tenancy documents securely in one place. Upload gas safety certs, EICRs, tenancy agreements, and deposit certificates with encrypted cloud storage. Organised by property, accessible anytime.',
  },
  {
    slug: 'property-portfolio',
    name: 'Property Portfolio',
    headline: 'Manage every property from one place',
    description: [
      'If you own more than one rental property, compliance gets complicated fast. Each property has its own gas safety certificate, EICR, EPC, deposit protection, and potentially its own licensing requirements. Tracking all of this across multiple properties without a system is a recipe for missed deadlines and unexpected fines.',
      'The Property Portfolio feature lets you add property details, assign tenancies, and track per-property obligations from a single overview. Compare compliance status across your entire portfolio at a glance and generate compliance reports when you need them.',
      'Whether you have one buy-to-let or ten, Property Portfolio gives you the complete compliance picture. Add and remove properties as your portfolio changes, track tenants and tenancy details, and always know which property needs attention next.',
    ],
    benefits: [
      'Multi-property overview in a single dashboard',
      'Per-property compliance tracking and status',
      'Portfolio-wide compliance reports',
      'Add and remove properties easily as your portfolio changes',
      'Tenant and tenancy tracking per property',
      'Scales from 1 to 10 properties',
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Add your properties',
        description:
          'Enter the details for each property in your portfolio — address, type, tenancy status, and any existing certificates.',
      },
      {
        step: 2,
        title: 'View your portfolio',
        description:
          'See every property side by side with compliance status indicators. Quickly spot which properties need attention.',
      },
      {
        step: 3,
        title: 'Generate reports',
        description:
          'Create compliance reports for individual properties or your entire portfolio. Perfect for your own records or for sharing with agents.',
      },
    ],
    ctaAction: 'managing your portfolio',
  },
];

export function getFeatureBySlug(slug: string): FeatureData | undefined {
  return features.find((f) => f.slug === slug);
}
