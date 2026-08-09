'use client';

/**
 * memo-ui Textarea — multi-line field matching Input chrome.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Visual + a11y error treatment. When `error`, sets `aria-invalid`
   * unless overridden. `@default default`
   */
  variant?: 'default' | 'error';
}

const textareaVariants = {
  default:
    'border-[var(--textarea-border)] focus:border-[var(--textarea-border-focus)] focus:ring-[var(--textarea-border-focus)]',
  error:
    'border-[var(--textarea-border-error)] focus:border-[var(--textarea-border-error)] focus:ring-[var(--textarea-border-error)]',
} as const;

/**
 * Native `<textarea>` with memo-ui chrome.
 * Always provide an accessible name (`aria-label`, `aria-labelledby`, or `<Label>`).
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = 'default',
      className,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    return (
      <textarea
        ref={ref}
        aria-invalid={ariaInvalid ?? (variant === 'error' ? true : undefined)}
        className={cn(
          'flex min-h-24 w-full rounded-none border bg-[var(--textarea-bg)] px-3.5 py-2.5',
          'text-sm text-[var(--textarea-fg)] placeholder:text-[var(--textarea-placeholder)]',
          'transition-[border-color] duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'resize-y',
          textareaVariants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
