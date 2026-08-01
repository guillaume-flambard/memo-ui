"use client";

/**
 * memo-ui Toast — custom provider + viewport (no Radix). Opacity/transform only.
 */

import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { cn } from '@memo-ui/utils';

export type ToastTone = 'default' | 'success' | 'warning' | 'error';

export type ToastItem = {
  id: string;
  title: string;
  description?: string;
  tone?: ToastTone;
  duration?: number;
};

type ToastContextValue = {
  toasts: ToastItem[];
  toast: (input: Omit<ToastItem, 'id'> & { id?: string }) => string;
  dismiss: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

let toastCount = 0;

export interface ToastProviderProps {
  children: React.ReactNode;
  /** Max visible toasts. `@default 3` */
  max?: number;
}

/** Provides toast state. Mount once near the app root with `ToastViewport`. */
export function ToastProvider({ children, max = 3 }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (input: Omit<ToastItem, 'id'> & { id?: string }) => {
      const id = input.id ?? `toast-${++toastCount}`;
      setToasts((prev) => [{ ...input, id, tone: input.tone ?? 'default' }, ...prev].slice(0, max));
      return id;
    },
    [max]
  );

  const value = useMemo(() => ({ toasts, toast, dismiss }), [toasts, toast, dismiss]);

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

/** Access toast / dismiss. Must be under `ToastProvider`. */
export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return ctx;
}

const toneBorder: Record<ToastTone, string> = {
  default: 'border-[var(--toast-border)]',
  success: 'border-[var(--color-success-ink)]',
  warning: 'border-[var(--color-warning-ink)]',
  error: 'border-[var(--color-error-ink)]',
};

export interface ToastViewportProps extends React.HTMLAttributes<HTMLDivElement> {}

/** Renders active toasts. Place once under `ToastProvider`. */
export const ToastViewport = forwardRef<HTMLDivElement, ToastViewportProps>(
  ({ className, ...props }, ref) => {
    const { toasts, dismiss } = useToast();

    return (
      <div
        ref={ref}
        className={cn(
          'pointer-events-none fixed bottom-4 right-4 z-[100] flex w-full max-w-sm flex-col gap-2',
          className
        )}
        {...props}
      >
        {toasts.map((item) => (
          <ToastCard key={item.id} item={item} onDismiss={() => dismiss(item.id)} />
        ))}
      </div>
    );
  }
);

ToastViewport.displayName = 'ToastViewport';

function ToastCard({ item, onDismiss }: { item: ToastItem; onDismiss: () => void }) {
  const duration = item.duration ?? 4000;

  useEffect(() => {
    if (duration <= 0) return;
    const t = window.setTimeout(onDismiss, duration);
    return () => window.clearTimeout(t);
  }, [duration, onDismiss]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'pointer-events-auto rounded-xl border bg-[var(--toast-bg)] px-4 py-3 shadow-[var(--shadow-card)]',
        'text-[var(--toast-fg)]',
        'animate-[toast-in_var(--duration-micro)_var(--ease-out-expo)]',
        toneBorder[item.tone ?? 'default']
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold leading-snug">{item.title}</p>
          {item.description ? (
            <p className="mt-1 text-xs leading-relaxed text-[var(--color-ink2)]">
              {item.description}
            </p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={onDismiss}
          className="shrink-0 rounded-md px-1.5 text-xs text-[var(--color-ink3)] transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
