/**
 * memo-ui Stack
 * Flexbox layout component for vertical/horizontal stacking
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  gap?: number;
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

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({
    direction = 'column',
    align = 'start',
    justify = 'start',
    gap = 0,
    wrap = false,
    className,
    children,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'flex',

          // Direction
          directionMap[direction],

          // Alignment
          alignMap[align],

          // Justification
          justifyMap[justify],

          // Wrap
          wrap && 'flex-wrap',

          // Gap (using Tailwind spacing scale)
          gap > 0 && `gap-[${gap * 0.25}rem]`,

          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';
