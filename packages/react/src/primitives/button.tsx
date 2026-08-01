/**
 * memo-ui Button
 * Primary action component with ocre accent signature
 * Variants: primary, secondary, ghost, outline
 * Sizes: sm, md, lg
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const buttonVariants = {
  primary: 'bg-[var(--color-ocre)] text-[var(--color-on-ocre)] border-[var(--color-ocre-deep)] hover:brightness',
  secondary: 'bg-[var(--color-surface)] text-[var(--color-encre)] border-[var(--color-line2)] hover:bg-[var(--color-surface2)]',
  ghost: 'bg-transparent text-[var(--color-encre)] border-transparent hover:bg-[var(--color-ocre-soft)]',
  outline: 'bg-transparent text-[var(--color-encre)] border-[var(--color-line2)] hover:border-[var(--color-ocre)]',
} as const;

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm h-8',
  md: 'px-4 py-2 text-base h-10',
  lg: 'px-6 py-3 text-lg h-12',
} as const;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, className, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center gap-2',
          'font-medium transition-all duration-150',
          'rounded-lg border',
          'focus:outline-none focus:ring-2 focus:ring-[var(--color-ocre)] focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',

          // Variant
          buttonVariants[variant],

          // Size
          buttonSizes[size],

          // Shadow for primary
          variant === 'primary' && 'shadow-[var(--shadow-glow-ocre)]',

          className
        )}
        {...props}
      >
        {loading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
