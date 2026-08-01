/**
 * memo-ui Color Tokens
 * Base: largo-ai heritage (paper + ink)
 * Accent: Alan Chester style (rare ocre as punctuation)
 */

export const colors = {
  // Base colors (largo-ai heritage)
  paper: '#FAFBFC', // Fond de page
  encre: '#0E1320', // Texte principal + fonds "encre"
  ink2: '#414B5E', // Texte secondaire
  ink3: '#5C6578', // Tertiary / meta — AA on paper (~5.65:1)

  // Line colors
  line: '#E6E9EF',
  line2: '#D6DBE4',

  // Accent unique (Alan Chester style — rare punctuation)
  ocre: '#F2870D', // Fill / pivot — scarce on purpose
  ocreDeep: '#D9760A', // Hover / gradient foot
  ocre2: '#FF6A2C', // Second gradient stop
  ocreInk: '#92400E', // Ocre as text/icon on paper or soft wash (WCAG AA)
  ocreSoft: '#F9EDDF', // Opaque wash (axe-friendly; ~12% ocre on paper)
  onOcre: '#1B1204', // Text on solid ocre

  // Surface colors
  surface: '#FFFFFF',
  surface2: '#F7F9FB',

  // Semantic fills + AA ink on soft washes
  ok: '#48BB78',
  success: '#48BB78',
  successInk: '#166534',
  warning: '#ED8936',
  warningInk: '#9A3412',
  error: '#E53E3E',
  errorInk: '#B91C1C',
  info: '#3B82F6',
  infoInk: '#1D4ED8',
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
  '--color-ocre': colors.ocre,
  '--color-ocre-deep': colors.ocreDeep,
  '--color-ocre2': colors.ocre2,
  '--color-ocre-ink': colors.ocreInk,
  '--color-ocre-soft': colors.ocreSoft,
  '--color-on-ocre': colors.onOcre,
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
