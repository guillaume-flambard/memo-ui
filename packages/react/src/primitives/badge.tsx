/**
 * memo-ui Badge
 * Compact status / meta label. Ocre variant is scarce punctuation.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'ocre' | 'outline' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
}

const badgeVariants = {
  default:
    'bg-[var(--badge-bg-default)] text-[var(--badge-fg-default)] border-[var(--badge-border-default)]',
  ocre:
    'bg-[var(--badge-bg-ocre)] text-[var(--badge-fg-ocre)] border-[var(--badge-border-ocre)]',
  outline:
    'bg-[var(--badge-bg-outline)] text-[var(--badge-fg-outline)] border-[var(--badge-border-outline)]',
  success:
    'bg-[var(--badge-bg-success)] text-[var(--badge-fg-success)] border-[var(--badge-border-success)]',
  warning:
    'bg-[var(--badge-bg-warning)] text-[var(--badge-fg-warning)] border-[var(--badge-border-warning)]',
  error:
    'bg-[var(--badge-bg-error)] text-[var(--badge-fg-error)] border-[var(--badge-border-error)]',
} as const;

const badgeSizes = {
  sm: 'h-5 px-1.5 text-[11px]',
  md: 'h-6 px-2 text-xs',
} as const;

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-1 rounded-full border font-medium tracking-wide',
          'transition-[opacity,transform] duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]',
          badgeVariants[variant],
          badgeSizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
