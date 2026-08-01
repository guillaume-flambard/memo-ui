'use client';

/**
 * memo-ui Spinner — loading indicator using the core `spin` keyframe.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual size. `@default md` */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Accessible name. When provided, exposes `role="status"`.
   * When omitted, marked decorative (`aria-hidden`).
   */
  label?: string;
}

const spinnerSizes = {
  sm: 'size-4 border-2',
  md: 'size-5 border-2',
  lg: 'size-8 border-[3px]',
} as const;

/**
 * Indeterminate loading indicator. Prefer a `label` when the spinner is the
 * sole feedback for a pending action; omit for decorative spinners inside buttons.
 */
export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ size = 'md', label, className, ...props }, ref) => {
    const decorative = !label;

    return (
      <span
        ref={ref}
        role={decorative ? undefined : 'status'}
        aria-live={decorative ? undefined : 'polite'}
        aria-label={label}
        aria-hidden={decorative ? true : undefined}
        className={cn('inline-flex items-center justify-center', className)}
        {...props}
      >
        <span
          className={cn(
            'inline-block animate-spin rounded-full',
            'border-[var(--spinner-track)] border-t-[var(--spinner-indicator)]',
            spinnerSizes[size]
          )}
        />
        {label ? <span className="sr-only">{label}</span> : null}
      </span>
    );
  }
);

Spinner.displayName = 'Spinner';
