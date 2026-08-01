/**
 * memo-ui Motion Tokens
 * GSAP cinematic + Motion micro-interactions (Linear style timing)
 */

export const motionTokens = {
  // Durations (Linear style: 120-180ms for micro, 700ms for cinematic)
  duration: {
    instant: '0ms',
    fastest: '50ms',
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
    slowest: '1000ms',
  },

  // Easings
  easing: {
    linear: 'linear',
    in: 'ease-in',
    out: 'ease-out',
    inOut: 'ease-in-out',
    // Custom cinematic easing (largo-ai inspired)
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
