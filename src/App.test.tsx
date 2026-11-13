import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('Therapymana landing page', () => {
  it('renders the hero headline and Get Started Free CTA to the app signup', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /all-in-one management software for massage & spa studios/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /get started free/i })).toHaveAttribute(
      'href',
      'https://app.therapymana.com/signup',
    );
  });

  it('points navbar Log In / Start Free Trial at the app and anchors at sections', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: 'Main' });
    expect(within(nav).getByRole('link', { name: 'Log In' })).toHaveAttribute(
      'href',
      'https://app.therapymana.com/login',
    );
    expect(within(nav).getByRole('link', { name: 'Start Free Trial' })).toHaveAttribute(
      'href',
      'https://app.therapymana.com/signup',
    );
    expect(within(nav).getByRole('link', { name: 'Features' })).toHaveAttribute('href', '#features');
    expect(within(nav).getByRole('link', { name: 'Pricing' })).toHaveAttribute('href', '#pricing');
  });

  it('shows the three features and both pricing tiers with prices', () => {
    render(<App />);
    for (const title of ['Smart Scheduling', 'Automated Commissions & Payouts', 'Multi-Branch & Mobile Ready']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument();
    }
    expect(screen.getByRole('heading', { level: 3, name: 'Starter' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Pro' })).toBeInTheDocument();
    expect(screen.getByText('$29')).toBeInTheDocument();
    expect(screen.getByText('$79')).toBeInTheDocument();
  });

  it('brands the footer with the copyright line', () => {
    render(<App />);
    const footer = screen.getByRole('contentinfo');
    expect(within(footer).getByText('© 2026 Therapymana. All rights reserved.')).toBeInTheDocument();
  });
});
