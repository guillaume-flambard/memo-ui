"use client";

/**
 * memo-ui Text — typographic primitive (Geist body / Space Grotesk display).
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /** Type scale. From `xl` up, display font is applied. `@default base` */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  /** Font weight. `@default normal` */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  /** Rendered HTML element. `@default p` */
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
} as const;

const textWeights = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const;

const displaySizes = new Set(['xl', '2xl', '3xl', '4xl', '5xl']);

/** Polymorphic text. Choose `as` to match document outline, not only visuals. */
export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ size = 'base', weight = 'normal', as = 'p', className, children, ...props }, ref) => {
    const Component = as;

    return (
      <Component
        ref={ref as never}
        className={cn(
          'text-[var(--color-encre)]',
          displaySizes.has(size)
            ? 'font-[family-name:var(--font-display)] tracking-tight'
            : 'font-[family-name:var(--font-sans)]',
          textSizes[size],
          textWeights[weight],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
