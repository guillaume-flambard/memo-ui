"use client";

/**
 * memo-ui Pagination — prev/next + page controls. Reuses Button chrome.
 */

import React, { forwardRef, useMemo } from 'react';
import { cn } from '@memo-ui/utils';
import { Button } from './button';

export interface PaginationProps extends Omit<React.ComponentPropsWithoutRef<'nav'>, 'onChange'> {
  /** 1-based current page. */
  page: number;
  /** Total number of pages (>= 1). */
  pageCount: number;
  /** Called when the user selects a page. */
  onPageChange?: (page: number) => void;
  /** Accessible name. `@default Pagination` */
  label?: string;
  /** Max numbered buttons around the current page. `@default 5` */
  siblingCount?: number;
}

function buildRange(page: number, pageCount: number, siblingCount: number): (number | 'ellipsis')[] {
  const totalSlots = siblingCount * 2 + 1;
  if (pageCount <= totalSlots + 2) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  const start = Math.max(2, page - siblingCount);
  const end = Math.min(pageCount - 1, page + siblingCount);
  const items: (number | 'ellipsis')[] = [1];

  if (start > 2) items.push('ellipsis');
  for (let i = start; i <= end; i += 1) items.push(i);
  if (end < pageCount - 1) items.push('ellipsis');
  items.push(pageCount);
  return items;
}

/** Page navigation with previous / next and numbered controls. */
export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      page,
      pageCount,
      onPageChange,
      label = 'Pagination',
      siblingCount = 1,
      className,
      ...props
    },
    ref
  ) => {
    const safeCount = Math.max(1, pageCount);
    const safePage = Math.min(Math.max(1, page), safeCount);
    const items = useMemo(
      () => buildRange(safePage, safeCount, siblingCount),
      [safePage, safeCount, siblingCount]
    );

    return (
      <nav
        ref={ref}
        aria-label={label}
        className={cn('flex items-center gap-1 text-[var(--pagination-fg)]', className)}
        {...props}
      >
        <Button
          type="button"
          variant="ghost"
          size="sm"
          disabled={safePage <= 1}
          aria-label="Previous page"
          onClick={() => onPageChange?.(safePage - 1)}
        >
          Previous
        </Button>
        <ul className="flex items-center gap-1">
          {items.map((item, index) =>
            item === 'ellipsis' ? (
              <li key={`e-${index}`} className="px-1 text-[var(--pagination-fg-muted)]" aria-hidden>
                …
              </li>
            ) : (
              <li key={item}>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  aria-label={`Page ${item}`}
                  aria-current={item === safePage ? 'page' : undefined}
                  className={cn(
                    item === safePage &&
                      'bg-[var(--pagination-bg-active)] text-[var(--pagination-fg-active)] hover:bg-[var(--pagination-bg-active)]'
                  )}
                  onClick={() => onPageChange?.(item)}
                >
                  {item}
                </Button>
              </li>
            )
          )}
        </ul>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          disabled={safePage >= safeCount}
          aria-label="Next page"
          onClick={() => onPageChange?.(safePage + 1)}
        >
          Next
        </Button>
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';
