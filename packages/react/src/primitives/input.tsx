/**
 * memo-ui Input
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'error';
}

const inputVariants = {
  default:
    'border-[var(--color-line)] focus:border-[var(--color-ocre)] focus:ring-[var(--color-ocre)]',
  error:
    'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]',
} as const;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'default', className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          'flex h-11 w-full rounded-xl border bg-[var(--color-surface)] px-3.5',
          'text-sm text-[var(--color-encre)] placeholder:text-[var(--color-ink3)]',
          'transition-[border-color,box-shadow] duration-150 ease-out',
          'focus:outline-none focus:ring-2 focus:ring-offset-0',
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
