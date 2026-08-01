import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from '../../src/primitives/avatar';

describe('Avatar', () => {
  it('renders fallback initials', () => {
    render(<Avatar fallback="Guillaume Flambard" data-testid="av" />);
    expect(screen.getByTestId('av')).toHaveTextContent('GF');
  });

  it('renders image when src is provided', () => {
    render(<Avatar src="https://example.com/a.png" alt="Ada" fallback="Ada" />);
    expect(screen.getByRole('img', { name: 'Ada' })).toHaveAttribute(
      'src',
      'https://example.com/a.png'
    );
  });

  it('uses first two chars for single-word fallback', () => {
    render(<Avatar fallback="Memo" data-testid="av" />);
    expect(screen.getByTestId('av')).toHaveTextContent('ME');
  });
});
