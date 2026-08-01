/**
 * memo-ui Icon
 * Size/color wrapper for SVG children — no icon set bundled.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
  color?: 'inherit' | 'encre' | 'ink2' | 'ocre';
  /** Accessible name — when set, icon is semantic (role=img). Otherwise decorative. */
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
  ocre: 'text-[var(--icon-color-ocre)]',
} as const;

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
