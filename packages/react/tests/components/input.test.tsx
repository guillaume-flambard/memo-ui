import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../../src/primitives/input';

describe('Input', () => {
  it('renders a textbox with placeholder', () => {
    render(<Input placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  });

  it('accepts typed input', async () => {
    const user = userEvent.setup();
    render(<Input aria-label="Name" />);
    const input = screen.getByRole('textbox', { name: 'Name' });
    await user.type(input, 'memo');
    expect(input).toHaveValue('memo');
  });

  it('can be disabled', () => {
    render(<Input aria-label="Locked" disabled />);
    expect(screen.getByRole('textbox', { name: 'Locked' })).toBeDisabled();
  });

  it('marks error variant as aria-invalid', () => {
    render(<Input aria-label="Email" variant="error" />);
    expect(screen.getByRole('textbox', { name: 'Email' })).toHaveAttribute('aria-invalid', 'true');
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Input ref={ref} aria-label="Ref" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
