'use client';

/**
 * memo-ui FormField — label + control slot + hint/error with a11y wiring.
 */

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useId,
} from 'react';
import { cn } from '@memo-ui/utils';
import { Label } from './label';

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visible field label. */
  label?: React.ReactNode;
  /**
   * Explicit control id. Auto-generated when omitted so Label `htmlFor`
   * and control `id` stay in sync.
   */
  htmlFor?: string;
  /** Helper text below the control (linked via `aria-describedby`). */
  hint?: React.ReactNode;
  /** Error message. Sets `aria-invalid` on the control and replaces hint visually. */
  error?: React.ReactNode;
  /** Required indicator on the label. `@default false` */
  required?: boolean;
  /**
   * Single control element (Input, Textarea, SelectTrigger, …).
   * Receives `id`, `aria-describedby`, and `aria-invalid` when applicable.
   */
  children: React.ReactElement;
}

type ControlA11yProps = {
  id?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean | 'true' | 'false';
};

/**
 * Composes Label + control + hint/error. Wires `htmlFor` / `id`,
 * `aria-describedby`, and `aria-invalid` onto the child control.
 */
export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      label,
      htmlFor: htmlForProp,
      hint,
      error,
      required = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const uid = useId();
    const controlId = htmlForProp ?? uid;
    const hintId = `${controlId}-hint`;
    const errorId = `${controlId}-error`;
    const describedBy = error ? errorId : hint ? hintId : undefined;
    const invalid = Boolean(error);

    const child = Children.only(children);
    const wired = isValidElement<ControlA11yProps>(child)
      ? cloneElement(child, {
          id: child.props.id ?? controlId,
          'aria-describedby':
            child.props['aria-describedby'] ?? describedBy,
          'aria-invalid':
            child.props['aria-invalid'] ?? (invalid ? true : undefined),
        })
      : child;

    return (
      <div
        ref={ref}
        className={cn('flex w-full flex-col gap-1.5', className)}
        {...props}
      >
        {label ? (
          <Label htmlFor={controlId} required={required}>
            {label}
          </Label>
        ) : null}
        {wired}
        {error ? (
          <p
            id={errorId}
            role="alert"
            className="text-xs text-[var(--form-field-error)]"
          >
            {error}
          </p>
        ) : hint ? (
          <p id={hintId} className="text-xs text-[var(--form-field-hint)]">
            {hint}
          </p>
        ) : null}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
