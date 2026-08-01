import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Skeleton } from '../../src/primitives/skeleton';

describe('Skeleton', () => {
  it('renders a decorative placeholder', () => {
    render(<Skeleton data-testid="sk" />);
    const el = screen.getByTestId('sk');
    expect(el).toHaveAttribute('aria-hidden', 'true');
  });

  it('supports circular variant', () => {
    render(<Skeleton variant="circular" size="lg" data-testid="sk" />);
    expect(screen.getByTestId('sk').className).toMatch(/rounded-full/);
  });
});
