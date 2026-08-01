import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Link } from '../../src/primitives/link';

describe('Link', () => {
  it('renders an anchor with href', () => {
    render(<Link href="/docs">Docs</Link>);
    expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs');
  });

  it('marks external links with new-tab affordance', () => {
    render(
      <Link href="https://example.com" external>
        External
      </Link>
    );
    const link = screen.getByRole('link', { name: /External/ });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveTextContent(/opens in a new tab/);
  });
});
