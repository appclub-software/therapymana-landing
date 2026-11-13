import type { AnchorHTMLAttributes, ComponentType, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'tertiary';
type Size = 'md' | 'lg' | 'xl';

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-emerald-600 text-white shadow-xs ring-1 ring-inset ring-emerald-700/20 hover:bg-emerald-700 [&_svg]:text-white/70',
  secondary:
    'bg-white text-slate-700 shadow-xs ring-1 ring-inset ring-slate-300 hover:bg-slate-50 hover:text-slate-800',
  tertiary: 'text-slate-600 hover:bg-slate-50 hover:text-slate-800',
};

const SIZES: Record<Size, string> = {
  md: 'gap-1 px-3.5 py-2.5 text-sm',
  lg: 'gap-1.5 px-4 py-2.5 text-base',
  xl: 'gap-1.5 px-[18px] py-3 text-base',
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  iconTrailing?: ComponentType<{ className?: string }>;
  children: ReactNode;
};

/** Link styled as a button (all CTAs on this page navigate). */
export function ButtonLink({
  variant = 'primary',
  size = 'md',
  iconTrailing: Icon,
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      {...props}
      className={[
        'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition duration-100 ease-linear',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600',
        VARIANTS[variant],
        SIZES[size],
        className,
      ].join(' ')}
    >
      <span className="px-0.5">{children}</span>
      {Icon && <Icon className="size-5 shrink-0" />}
    </a>
  );
}
