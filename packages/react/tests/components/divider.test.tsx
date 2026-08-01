import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Divider } from '../../src/primitives/divider';

describe('Divider', () => {
  it('renders a native horizontal separator by default', () => {
    render(<Divider />);
    const sep = screen.getByRole('separator');
    expect(sep.tagName).toBe('HR');
    expect(sep).not.toHaveAttribute('aria-orientation');
  });

  it('supports vertical orientation', () => {
    render(<Divider orientation="vertical" />);
    const sep = screen.getByRole('separator');
    expect(sep).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders an optional label between two separators', () => {
    render(<Divider label="Or continue" />);
    expect(screen.getByText('Or continue')).toBeInTheDocument();
    expect(screen.getAllByRole('separator')).toHaveLength(2);
  });
});
