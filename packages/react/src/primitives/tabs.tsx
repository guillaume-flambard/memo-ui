"use client";

/**
 * memo-ui Tabs — Radix Tabs for keyboard/a11y; chrome from tokens.
 */

import React, { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@memo-ui/utils';

export const Tabs = TabsPrimitive.Root;

export const TabsList = forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex items-center gap-1 rounded-xl border border-[var(--tabs-list-border)] bg-[var(--tabs-list-bg)] p-1',
      className
    )}
    {...props}
  />
));
TabsList.displayName = 'TabsList';

export const TabsTrigger = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium',
      'text-[var(--tabs-trigger-fg)]',
      'transition-[background-color,color,transform] duration-[var(--duration-micro)] ease-[var(--ease-out-expo)]',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=active]:bg-[var(--tabs-trigger-bg-active)] data-[state=active]:text-[var(--tabs-trigger-fg-active)]',
      'data-[state=active]:shadow-sm',
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)]',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = 'TabsContent';
