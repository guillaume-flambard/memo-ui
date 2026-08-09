"use client";

/**
 * memo-ui Icon — size/color wrapper for SVG children.
 * No icon set is bundled; pass your own SVG.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Box size. `@default md` */
  size?: 'sm' | 'md' | 'lg';
  /** Tokenized color. `accent` maps to AA `accent-ink`. `@default inherit` */
  color?: 'inherit' | 'encre' | 'ink2' | 'accent';
  /**
   * Accessible name. When set, the icon is semantic (`role="img"`).
   * When omitted, the icon is decorative (`aria-hidden`).
   */
  label?: string;
}

const iconSizes = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
} as const;

const iconColors = {
  inherit: 'text-current',
  encre: 'text-[var(--icon-color-encre)]',
  ink2: 'text-[var(--icon-color-ink2)]',
  accent: 'text-[var(--icon-color-accent)]',
} as const;

/** Wraps an SVG. Always set `label` when the icon conveys meaning alone. */
export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      size = 'md',
      color = 'inherit',
      label,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const decorative = !label;

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex shrink-0 items-center justify-center [&_svg]:size-full',
          iconSizes[size],
          iconColors[color],
          className
        )}
        role={decorative ? undefined : 'img'}
        aria-hidden={decorative ? true : undefined}
        aria-label={label}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Icon.displayName = 'Icon';
