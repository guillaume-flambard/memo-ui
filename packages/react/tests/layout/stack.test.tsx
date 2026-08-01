import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Stack } from '../../src/primitives/stack';

describe('Stack', () => {
  it('applies flex gap from the 4px scale', () => {
    const { container } = render(
      <Stack gap={4}>
        <span>A</span>
        <span>B</span>
      </Stack>
    );
    expect(container.firstElementChild).toHaveStyle({
      display: 'flex',
      gap: '1rem',
    });
  });

  it('renders children', () => {
    render(
      <Stack gap={2}>
        <span>One</span>
        <span>Two</span>
      </Stack>
    );
    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
  });
});
