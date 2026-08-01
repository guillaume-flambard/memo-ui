import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from '../../src/primitives/textarea';

describe('Textarea', () => {
  it('renders with accessible name', () => {
    render(<Textarea aria-label="Bio" placeholder="Tell us about you" />);
    expect(screen.getByRole('textbox', { name: 'Bio' })).toBeInTheDocument();
  });

  it('sets aria-invalid on error variant', () => {
    render(<Textarea aria-label="Notes" variant="error" />);
    expect(screen.getByRole('textbox', { name: 'Notes' })).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  });

  it('accepts typed input', async () => {
    const user = userEvent.setup();
    render(<Textarea aria-label="Message" />);
    const field = screen.getByRole('textbox', { name: 'Message' });
    await user.type(field, 'Hello');
    expect(field).toHaveValue('Hello');
  });
});
