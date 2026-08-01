"use client";

/**
 * memo-ui Card — surface container with optional elevation.
 * Compose with CardHeader, CardTitle, CardDescription, CardContent, CardFooter.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Border / shadow treatment. `@default default` */
  variant?: 'default' | 'outlined' | 'elevated';
}

const cardVariants = {
  default: 'border-[var(--color-line)] bg-[var(--color-surface)] shadow-none',
  outlined: 'border-[var(--color-line2)] bg-[var(--color-surface)] shadow-none',
  elevated:
    'border-[var(--color-line)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]',
} as const;

/** Bordered surface. Prefer for interactive groupings, not decorative chrome alone. */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'overflow-hidden rounded-2xl border',
          'transition-[transform,box-shadow] duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]',
          'hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]',
          cardVariants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/** Top block: title + description stack. */
export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-1.5 px-5 pt-5', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

/** Card heading (`h3`). */
export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-encre)]',
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

/** Supporting text under the title. */
export const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm leading-relaxed text-[var(--color-ink3)]', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

/** Main body padding. */
export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('px-5 py-4', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

/** Bottom actions row. */
export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center justify-end gap-2 px-5 pb-5', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';
