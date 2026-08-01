import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Grid } from '../../src/primitives/grid';

describe('Grid', () => {
  it('applies column count and tokenized gap', () => {
    const { container } = render(
      <Grid columns={3} gap={4}>
        <span>A</span>
        <span>B</span>
        <span>C</span>
      </Grid>
    );
    const el = container.firstElementChild as HTMLElement;
    expect(el.className).toContain('grid-cols-3');
    expect(el).toHaveStyle({ gap: '1rem' });
  });

  it('renders children', () => {
    render(
      <Grid columns={2} gap={2}>
        <span>Left</span>
        <span>Right</span>
      </Grid>
    );
    expect(screen.getByText('Left')).toBeInTheDocument();
    expect(screen.getByText('Right')).toBeInTheDocument();
  });
});
