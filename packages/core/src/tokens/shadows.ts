/**
 * memo-ui Shadow Tokens
 * Based on the Memo Labs portfolio: flat, no shadows. Structure comes from
 * 1px hairlines (`--line`) and whitespace. `none` is the only elevation.
 */

export const shadows = {
  none: 'none',
  xs: 'none',
  sm: 'none',
  base: 'none',
  md: 'none',
  lg: 'none',
  xl: 'none',
  '2xl': 'none',
  inner: 'none',
} as const;

export type Shadows = typeof shadows;

// CSS custom properties
export const shadowCssVars = {
  '--shadow-none': shadows.none,
  '--shadow-xs': shadows.xs,
  '--shadow-sm': shadows.sm,
  '--shadow-base': shadows.base,
  '--shadow-md': shadows.md,
  '--shadow-lg': shadows.lg,
  '--shadow-xl': shadows.xl,
  '--shadow-2xl': shadows['2xl'],
  '--shadow-inner': shadows.inner,
} as const;
