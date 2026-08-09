/**
 * memo-ui Border Radius Tokens
 * Based on the Memo Labs portfolio: flat. Structure comes from 1px hairlines,
 * not corners. `full` stays available for pill badges/avatars only.
 */

export const radius = {
  none: '0',
  sm: '0', // 0px
  base: '0', // 0px
  md: '0', // 0px
  lg: '0', // 0px
  xl: '0', // 0px
  '2xl': '0', // 0px
  '3xl': '0', // 0px
  full: '9999px', // Pill (badges, avatars)
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
