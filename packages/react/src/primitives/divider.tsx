"use client";

/**
 * memo-ui Divider
 * Horizontal: native `<hr>`. Vertical: `role=separator` + `aria-orientation`.
 * Labeled: two `<hr>` + text — never put label text inside `role=separator` (ARIA).
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface DividerProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  /** Axis. Vertical uses an explicit ARIA separator. `@default horizontal` */
  orientation?: 'horizontal' | 'vertical';
  /** Border token strength. `@default line` */
  tone?: 'line' | 'line2';
  /**
   * Optional label (horizontal only). Rendered between two rules —
   * not inside a separator role.
   */
  label?: React.ReactNode;
}

const toneMap = {
  line: 'border-[var(--divider-color-line)]',
  line2: 'border-[var(--divider-color-line2)]',
} as const;

const ruleClass = 'm-0 border-0 border-t bg-transparent';

/** Visual break between sections. Prefer unlabeled `<hr>` when no copy is needed. */
export const Divider = forwardRef<HTMLElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      tone = 'line',
      label,
      className,
      ...props
    },
    ref
  ) => {
    if (orientation === 'vertical') {
      return (
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          role="separator"
          aria-orientation="vertical"
          className={cn(
            'min-h-[1em] self-stretch border-0 border-l',
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
          ref={ref as React.Ref<HTMLDivElement>}
          className={cn('flex w-full items-center gap-3', className)}
          {...props}
        >
          <hr className={cn(ruleClass, 'h-px flex-1', toneMap[tone])} />
          <span className="shrink-0 text-xs font-medium leading-none text-[var(--divider-label-color)]">
            {label}
          </span>
          <hr className={cn(ruleClass, 'h-px flex-1', toneMap[tone])} />
        </div>
      );
    }

    return (
      <hr
        ref={ref as React.Ref<HTMLHRElement>}
        className={cn(ruleClass, 'w-full', toneMap[tone], className)}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';
