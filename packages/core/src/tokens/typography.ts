/**
 * memo-ui Typography Tokens
 * Based on the Memo Labs portfolio: one condensed grotesque (Oswald) for display
 * and body, with a mono for kickers/meta. Uppercase is a CSS decision, not a
 * content transform.
 */

export const typography = {
  // Font families
  fontFamily: {
    display: 'Oswald, "Archivo Narrow", system-ui, sans-serif',
    sans: 'Oswald, "Archivo Narrow", system-ui, sans-serif',
    mono: '"Geist Mono", ui-monospace, monospace',
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
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Line heights
  lineHeight: {
    tight: '1.1',
    snug: '1.25',
    normal: '1.4',
    relaxed: '1.6',
    loose: '2',
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.02em',
    tight: '0em',
    normal: '0em',
    wide: '0.04em',
    wider: '0.09em',
    widest: '0.18em', // For mono kickers / eyebrows
  },
} as const;

export type Typography = typeof typography;

// CSS custom properties
export const typographyCssVars = {
  '--font-display': typography.fontFamily.display,
  '--font-sans': typography.fontFamily.sans,
  '--font-mono': typography.fontFamily.mono,
} as const;
