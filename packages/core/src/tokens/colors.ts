/**
 * memo-ui Color Tokens
 * Based on the Memo Labs portfolio / lab design language:
 * warm paper + ink, a single terracotta accent used sparingly as punctuation.
 */

export const colors = {
  // Base colors (portfolio heritage)
  paper: '#FAF9F7', // Fond de page
  encre: '#16130F', // Texte principal
  ink2: '#6B6055', // Texte secondaire / muted
  ink3: '#8A8078', // Tertiary / meta — AA on paper

  // Line colors (1px hairlines — structure instead of shadows)
  line: '#E7E2DA',
  line2: '#DCD5CC',

  // Accent unique (rare punctuation — portfolio `--accent`)
  accent: '#AD4C16', // Fill / pivot
  accentDeep: '#8A3D10', // Hover / gradient foot
  accent2: '#E58A4A', // Second gradient stop
  accentInk: '#7A360E', // Accent as text/icon on paper or soft wash (WCAG AA)
  accentSoft: '#F4E4D8', // Opaque wash (axe-friendly; ~12% accent on paper)
  onAccent: '#FFFFFF', // Text on solid accent

  // Surface colors
  surface: '#FFFFFF',
  surface2: '#F5F2EE',

  // Semantic fills + AA ink on soft washes
  ok: '#3F7D53',
  success: '#3F7D53',
  successInk: '#2C5A3B',
  warning: '#C0821F',
  warningInk: '#8A5A10',
  error: '#B3452C',
  errorInk: '#7E2E1B',
  info: '#5A6B8C',
  infoInk: '#3D4A63',
} as const;

export type Colors = typeof colors;

// CSS custom properties for runtime usage
export const colorCssVars = {
  '--color-paper': colors.paper,
  '--color-encre': colors.encre,
  '--color-ink2': colors.ink2,
  '--color-ink3': colors.ink3,
  '--color-line': colors.line,
  '--color-line2': colors.line2,
  '--color-accent': colors.accent,
  '--color-accent-deep': colors.accentDeep,
  '--color-accent2': colors.accent2,
  '--color-accent-ink': colors.accentInk,
  '--color-accent-soft': colors.accentSoft,
  '--color-on-accent': colors.onAccent,
  '--color-surface': colors.surface,
  '--color-surface2': colors.surface2,
  '--color-ok': colors.ok,
  '--color-success': colors.success,
  '--color-success-ink': colors.successInk,
  '--color-warning': colors.warning,
  '--color-warning-ink': colors.warningInk,
  '--color-error': colors.error,
  '--color-error-ink': colors.errorInk,
  '--color-info': colors.info,
  '--color-info-ink': colors.infoInk,
} as const;
