/**
 * memo-ui Spacing Tokens
 * 4px base unit (largo-ai inspired)
 */

export const spacing = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.5rem', // 24px
  6: '2rem', // 32px
  7: '3rem', // 48px
  8: '4rem', // 64px
  9: '6rem', // 96px
  10: '8rem', // 128px
  11: '12rem', // 192px
  12: '16rem', // 256px
} as const;

export type Spacing = typeof spacing;

// CSS custom properties
export const spacingCssVars = {
  '--space-0': spacing[0],
  '--space-1': spacing[1],
  '--space-2': spacing[2],
  '--space-3': spacing[3],
  '--space-4': spacing[4],
  '--space-5': spacing[5],
  '--space-6': spacing[6],
  '--space-7': spacing[7],
  '--space-8': spacing[8],
  '--space-9': spacing[9],
  '--space-10': spacing[10],
  '--space-11': spacing[11],
  '--space-12': spacing[12],
} as const;
