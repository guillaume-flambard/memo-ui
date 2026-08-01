'use client';

/**
 * memo-ui Label — accessible form label.
 * Use `htmlFor` to associate with a sibling control, or nest the control as a child.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Shows a required indicator (asterisk). Announce required on the control itself
   * via `aria-required` or the native `required` attribute.
   * `@default false`
   */
  required?: boolean;
}

/**
 * Form label. Prefer `htmlFor` + sibling control, or wrap the control as a child
 * (do not combine both for the same control — causes double activation on switches/checkboxes).
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ required = false, className, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1 text-sm font-medium text-[var(--label-fg)]',
          'peer-disabled:cursor-not-allowed peer-disabled:text-[var(--label-fg-disabled)]',
          'has-[:disabled]:cursor-not-allowed has-[:disabled]:text-[var(--label-fg-disabled)]',
          className
        )}
        {...props}
      >
        {children}
        {required ? (
          <span className="text-[var(--label-required)]" aria-hidden>
            *
          </span>
        ) : null}
      </label>
    );
  }
);

Label.displayName = 'Label';
