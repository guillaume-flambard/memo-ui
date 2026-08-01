import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Spinner } from '../../src/primitives/spinner';

describe('Spinner', () => {
  it('is decorative when unlabeled', () => {
    const { container } = render(<Spinner data-testid="spin" />);
    const root = screen.getByTestId('spin');
    expect(root).toHaveAttribute('aria-hidden', 'true');
    expect(container.querySelector('[role="status"]')).toBeNull();
  });

  it('exposes status role when labeled', () => {
    render(<Spinner label="Loading" />);
    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument();
  });
});
