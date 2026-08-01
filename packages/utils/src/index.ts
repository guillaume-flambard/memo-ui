/**
 * memo-ui Utils
 * Core utilities for memo-ui components
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with clsx
 * Standard utility for conditional className composition
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Keyboard key codes for keyboard navigation
 */
export const keyboardKeys = {
  Enter: 'Enter',
  Escape: 'Escape',
  Space: ' ',
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  Tab: 'Tab',
  Home: 'Home',
  End: 'End',
} as const;

/**
 * Check if a key is a keyboard key
 */
export function isKeyboardKey(key: string): key is keyof typeof keyboardKeys {
  return Object.values(keyboardKeys).includes(key as any);
}
