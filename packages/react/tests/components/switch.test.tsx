import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from '../../src/primitives/switch';

describe('Switch', () => {
  it('renders with accessible name from label', () => {
    render(<Switch label="Airplane mode" />);
    expect(screen.getByRole('switch', { name: 'Airplane mode' })).toBeInTheDocument();
  });

  it('toggles once when label is clicked (no double-toggle)', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch label="Notify" onChange={onChange} />);
    const control = screen.getByRole('switch', { name: 'Notify' });
    await user.click(screen.getByText('Notify'));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(control).toBeChecked();
  });

  it('sets aria-invalid when invalid', () => {
    render(<Switch label="Bad" invalid />);
    expect(screen.getByRole('switch', { name: 'Bad' })).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  });
});
