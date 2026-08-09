"use client";

/**
 * memo-ui Button — primary action with scarce accent fill. Flat (no radius),
 * motion under 300ms on colour/border only.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `@default primary` */
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  /** Control height and padding. `@default md` */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Shows a spinner, sets `aria-busy`, and disables the control.
   * Accessible name is preserved via visually hidden children.
   * `@default false`
   */
  loading?: boolean;
}

const buttonVariants = {
  primary:
    'bg-[var(--color-accent)] text-[var(--color-on-accent)] border-transparent hover:bg-[var(--color-accent-deep)]',
  secondary:
    'bg-[var(--color-surface)] text-[var(--color-encre)] border-[var(--color-line)] hover:border-[var(--color-line2)] hover:bg-[var(--color-surface2)]',
  ghost:
    'bg-transparent text-[var(--color-encre)] border-transparent hover:bg-[var(--color-accent-soft)]',
  outline:
    'bg-transparent text-[var(--color-encre)] border-[var(--color-line)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-ink)]',
} as const;

const buttonSizes = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
} as const;

/**
 * Clickable action control. Prefer `primary` for the single strongest CTA on a surface.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'border font-medium',
          'transition-[background-color,border-color,color] duration-[var(--duration-normal)] ease-in-out',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)]',
          'disabled:pointer-events-none disabled:opacity-50',
          'aria-busy:pointer-events-none',
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <span
              className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent"
              aria-hidden
            />
            <span className="sr-only">{children}</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
