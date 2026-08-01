/**
 * memo-ui Grid
 * CSS Grid layout — gap in 4px units (same contract as Stack).
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Column count 1–12 */
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** Spacing in 4px units (gap={4} → 1rem) */
  gap?: number;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'stretch';
}

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
} as const;

const justifyMap = {
  start: 'justify-items-start',
  center: 'justify-items-center',
  end: 'justify-items-end',
  stretch: 'justify-items-stretch',
} as const;

const columnsMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
} as const;

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      columns = 1,
      gap = 4,
      align = 'stretch',
      justify = 'stretch',
      className,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          columnsMap[columns],
          alignMap[align],
          justifyMap[justify],
          className
        )}
        style={{ gap: `${gap * 0.25}rem`, ...style }}
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';
