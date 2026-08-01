import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Icon } from '../../src/primitives/icon';

describe('Icon', () => {
  it('is decorative by default', () => {
    const { container } = render(
      <Icon>
        <svg data-testid="svg" />
      </Icon>
    );
    const icon = container.firstElementChild;
    expect(icon).toHaveAttribute('aria-hidden', 'true');
    expect(icon).not.toHaveAttribute('role');
  });

  it('exposes role=img when labeled', () => {
    render(
      <Icon label="Sparkle">
        <svg />
      </Icon>
    );
    expect(screen.getByRole('img', { name: 'Sparkle' })).toBeInTheDocument();
  });
});
