'use client';

/**
 * memo-ui Avatar — user image with initials fallback.
 */

import React, { forwardRef, useState } from 'react';
import { cn } from '@memo-ui/utils';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials when missing or on load error. */
  src?: string;
  /** Alt text for the image. Defaults to empty (decorative) when fallback shows. */
  alt?: string;
  /** Initials or short text when image is unavailable. */
  fallback?: string;
  /** Avatar diameter. `@default md` */
  size?: 'sm' | 'md' | 'lg';
}

const avatarSizes = {
  sm: 'size-8 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-14 text-base',
} as const;

function initialsFrom(fallback?: string): string {
  if (!fallback) return '?';
  const parts = fallback.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return `${parts[0]![0] ?? ''}${parts[1]![0] ?? ''}`.toUpperCase();
}

/**
 * Circular avatar. Shows `src` when it loads; otherwise renders `fallback` initials.
 */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt = '', fallback, size = 'md', className, ...props }, ref) => {
    const [failed, setFailed] = useState(false);
    const showImage = Boolean(src) && !failed;
    const initials = initialsFrom(fallback);

    return (
      <span
        ref={ref}
        className={cn(
          'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full',
          'border border-[var(--avatar-border)] bg-[var(--avatar-bg)]',
          'font-medium text-[var(--avatar-fg)]',
          'select-none',
          avatarSizes[size],
          className
        )}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt}
            className="size-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <span aria-hidden={!fallback} className="leading-none tracking-wide">
            {initials}
          </span>
        )}
      </span>
    );
  }
);

Avatar.displayName = 'Avatar';
