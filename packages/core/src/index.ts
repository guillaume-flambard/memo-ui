/**
 * memo-ui Core
 * Design tokens + Tailwind CSS v4 presets (NO JSX)
 * Zero React. Zero runtime. Pure CSS + TypeScript.
 */

export * from './tokens/colors';
export * from './tokens/typography';
export * from './tokens/spacing';
export * from './tokens/radius';
export * from './tokens/shadows';
export * from './tokens/motion';
export { motionTokens as motion } from './tokens/motion';

// Combined CSS variables for convenience (static to avoid circular imports)
export const cssVars = {
  '--color-paper': '#FAFBFC',
  '--color-encre': '#0E1320',
  '--color-ink2': '#414B5E',
  '--color-ink3': '#6B7488',
  '--color-line': '#E6E9EF',
  '--color-line2': '#D6DBE4',
  '--color-ocre': '#F2870D',
  '--color-ocre-deep': '#D9760A',
  '--color-ocre2': '#FF6A2C',
  '--color-ocre-ink': '#B05707',
  '--color-ocre-soft': 'rgba(242,135,13,.12)',
  '--color-on-ocre': '#1B1204',
  '--color-surface': '#FFFFFF',
  '--color-surface2': '#F7F9FB',
  '--color-ok': '#48BB78',
  '--color-success': '#48BB78',
  '--color-warning': '#ED8936',
  '--color-error': '#E53E3E',
  '--color-info': '#3B82F6',
  '--font-display': 'Space Grotesk, system-ui, sans-serif',
  '--font-sans': 'Geist, system-ui, -apple-system, sans-serif',
  '--font-mono': 'Geist Mono, ui-monospace, monospace',
  '--space-0': '0',
  '--space-1': '0.25rem',
  '--space-2': '0.5rem',
  '--space-3': '0.75rem',
  '--space-4': '1rem',
  '--space-5': '1.5rem',
  '--space-6': '2rem',
  '--space-7': '3rem',
  '--space-8': '4rem',
  '--space-9': '6rem',
  '--space-10': '8rem',
  '--space-11': '12rem',
  '--space-12': '16rem',
  '--radius-none': '0',
  '--radius-sm': '0.125rem',
  '--radius-base': '0.25rem',
  '--radius-md': '0.375rem',
  '--radius-lg': '0.5rem',
  '--radius-xl': '0.75rem',
  '--radius-2xl': '1rem',
  '--radius-3xl': '1.5rem',
  '--radius-full': '9999px',
  '--shadow-none': 'none',
  '--shadow-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  '--shadow-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  '--shadow-base': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '--shadow-md': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '--shadow-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '--shadow-xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  '--shadow-2xl': '0 40px 80px -20px rgba(0, 0, 0, 0.3)',
  '--shadow-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  '--shadow-card': '0 4px 20px rgba(14, 19, 32, 0.12)',
  '--shadow-hover': '0 8px 30px rgba(14, 19, 32, 0.1)',
  '--shadow-glow-ocre': '0 0 20px rgba(242, 135, 13, 0.3)',
  '--duration-instant': '0ms',
  '--duration-fastest': '50ms',
  '--duration-fast': '150ms',
  '--duration-normal': '300ms',
  '--duration-slow': '500ms',
  '--duration-slower': '700ms',
  '--duration-slowest': '1000ms',
  '--easing-linear': 'linear',
  '--easing-in': 'ease-in',
  '--easing-out': 'ease-out',
  '--easing-in-out': 'ease-in-out',
  '--easing-cinematic': 'cubic-bezier(0.2, 0.7, 0.2, 1)',
  '--easing-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  '--easing-elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
} as const;
