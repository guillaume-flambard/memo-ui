/**
 * memo-ui Button
 * Primary action with ocre accent. Interactive motion < 300ms, transform/opacity only.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const buttonVariants = {
  primary:
    'bg-[var(--color-ocre)] text-[var(--color-on-ocre)] border-transparent hover:brightness-[1.05] active:brightness-[0.97]',
  secondary:
    'bg-[var(--color-surface)] text-[var(--color-encre)] border-[var(--color-line)] hover:border-[var(--color-line2)] hover:bg-[var(--color-surface2)]',
  ghost:
    'bg-transparent text-[var(--color-encre)] border-transparent hover:bg-[var(--color-ocre-soft)]',
  outline:
    'bg-transparent text-[var(--color-encre)] border-[var(--color-line)] hover:border-[var(--color-ocre)] hover:text-[var(--color-ocre-ink)]',
} as const;

const buttonSizes = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
} as const;

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
          'rounded-xl border font-medium',
          'transition-[transform,opacity,filter,background-color,border-color,color] duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)]',
          'disabled:pointer-events-none disabled:opacity-50',
          'active:scale-[0.98]',
          'aria-busy:pointer-events-none',
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden
          />
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
