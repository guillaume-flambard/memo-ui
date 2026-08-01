/**
 * memo-ui Typography Tokens
 * Inspired by largo-ai: Space Grotesk (display) + Geist (sans) + Geist Mono (mono)
 */

export const typography = {
  // Font families
  fontFamily: {
    display: 'Space Grotesk, system-ui, sans-serif',
    sans: 'Geist, system-ui, -apple-system, sans-serif',
    mono: 'Geist Mono, ui-monospace, monospace',
  },

  // Font sizes (clamp-based for fluidity)
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.25rem', // 20px
    xl: '1.5rem', // 24px
    '2xl': '2rem', // 32px
    '3xl': '2.5rem', // 40px
    '4xl': '3rem', // 48px
    '5xl': '4rem', // 64px
  },

  // Font weights
  fontWeight: {
    thin: '100',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Line heights
  lineHeight: {
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em', // For mono kickers
  },
} as const;

export type Typography = typeof typography;

// CSS custom properties
export const typographyCssVars = {
  '--font-display': typography.fontFamily.display,
  '--font-sans': typography.fontFamily.sans,
  '--font-mono': typography.fontFamily.mono,
} as const;
