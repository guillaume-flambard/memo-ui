"use client";

/**
 * memo-ui Link — text link styled with tokens. Renders as native `<a>`.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Opens in a new tab with `rel="noopener noreferrer"`.
   * `@default false`
   */
  external?: boolean;
  /** Underline style. `@default hover` */
  underline?: 'always' | 'hover' | 'none';
}

const underlineStyles = {
  always: 'underline underline-offset-4 decoration-[var(--link-underline)]',
  hover: 'no-underline hover:underline hover:underline-offset-4 hover:decoration-[var(--link-underline)]',
  none: 'no-underline',
} as const;

/** Inline text link. Prefer for navigation and in-copy references. */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ external = false, underline = 'hover', className, children, target, rel, ...props }, ref) => {
    const resolvedTarget = external ? target ?? '_blank' : target;
    const resolvedRel = external
      ? rel ?? 'noopener noreferrer'
      : rel;

    return (
      <a
        ref={ref}
        target={resolvedTarget}
        rel={resolvedRel}
        className={cn(
          'inline font-medium text-[var(--link-fg)]',
          'transition-[color,opacity,text-decoration-color] duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]',
          'hover:text-[var(--link-fg-hover)]',
          'focus:outline-none focus-visible:rounded-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)]',
          underlineStyles[underline],
          className
        )}
        {...props}
      >
        {children}
        {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>
    );
  }
);

Link.displayName = 'Link';
