import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from '../../src/primitives/badge';

describe('Badge', () => {
  it('renders label text', () => {
    render(<Badge>Live</Badge>);
    expect(screen.getByText('Live')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLSpanElement | null };
    render(<Badge ref={ref}>Tag</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
