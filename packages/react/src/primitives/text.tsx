/**
 * memo-ui Text
 * Typography wrapper component
 * Size: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl
 * Weight: light, normal, medium, semibold, bold
 */

import React, { forwardRef } from 'react';
import { cn } from '@memo-ui/utils';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
} as const;

const textWeights = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ size = 'base', weight = 'normal', as = 'p', className, children, ...props }, ref) => {
    const Component = as;
    
    return (
      <Component
        ref={ref}
        className={cn(
          // Base styles
          'text-[var(--color-encre)]',
          
          // Size
          textSizes[size],
          
          // Weight
          textWeights[weight],
          
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
