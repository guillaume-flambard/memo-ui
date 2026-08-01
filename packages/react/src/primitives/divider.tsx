/**
 * memo-ui Divider
 * Horizontal or vertical rule with optional centered label.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  tone?: 'line' | 'line2';
  /** Optional label (horizontal only) */
  label?: React.ReactNode;
}

const toneMap = {
  line: 'border-[var(--divider-color-line)]',
  line2: 'border-[var(--divider-color-line2)]',
} as const;

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      tone = 'line',
      label,
      className,
      role = 'separator',
      ...props
    },
    ref
  ) => {
    if (orientation === 'vertical') {
      return (
        <div
          ref={ref}
          role={role}
          aria-orientation="vertical"
          className={cn(
            'min-h-[1em] self-stretch border-l',
            toneMap[tone],
            className
          )}
          {...props}
        />
      );
    }

    if (label) {
      return (
        <div
          ref={ref}
          role={role}
          aria-orientation="horizontal"
          className={cn('flex w-full items-center gap-3', className)}
          {...props}
        >
          <span className={cn('h-px flex-1 border-t', toneMap[tone])} />
          <span className="shrink-0 text-xs font-medium text-[var(--divider-label-color)]">
            {label}
          </span>
          <span className={cn('h-px flex-1 border-t', toneMap[tone])} />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role={role}
        aria-orientation="horizontal"
        className={cn('w-full border-t', toneMap[tone], className)}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';
