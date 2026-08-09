"use client";

/**
 * memo-ui Select — Radix Select for listbox behavior; chrome from tokens.
 */

import React, { forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cn } from '@memo-ui/utils';

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;
export const SelectGroup = SelectPrimitive.Group;
export const SelectPortal = SelectPrimitive.Portal;

export const SelectTrigger = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex h-11 w-full items-center justify-between gap-2 rounded-none border bg-[var(--select-trigger-bg)] px-3.5 text-sm',
      'border-[var(--select-trigger-border)] text-[var(--select-trigger-fg)]',
      'transition-[border-color] duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[placeholder]:text-[var(--color-ink3)]',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon className="text-[var(--color-ink3)]" aria-hidden>
      ▾
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = 'SelectTrigger';

export const SelectContent = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      position={position}
      className={cn(
        'z-50 max-h-72 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-none border',
        'border-[var(--select-content-border)] bg-[var(--select-content-bg)]',
        'data-[state=open]:animate-[fade-in_var(--duration-micro)_var(--ease-out-expo)]',
        className
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = 'SelectContent';

export const SelectItem = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-pointer select-none items-center rounded-none px-3 py-2 text-sm outline-none',
      'text-[var(--select-item-fg)]',
      'data-[highlighted]:bg-[var(--select-item-bg-highlighted)] data-[highlighted]:text-[var(--select-item-fg-highlighted)]',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = 'SelectItem';

export const SelectLabel = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('px-3 py-1.5 text-xs font-medium text-[var(--color-ink3)]', className)}
    {...props}
  />
));
SelectLabel.displayName = 'SelectLabel';

export const SelectSeparator = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('my-1 h-px bg-[var(--color-line)]', className)}
    {...props}
  />
));
SelectSeparator.displayName = 'SelectSeparator';
