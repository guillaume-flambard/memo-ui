"use client";

/**
 * memo-ui Tooltip — Radix Tooltip for behavior/a11y; chrome from tokens.
 */

import React, { forwardRef } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@memo-ui/utils';

export const TooltipProvider = TooltipPrimitive.Provider;

export interface TooltipProps {
  /** Trigger element (must accept a ref — wrap natives if needed). */
  children: React.ReactElement;
  /** Tooltip content. */
  content: React.ReactNode;
  /** Preferred side. `@default top` */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /** Delay before open (ms). `@default 200` */
  delayDuration?: number;
  /** Open state (controlled). */
  open?: boolean;
  /** Default open (uncontrolled). */
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Content className. */
  className?: string;
}

/** Hover/focus hint. Wrap interactive triggers; keep content short. */
export function Tooltip({
  children,
  content,
  side = 'top',
  delayDuration = 200,
  open,
  defaultOpen,
  onOpenChange,
  className,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root
      delayDuration={delayDuration}
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          sideOffset={6}
          className={cn(
            'z-50 max-w-xs rounded-lg border px-2.5 py-1.5 text-xs font-medium',
            'border-[var(--tooltip-border)] bg-[var(--tooltip-bg)] text-[var(--tooltip-fg)]',
            'shadow-[var(--shadow-card)]',
            'data-[state=delayed-open]:animate-[fade-in_var(--duration-micro)_var(--ease-out-expo)]',
            'data-[state=closed]:animate-[fade-out_var(--duration-micro)_var(--ease-out-expo)]',
            className
          )}
        >
          {content}
          <TooltipPrimitive.Arrow className="fill-[var(--tooltip-bg)]" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}

Tooltip.displayName = 'Tooltip';

/** Optional low-level Content export for composition. */
export const TooltipContent = forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 max-w-xs rounded-lg border px-2.5 py-1.5 text-xs font-medium',
      'border-[var(--tooltip-border)] bg-[var(--tooltip-bg)] text-[var(--tooltip-fg)]',
      'shadow-[var(--shadow-card)]',
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = 'TooltipContent';

export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipRoot = TooltipPrimitive.Root;
