import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../../src/primitives/checkbox';

describe('Checkbox', () => {
  it('renders with accessible name from label', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByRole('checkbox', { name: 'Accept terms' })).toBeInTheDocument();
  });

  it('toggles when clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label="Notify" onChange={onChange} />);
    const box = screen.getByRole('checkbox', { name: 'Notify' });
    await user.click(box);
    expect(onChange).toHaveBeenCalled();
    expect(box).toBeChecked();
  });

  it('sets aria-invalid when invalid', () => {
    render(<Checkbox label="Bad" invalid />);
    expect(screen.getByRole('checkbox', { name: 'Bad' })).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  });
});
