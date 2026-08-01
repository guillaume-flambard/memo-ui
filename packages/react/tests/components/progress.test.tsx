import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Progress } from '../../src/primitives/progress';

describe('Progress', () => {
  it('exposes progressbar ARIA values', () => {
    render(<Progress value={40} min={0} max={100} label="Upload" />);
    const bar = screen.getByRole('progressbar', { name: 'Upload' });
    expect(bar).toHaveAttribute('aria-valuenow', '40');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  it('clamps value within range', () => {
    render(<Progress value={150} max={100} label="Over" />);
    expect(screen.getByRole('progressbar', { name: 'Over' })).toHaveAttribute(
      'aria-valuenow',
      '100'
    );
  });
});
