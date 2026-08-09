"use client";

/**
 * memo-ui Modal — Radix Dialog for focus trap / a11y; chrome from tokens.
 */

import React, { forwardRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '@memo-ui/utils';
import { Button } from './button';

export const ModalRoot = Dialog.Root;
export const ModalTrigger = Dialog.Trigger;
export const ModalClose = Dialog.Close;
export const ModalPortal = Dialog.Portal;

export interface ModalProps {
  /** Controlled open state. */
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Element that opens the modal (`asChild` friendly). */
  trigger?: React.ReactNode;
  /** Dialog title (required for a11y — also set via ModalTitle). */
  title: React.ReactNode;
  /** Optional description. */
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** Footer actions. Defaults to a Close button if omitted. */
  footer?: React.ReactNode;
  /** Content className. */
  className?: string;
}

/**
 * Accessible modal dialog. Uses Radix Dialog for behavior; visuals are tokens.
 * Prefer composing ModalRoot / ModalContent for advanced layouts.
 */
export function Modal({
  open,
  defaultOpen,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  footer,
  className,
}: ModalProps) {
  return (
    <Dialog.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {trigger ? <Dialog.Trigger asChild>{trigger}</Dialog.Trigger> : null}
      <ModalContent className={className} title={title} description={description} footer={footer}>
        {children}
      </ModalContent>
    </Dialog.Root>
  );
}

Modal.displayName = 'Modal';

export interface ModalContentProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Dialog.Content>, 'title'> {
  title: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
}

export const ModalContent = forwardRef<
  React.ElementRef<typeof Dialog.Content>,
  ModalContentProps
>(({ className, title, description, footer, children, ...props }, ref) => (
  <Dialog.Portal>
    <Dialog.Overlay
      className={cn(
        'fixed inset-0 z-50 bg-[var(--modal-overlay)]',
        'data-[state=open]:animate-[fade-in_var(--duration-micro)_var(--ease-out-expo)]',
        'data-[state=closed]:animate-[fade-out_var(--duration-micro)_var(--ease-out-expo)]'
      )}
    />
    <Dialog.Content
      ref={ref}
      {...(description ? {} : { 'aria-describedby': undefined })}
      className={cn(
        'fixed left-1/2 top-1/2 z-50 w-[min(100%-2rem,28rem)] -translate-x-1/2 -translate-y-1/2',
        'rounded-none border border-[var(--modal-border)] bg-[var(--modal-bg)] p-5',
        'focus:outline-none',
        'data-[state=open]:animate-[modal-in_var(--duration-micro)_var(--ease-out-expo)]',
        className
      )}
      {...props}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Dialog.Title className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-encre)]">
            {title}
          </Dialog.Title>
          {description ? (
            <Dialog.Description className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink3)]">
              {description}
            </Dialog.Description>
          ) : null}
        </div>
        <Dialog.Close asChild>
          <Button variant="ghost" size="sm" aria-label="Close" className="shrink-0 px-2">
            ✕
          </Button>
        </Dialog.Close>
      </div>
      {children ? <div className="text-sm text-[var(--color-encre)]">{children}</div> : null}
      <div className="mt-5 flex justify-end gap-2">
        {footer ?? (
          <Dialog.Close asChild>
            <Button variant="secondary">Close</Button>
          </Dialog.Close>
        )}
      </div>
    </Dialog.Content>
  </Dialog.Portal>
));

ModalContent.displayName = 'ModalContent';

export const ModalTitle = Dialog.Title;
export const ModalDescription = Dialog.Description;
