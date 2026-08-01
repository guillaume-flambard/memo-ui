import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio, RadioGroup } from '../../src/primitives/radio';

describe('Radio', () => {
  it('selects an option in a group', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <RadioGroup aria-label="Plan" value="free" onValueChange={onValueChange}>
        <Radio value="free" label="Free" />
        <Radio value="pro" label="Pro" />
      </RadioGroup>
    );
    expect(screen.getByRole('radio', { name: 'Free' })).toBeChecked();
    await user.click(screen.getByRole('radio', { name: 'Pro' }));
    expect(onValueChange).toHaveBeenCalledWith('pro');
  });

  it('exposes radiogroup role', () => {
    render(
      <RadioGroup aria-label="Size">
        <Radio value="sm" label="Small" />
      </RadioGroup>
    );
    expect(screen.getByRole('radiogroup', { name: 'Size' })).toBeInTheDocument();
  });
});
