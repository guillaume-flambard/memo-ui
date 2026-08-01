"use client";

/**
 * memo-ui Radio — native radio + optional RadioGroup for shared name/value.
 */

import React, { createContext, forwardRef, useContext, useId } from 'react';
import { cn } from '@memo-ui/utils';

type RadioGroupContextValue = {
  name: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
};

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shared `name` for native radios. Auto-generated if omitted. */
  name?: string;
  /** Controlled selected value. */
  value?: string;
  /** Called when selection changes. */
  onValueChange?: (value: string) => void;
  /** Disable all radios in the group. `@default false` */
  disabled?: boolean;
  /** Accessible name for the group. */
  'aria-label'?: string;
  /** Orientation of the stack. `@default vertical` */
  orientation?: 'vertical' | 'horizontal';
}

/** Groups related radios; provides shared `name` and optional controlled value. */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name: nameProp,
      value,
      onValueChange,
      disabled = false,
      orientation = 'vertical',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const uid = useId();
    const name = nameProp ?? uid;

    return (
      <RadioGroupContext.Provider value={{ name, value, onValueChange, disabled }}>
        <div
          ref={ref}
          role="radiogroup"
          className={cn(
            'flex gap-3',
            orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap items-center',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Option value (required for grouping). */
  value: string;
  /** Visible label. Prefer this or `aria-label`. */
  label?: React.ReactNode;
  /** Control size. `@default md` */
  size?: 'sm' | 'md';
}

const sizeMap = {
  sm: 'size-4',
  md: 'size-5',
} as const;

/** Single radio option. Use inside `RadioGroup` when possible. */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      size = 'md',
      className,
      id: idProp,
      disabled: disabledProp,
      name: nameProp,
      value,
      checked: checkedProp,
      onChange,
      ...props
    },
    ref
  ) => {
    const uid = useId();
    const id = idProp ?? uid;
    const group = useContext(RadioGroupContext);
    const name = nameProp ?? group?.name;
    const disabled = disabledProp ?? group?.disabled;
    const checked =
      checkedProp ?? (group?.value !== undefined ? group.value === value : undefined);

    const input = (
      <input
        ref={ref}
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={(event) => {
          onChange?.(event);
          if (event.target.checked) {
            group?.onValueChange?.(value);
          }
        }}
        className={cn(
          'shrink-0 appearance-none rounded-full border bg-[var(--radio-bg)]',
          'border-[var(--radio-border)]',
          'checked:border-[var(--radio-border-checked)]',
          'relative',
          'before:absolute before:inset-[22%] before:rounded-full before:bg-[var(--radio-dot)] before:opacity-0 before:content-[\'\']',
          'checked:before:opacity-100',
          'transition-[border-color,transform] duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          sizeMap[size],
          !label && className
        )}
        {...props}
      />
    );

    if (!label) {
      return input;
    }

    // Nested label only — do not also set htmlFor (avoids double-toggle).
    return (
      <label
        className={cn(
          'inline-flex cursor-pointer items-center gap-2.5 text-sm text-[var(--color-encre)]',
          'has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50',
          className
        )}
      >
        {input}
        <span className="select-none leading-none">{label}</span>
      </label>
    );
  }
);

Radio.displayName = 'Radio';
