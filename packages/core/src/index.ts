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
  '--color-paper': '#FAF9F7',
  '--color-encre': '#16130F',
  '--color-ink2': '#6B6055',
  '--color-ink3': '#8A8078',
  '--color-line': '#E7E2DA',
  '--color-line2': '#DCD5CC',
  '--color-accent': '#AD4C16',
  '--color-accent-deep': '#8A3D10',
  '--color-accent2': '#E58A4A',
  '--color-accent-ink': '#7A360E',
  '--color-accent-soft': '#F4E4D8',
  '--color-on-accent': '#FFFFFF',
  '--color-surface': '#FFFFFF',
  '--color-surface2': '#F5F2EE',
  '--color-ok': '#3F7D53',
  '--color-success': '#3F7D53',
  '--color-warning': '#C0821F',
  '--color-error': '#B3452C',
  '--color-info': '#5A6B8C',
  '--font-display': 'Oswald, "Archivo Narrow", system-ui, sans-serif',
  '--font-sans': 'Oswald, "Archivo Narrow", system-ui, sans-serif',
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
  '--radius-sm': '0',
  '--radius-base': '0',
  '--radius-md': '0',
  '--radius-lg': '0',
  '--radius-xl': '0',
  '--radius-2xl': '0',
  '--radius-3xl': '0',
  '--radius-full': '9999px',
  '--shadow-none': 'none',
  '--shadow-xs': 'none',
  '--shadow-sm': 'none',
  '--shadow-base': 'none',
  '--shadow-md': 'none',
  '--shadow-lg': 'none',
  '--shadow-xl': 'none',
  '--shadow-2xl': 'none',
  '--shadow-inner': 'none',
  '--duration-instant': '0ms',
  '--duration-fastest': '100ms',
  '--duration-fast': '150ms',
  '--duration-normal': '200ms',
  '--duration-slow': '300ms',
  '--duration-slower': '500ms',
  '--duration-slowest': '1000ms',
  '--easing-linear': 'linear',
  '--easing-in': 'ease-in',
  '--easing-out': 'ease-out',
  '--easing-in-out': 'ease-in-out',
  '--easing-cinematic': 'cubic-bezier(0.2, 0.7, 0.2, 1)',
  '--easing-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  '--easing-elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
} as const;
