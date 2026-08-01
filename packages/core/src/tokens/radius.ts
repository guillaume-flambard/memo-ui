/**
 * memo-ui Border Radius Tokens
 * Inspired by largo-ai: 8, 12, 16, 999 (pill)
 */

export const radius = {
  none: '0',
  sm: '0.125rem', // 2px
  base: '0.25rem', // 4px
  md: '0.375rem', // 6px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px', // Fully rounded
} as const;

export type Radius = typeof radius;

// CSS custom properties
export const radiusCssVars = {
  '--radius-none': radius.none,
  '--radius-sm': radius.sm,
  '--radius-base': radius.base,
  '--radius-md': radius.md,
  '--radius-lg': radius.lg,
  '--radius-xl': radius.xl,
  '--radius-2xl': radius['2xl'],
  '--radius-3xl': radius['3xl'],
  '--radius-full': radius.full,
} as const;
