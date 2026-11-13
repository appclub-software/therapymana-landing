import { useState } from 'react';
import type { ComponentType } from 'react';
import { ButtonLink } from './components/Button';
import { ArrowRight, Building, CalendarCheck, Check, Close, Coins, Leaf, Menu } from './components/icons';
import { SchedulePreview } from './components/SchedulePreview';
import { LOGIN_URL, SIGNUP_URL } from './config';

const BRAND = 'Therapymana';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
];

/* -------------------------------------------------------------------------- */
/*                                   Navbar                                   */
/* -------------------------------------------------------------------------- */

function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-xs">
        <Leaf className="size-[18px]" />
      </span>
      <span className="text-lg font-semibold tracking-tight text-slate-900">{BRAND}</span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8" aria-label="Main">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-slate-600 transition hover:text-slate-900">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href={LOGIN_URL} variant="tertiary">
            Log In
          </ButtonLink>
          <ButtonLink href={SIGNUP_URL}>Start Free Trial</ButtonLink>
        </div>

        <button
          type="button"
          className="-mr-2 flex size-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-50 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`border-t border-slate-200 bg-white md:hidden ${open ? '' : 'hidden'}`}>
        <div className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-semibold text-slate-700 hover:bg-slate-50"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <ButtonLink href={LOGIN_URL} variant="secondary" size="lg">
              Log In
            </ButtonLink>
            <ButtonLink href={SIGNUP_URL} size="lg">
              Start Free Trial
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Hero                                    */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-gradient-to-b from-emerald-50 to-transparent"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-3 py-1 text-sm font-medium text-emerald-700 shadow-xs">
            <span className="size-1.5 rounded-full bg-emerald-600" />
            Built for massage &amp; spa studios
          </span>

          <h1 className="mt-6 text-4xl leading-[1.15] font-semibold tracking-tight text-slate-900 md:text-5xl xl:text-6xl">
            All-in-One Management Software for Massage &amp; Spa Studios
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600 md:text-xl lg:mx-0">
            Streamline your front desk operations—manage therapist schedules, automate commission calculations, and
            close daily payouts effortlessly with zero errors.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
            <ButtonLink href={SIGNUP_URL} size="xl" iconTrailing={ArrowRight}>
              Get Started Free
            </ButtonLink>
            <ButtonLink href="#features" variant="secondary" size="xl">
              See How It Works
            </ButtonLink>
          </div>

          <p className="mt-4 text-sm text-slate-500">14-day free trial · No credit card required</p>
        </div>

        <div className="mx-auto w-full max-w-xl lg:max-w-none">
          <SchedulePreview />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Features                                  */
/* -------------------------------------------------------------------------- */

type Feature = { icon: ComponentType<{ className?: string }>; title: string; description: string };

const FEATURES: Feature[] = [
  {
    icon: CalendarCheck,
    title: 'Smart Scheduling',
    description:
      'Effortlessly manage daily appointments and therapist availability in one clear, unified calendar view.',
  },
  {
    icon: Coins,
    title: 'Automated Commissions & Payouts',
    description: 'Calculate accurate staff commissions and lock daily financial summaries in a single click.',
  },
  {
    icon: Building,
    title: 'Multi-Branch & Mobile Ready',
    description: 'Monitor real-time revenue, bookings, and branch performance from any device, anywhere.',
  },
];

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold text-emerald-700 md:text-base">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-slate-600 md:text-xl">{subtitle}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="border-t border-slate-200 bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything your front desk needs"
          subtitle="Less paperwork, fewer mistakes, and more time for your clients."
        />

        <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:shadow-md md:p-8"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-base text-slate-600">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Pricing                                  */
/* -------------------------------------------------------------------------- */

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '$29',
    period: 'per month',
    description: 'For single-location studios getting organized.',
    features: [
      '1 branch location',
      'Up to 5 therapists',
      'Appointment calendar & bookings',
      'Automated commission calculation',
      'Daily payout summaries',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$79',
    period: 'per month',
    description: 'For growing businesses running multiple branches.',
    features: [
      'Unlimited branch locations',
      'Unlimited therapists',
      'Everything in Starter',
      'Multi-branch revenue dashboard',
      'Staff shift & roster planning',
      'Role-based staff permissions',
      'Priority support',
    ],
    featured: true,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          subtitle="Start free for 14 days. Upgrade, downgrade, or cancel anytime."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm md:p-8 ${
                plan.featured ? 'border-emerald-500 ring-1 ring-emerald-500' : 'border-slate-200'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 right-6 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-xs">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
              <p className="mt-1 text-base text-slate-600">{plan.description}</p>

              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight text-slate-900">{plan.price}</span>
                <span className="text-base font-medium text-slate-600">{plan.period}</span>
              </p>

              <ul className="mt-8 flex flex-1 flex-col gap-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-base text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href={SIGNUP_URL}
                variant={plan.featured ? 'primary' : 'secondary'}
                size="xl"
                className="mt-10 w-full"
              >
                Start Free Trial
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Footer                                   */
/* -------------------------------------------------------------------------- */

const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: 'Log In', href: LOGIN_URL },
  { label: 'Sign Up', href: SIGNUP_URL },
];

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-base text-slate-600">
              Management software for massage &amp; spa studios — scheduling, commissions, and payouts in one place.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-base font-semibold text-slate-600 transition hover:text-slate-900">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500">© 2026 {BRAND}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export function App() {
  return (
    <div className="min-h-dvh bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
