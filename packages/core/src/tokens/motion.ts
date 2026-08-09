/**
 * memo-ui Motion Tokens
 * Based on the Memo Labs portfolio: motion is slow and small — 0.2s to 0.3s
 * ease-in-out on colour/border. No lift, no scale.
 */

export const motionTokens = {
  // Durations (portfolio: 200-300ms; micro interactions stay fast)
  duration: {
    instant: '0ms',
    fastest: '100ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '1000ms',
  },

  // Easings
  easing: {
    linear: 'linear',
    in: 'ease-in',
    out: 'ease-out',
    inOut: 'ease-in-out',
    cinematic: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
} as const;

export type Motion = typeof motionTokens;

// CSS custom properties
export const motionCssVars = {
  '--duration-instant': motionTokens.duration.instant,
  '--duration-fastest': motionTokens.duration.fastest,
  '--duration-fast': motionTokens.duration.fast,
  '--duration-normal': motionTokens.duration.normal,
  '--duration-slow': motionTokens.duration.slow,
  '--duration-slower': motionTokens.duration.slower,
  '--duration-slowest': motionTokens.duration.slowest,
  '--easing-linear': motionTokens.easing.linear,
  '--easing-in': motionTokens.easing.in,
  '--easing-out': motionTokens.easing.out,
  '--easing-in-out': motionTokens.easing.inOut,
  '--easing-cinematic': motionTokens.easing.cinematic,
  '--easing-bounce': motionTokens.easing.bounce,
  '--easing-elastic': motionTokens.easing.elastic,
} as const;
