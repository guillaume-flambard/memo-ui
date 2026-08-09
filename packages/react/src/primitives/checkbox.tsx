'use client';

/**
 * memo-ui Checkbox — native control with token chrome.
 */

import React, { forwardRef, useId } from 'react';
import { cn } from '@memo-ui/utils';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Visible label text. Prefer this or `aria-label`. */
  label?: React.ReactNode;
  /** Control size. `@default md` */
  size?: 'sm' | 'md';
  /** Invalid state — sets `aria-invalid`. `@default false` */
  invalid?: boolean;
}

const boxSize = {
  sm: 'size-4 rounded-none',
  md: 'size-5 rounded-none',
} as const;

const iconSize = {
  sm: 'size-2.5',
  md: 'size-3',
} as const;

/**
 * Binary choice control. Always pair with `label` or an accessible name.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      size = 'md',
      invalid = false,
      className,
      id: idProp,
      disabled,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const uid = useId();
    const id = idProp ?? uid;

    const control = (
      <span className={cn('relative inline-flex shrink-0', boxSize[size])}>
        <input
          ref={ref}
          id={id}
          type="checkbox"
          disabled={disabled}
          aria-invalid={ariaInvalid ?? (invalid ? true : undefined)}
          className={cn(
            'peer absolute inset-0 z-10 m-0 size-full cursor-pointer appearance-none opacity-0',
            'disabled:cursor-not-allowed',
            !label && className
          )}
          {...props}
        />
        {/* Visual siblings of `.peer` so peer-checked:* works */}
        <span
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 border',
            'border-[var(--checkbox-border)] bg-[var(--checkbox-bg)]',
            'transition-[border-color,background-color] duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]',
            'peer-checked:border-[var(--checkbox-border-checked)] peer-checked:bg-[var(--checkbox-bg-checked)]',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-ring)] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[var(--color-paper)]',
            'peer-disabled:opacity-50',
            'peer-aria-invalid:border-[var(--color-error)]',
            boxSize[size]
          )}
        />
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 m-auto text-[var(--checkbox-fg-checked)] opacity-0',
            'transition-opacity duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]',
            'peer-checked:opacity-100',
            iconSize[size]
          )}
        >
          <polyline
            points="3.5 8.5 6.5 11.5 12.5 4.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );

    // Nested label only — do not also set htmlFor (avoids double-toggle).
    if (!label) {
      return control;
    }

    return (
      <label
        className={cn(
          'inline-flex cursor-pointer items-center gap-2.5 text-sm text-[var(--color-encre)]',
          'has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50',
          className
        )}
      >
        {control}
        <span className="select-none leading-none">{label}</span>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
