"use client";

/**
 * memo-ui Input — single-line text field on paper/surface tokens.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Visual + a11y error treatment. When `error`, sets `aria-invalid`
   * unless overridden. `@default default`
   */
  variant?: 'default' | 'error';
}

const inputVariants = {
  default:
    'border-[var(--color-line)] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]',
  error:
    'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]',
} as const;

/**
 * Native `<input>` with memo-ui chrome.
 * Always provide an accessible name (`aria-label`, `aria-labelledby`, or `<label>`).
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      className,
      type = 'text',
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        aria-invalid={ariaInvalid ?? (variant === 'error' ? true : undefined)}
        className={cn(
          'flex h-11 w-full rounded-none border bg-[var(--color-surface)] px-3.5',
          'text-sm text-[var(--color-encre)] placeholder:text-[var(--color-ink3)]',
          'transition-[border-color] duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0',
          'disabled:cursor-not-allowed disabled:opacity-50',
          inputVariants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
