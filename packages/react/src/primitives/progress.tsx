"use client";

/**
 * memo-ui Progress — determinate progress bar with ARIA value attributes.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current value. Clamped between `min` and `max`. `@default 0` */
  value?: number;
  /** Minimum value. `@default 0` */
  min?: number;
  /** Maximum value. `@default 100` */
  max?: number;
  /** Accessible name for the progressbar. */
  label?: string;
}

/** Determinate progress indicator (`role="progressbar"`). */
export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ value = 0, min = 0, max = 100, label, className, ...props }, ref) => {
    const safeMax = max <= min ? min + 1 : max;
    const clamped = Math.min(safeMax, Math.max(min, value));
    const pct = ((clamped - min) / (safeMax - min)) * 100;

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={min}
        aria-valuemax={safeMax}
        aria-valuenow={clamped}
        aria-label={label}
        className={cn(
          'relative h-2 w-full overflow-hidden rounded-full border border-[var(--progress-border)]',
          'bg-[var(--progress-track)]',
          className
        )}
        {...props}
      >
        <div
          className="h-full rounded-full bg-[var(--progress-indicator)] transition-[transform] duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    );
  }
);

Progress.displayName = 'Progress';
