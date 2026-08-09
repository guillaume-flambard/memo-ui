"use client";

/**
 * memo-ui Alert — inline status banner with optional dismiss.
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export type AlertTone = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual / semantic tone. `@default default` */
  tone?: AlertTone;
  /** Optional title above the body. */
  title?: string;
  /** Shows a dismiss control. `@default false` */
  dismissible?: boolean;
  /** Called when dismiss is activated. */
  onDismiss?: () => void;
}

const toneStyles: Record<AlertTone, string> = {
  default:
    'bg-[var(--alert-bg-default)] text-[var(--alert-fg-default)] border-[var(--alert-border-default)]',
  success:
    'bg-[var(--alert-bg-success)] text-[var(--alert-fg-success)] border-[var(--alert-border-success)]',
  warning:
    'bg-[var(--alert-bg-warning)] text-[var(--alert-fg-warning)] border-[var(--alert-border-warning)]',
  error:
    'bg-[var(--alert-bg-error)] text-[var(--alert-fg-error)] border-[var(--alert-border-error)]',
  info: 'bg-[var(--alert-bg-info)] text-[var(--alert-fg-info)] border-[var(--alert-border-info)]',
};

/**
 * Inline status banner. Uses `role="alert"` for `error` / `warning`, otherwise `status`.
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      tone = 'default',
      title,
      dismissible = false,
      onDismiss,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const assertive = tone === 'error' || tone === 'warning';

    return (
      <div
        ref={ref}
        role={assertive ? 'alert' : 'status'}
        className={cn(
          'relative flex w-full gap-3 rounded-none border px-4 py-3 text-sm',
          toneStyles[tone],
          className
        )}
        {...props}
      >
        <div className="min-w-0 flex-1">
          {title ? <p className="font-semibold leading-snug">{title}</p> : null}
          {children ? (
            <div className={cn(title && 'mt-1', 'leading-relaxed opacity-95')}>{children}</div>
          ) : null}
        </div>
        {dismissible ? (
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss"
            className={cn(
              'shrink-0 rounded-none px-1.5 text-xs opacity-70 transition-opacity',
              'hover:opacity-100',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]'
            )}
          >
            ✕
          </button>
        ) : null}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
