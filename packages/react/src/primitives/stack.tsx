"use client";

/**
 * memo-ui Stack — flexbox layout.
 * Gap uses inline style so dynamic values always work
 * (Tailwind cannot see template-literal class names).
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Flex direction. `@default column` */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /** Align items. `@default start` */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Justify content. `@default start` */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /** Spacing in 4px units (`gap={4}` → 1rem). `@default 0` */
  gap?: number;
  /** Allow wrapping. `@default false` */
  wrap?: boolean;
}

const directionMap = {
  row: 'flex-row',
  column: 'flex-col',
  'row-reverse': 'flex-row-reverse',
  'column-reverse': 'flex-col-reverse',
} as const;

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
} as const;

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
} as const;

/** One-dimensional flex stack. Prefer over ad-hoc `flex` + magic gaps. */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = 'column',
      align = 'start',
      justify = 'start',
      gap = 0,
      wrap = false,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          directionMap[direction],
          alignMap[align],
          justifyMap[justify],
          wrap && 'flex-wrap',
          className
        )}
        style={{
          display: 'flex',
          flexDirection:
            direction === 'row'
              ? 'row'
              : direction === 'column'
                ? 'column'
                : direction === 'row-reverse'
                  ? 'row-reverse'
                  : 'column-reverse',
          gap: gap > 0 ? `${gap * 0.25}rem` : undefined,
          flexWrap: wrap ? 'wrap' : undefined,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';
