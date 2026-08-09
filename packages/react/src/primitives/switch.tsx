'use client';

/**
 * memo-ui Switch — binary toggle with role="switch".
 * Nested label only when `label` is set — never htmlFor + nest (avoids double-toggle).
 */

import React, { forwardRef, useId } from 'react';
import { cn } from '@memo-ui/utils';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Visible label text. Prefer this or `aria-label`. */
  label?: React.ReactNode;
  /** Track size. `@default md` */
  size?: 'sm' | 'md';
  /** Invalid state — sets `aria-invalid`. `@default false` */
  invalid?: boolean;
}

const trackSize = {
  sm: 'h-5 w-8',
  md: 'h-6 w-10',
} as const;

const thumbSize = {
  sm: 'size-3.5 peer-checked:translate-x-3.5',
  md: 'size-4 peer-checked:translate-x-4.5',
} as const;

/**
 * On/off toggle. Uses a native checkbox with `role="switch"`.
 * Pair with `label` or an accessible name.
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      size = 'md',
      invalid = false,
      className,
      id: idProp,
      disabled,
      checked,
      defaultChecked,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const uid = useId();
    const id = idProp ?? uid;

    const control = (
      <span className={cn('relative inline-flex shrink-0', trackSize[size])}>
        <input
          ref={ref}
          id={id}
          type="checkbox"
          role="switch"
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
          aria-invalid={ariaInvalid ?? (invalid ? true : undefined)}
          className={cn(
            'peer absolute inset-0 z-10 m-0 size-full cursor-pointer appearance-none opacity-0',
            'disabled:cursor-not-allowed',
            !label && className
          )}
          {...props}
        />
        <span
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 rounded-full border',
            'border-[var(--switch-border)] bg-[var(--switch-track)]',
            'transition-[background-color,border-color] duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]',
            'peer-checked:border-[var(--switch-track-checked)] peer-checked:bg-[var(--switch-track-checked)]',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-ring)] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[var(--color-paper)]',
            'peer-disabled:opacity-50',
            'peer-aria-invalid:border-[var(--color-error)]',
            trackSize[size]
          )}
        />
        <span
          aria-hidden
          className={cn(
            'pointer-events-none absolute left-0.5 top-1/2 -translate-y-1/2 rounded-full',
            'bg-[var(--switch-thumb)]',
            'transition-transform duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]',
            'peer-disabled:opacity-50',
            thumbSize[size]
          )}
        />
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

Switch.displayName = 'Switch';
