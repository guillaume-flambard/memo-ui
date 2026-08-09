"use client";

/**
 * memo-ui Badge — compact status / meta label.
 * Accent variant is scarce punctuation, not a default chrome color.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color treatment. Use `accent` sparingly. `@default default` */
  variant?: 'default' | 'accent' | 'outline' | 'success' | 'warning' | 'error';
  /** Compact (`sm`) or default (`md`) height. `@default md` */
  size?: 'sm' | 'md';
}

const badgeVariants = {
  default:
    'bg-[var(--badge-bg-default)] text-[var(--badge-fg-default)] border-[var(--badge-border-default)]',
  accent:
    'bg-[var(--badge-bg-accent)] text-[var(--badge-fg-accent)] border-[var(--badge-border-accent)]',
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

/** Non-interactive label chip. Foreground colors use AA ink tokens. */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-1 rounded-full border font-medium tracking-wide',
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
