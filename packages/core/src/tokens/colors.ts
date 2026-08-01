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
  ink3: '#6B7488', // Texte tertiaire / méta

  // Line colors
  line: '#E6E9EF',
  line2: '#D6DBE4',

  // Accent unique (Alan Chester style — rare punctuation)
  ocre: '#F2870D', // The data, the pivot, the δ — scarce on purpose
  ocreDeep: '#D9760A', // Bas du dégradé, hover
  ocre2: '#FF6A2C', // Second point du dégradé
  ocreInk: '#B05707', // Ocre en texte (kickers, liens, chevrons)
  ocreSoft: 'rgba(242,135,13,.12)', // Wash ocre (fonds de badge)
  onOcre: '#1B1204', // Texte sur aplat ocre

  // Surface colors
  surface: '#FFFFFF',
  surface2: '#F7F9FB',

  // Semantic colors
  ok: '#16a34a', // Vert pour statut (terminé/validé/en ligne) — usage réservé
  success: '#48BB78',
  warning: '#ED8936',
  error: '#E53E3E',
  info: '#3B82F6',
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
  '--color-warning': colors.warning,
  '--color-error': colors.error,
  '--color-info': colors.info,
} as const;
