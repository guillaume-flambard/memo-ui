/**
 * memo-ui Shadow Tokens
 * Subtle shadows for elevation (largo-ai inspired)
 */

export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  '2xl': '0 40px 80px -20px rgba(0, 0, 0, 0.3)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',

  // Special shadows for memo-ui
  card: '0 4px 20px rgba(14, 19, 32, 0.12)',
  hover: '0 8px 30px rgba(14, 19, 32, 0.1)',
  glowOcre: '0 0 20px rgba(242, 135, 13, 0.3)',
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
  '--shadow-card': shadows.card,
  '--shadow-hover': shadows.hover,
  '--shadow-glow-ocre': shadows.glowOcre,
} as const;
