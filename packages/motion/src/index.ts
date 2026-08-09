/**
 * memo-ui Motion
 * GSAP cinematic motion + Motion micro-interactions
 * Linear-style timing: 120-180ms micro, 700ms cinematic
 */

import { gsap } from 'gsap';

/**
 * Motion timing presets (Linear style)
 */
export const motionTiming = {
  micro: { duration: 0.15, ease: [0.2, 0.7, 0.2, 1] }, // 150ms
  normal: { duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }, // 300ms
  cinematic: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }, // 700ms
  slow: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }, // 500ms
} as const;

/**
 * GSAP cinematic fade animation
 * For major reveals and transitions
 */
export function gsapFadeIn(
  element: HTMLElement | HTMLElement[],
  options?: gsap.TweenVars
): void {
  gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.7,
      ease: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      ...options,
    }
  );
}

/**
 * GSAP cinematic rise animation
 * For elements that rise with fade
 */
export function gsapRiseIn(
  element: HTMLElement | HTMLElement[],
  options?: gsap.TweenVars
): void {
  gsap.fromTo(
    element,
    { opacity: 0, y: 8 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      ...options,
    }
  );
}

/**
 * GSAP sun animation
 * For accent fills and CTAs
 */
export function gsapSunIn(
  element: HTMLElement | HTMLElement[],
  options?: gsap.TweenVars
): void {
  gsap.fromTo(
    element,
    { opacity: 0, y: 4 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      ...options,
    }
  );
}

/**
 * Staggered animations for lists
 */
export function gsapStagger(
  elements: HTMLElement[],
  options?: gsap.TweenVars
): void {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 8 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      stagger: 0.1,
      ...options,
    }
  );
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Skip animation if user prefers reduced motion
 */
export function withReducedMotion<T>(
  fn: () => T,
  fallback: T
): T {
  return prefersReducedMotion() ? fallback : fn();
}

/**
 * Motion variants for common patterns (CSS-based)
 */
export const motionVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: motionTiming.cinematic,
  },
  rise: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: motionTiming.cinematic,
  },
  scale: {
    initial: { scale: 0.95 },
    animate: { scale: 1 },
    transition: motionTiming.micro,
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: motionTiming.normal,
  },
} as const;
