"use client";

/**
 * memo-ui Breadcrumb — nav landmark with list + separators.
 * Current page uses `aria-current="page"`.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'nav'> {
  /** Accessible name for the landmark. `@default Breadcrumb` */
  label?: string;
}

/** Breadcrumb navigation landmark. */
export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ label = 'Breadcrumb', className, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label={label}
        className={cn('w-full', className)}
        {...props}
      >
        {children}
      </nav>
    );
  }
);
Breadcrumb.displayName = 'Breadcrumb';

export type BreadcrumbListProps = React.OlHTMLAttributes<HTMLOListElement>;

/** Ordered list of breadcrumb items. */
export const BreadcrumbList = forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        'flex flex-wrap items-center gap-1.5 text-sm text-[var(--breadcrumb-fg)]',
        className
      )}
      {...props}
    />
  )
);
BreadcrumbList.displayName = 'BreadcrumbList';

export type BreadcrumbItemProps = React.LiHTMLAttributes<HTMLLIElement>;

/** Single crumb wrapper. */
export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn('inline-flex items-center gap-1.5', className)} {...props} />
  )
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

export type BreadcrumbLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

/** Navigable crumb link. */
export const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        'transition-colors duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]',
        'hover:text-[var(--breadcrumb-fg-current)]',
        'focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]',
        className
      )}
      {...props}
    />
  )
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

export type BreadcrumbPageProps = React.HTMLAttributes<HTMLSpanElement>;

/** Current page crumb (non-interactive). Sets `aria-current="page"`. */
export const BreadcrumbPage = forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      aria-current="page"
      className={cn('font-medium text-[var(--breadcrumb-fg-current)]', className)}
      {...props}
    />
  )
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

export type BreadcrumbSeparatorProps = React.HTMLAttributes<HTMLSpanElement>;

/** Visual separator between crumbs (hidden from AT). */
export const BreadcrumbSeparator = forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      role="presentation"
      aria-hidden
      className={cn('text-[var(--breadcrumb-separator)] select-none', className)}
      {...props}
    >
      {children ?? '/'}
    </span>
  )
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';
