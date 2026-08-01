import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Label } from '../../src/primitives/label';

describe('Label', () => {
  it('associates with a control via htmlFor', () => {
    render(
      <>
        <Label htmlFor="email-field">Email</Label>
        <input id="email-field" />
      </>
    );
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('shows required indicator without affecting accessible name', () => {
    render(
      <>
        <Label htmlFor="name" required>
          Name
        </Label>
        <input id="name" />
      </>
    );
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(screen.getByText('*')).toHaveAttribute('aria-hidden');
  });
});
