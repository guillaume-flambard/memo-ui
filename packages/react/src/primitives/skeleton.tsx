"use client";

/**
 * memo-ui Skeleton — loading placeholder with pulse (honors reduced motion).
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shape preset. `@default text` */
  variant?: 'text' | 'circular' | 'rectangular';
  /** Height/width preset for common slots. `@default md` */
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  text: {
    sm: 'h-3 w-24 rounded-md',
    md: 'h-4 w-40 rounded-md',
    lg: 'h-5 w-56 rounded-md',
  },
  circular: {
    sm: 'size-8 rounded-full',
    md: 'size-10 rounded-full',
    lg: 'size-14 rounded-full',
  },
  rectangular: {
    sm: 'h-16 w-full rounded-xl',
    md: 'h-24 w-full rounded-xl',
    lg: 'h-40 w-full rounded-2xl',
  },
} as const;

/**
 * Non-interactive loading placeholder. Pulse animation is suppressed under
 * `prefers-reduced-motion` via core CSS.
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant = 'text', size = 'md', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-hidden
        className={cn(
          'bg-[var(--skeleton-bg)]',
          'animate-[skeleton-pulse_1.4s_ease-in-out_infinite]',
          sizeStyles[variant][size],
          className
        )}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
