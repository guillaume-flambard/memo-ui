import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Text } from '../../src/primitives/text';

describe('Text', () => {
  it('renders as the requested element', () => {
    render(
      <Text as="h1" size="2xl">
        Title
      </Text>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Title' })).toBeInTheDocument();
  });

  it('defaults to a paragraph', () => {
    render(<Text>Body</Text>);
    expect(screen.getByText('Body').tagName).toBe('P');
  });
});
