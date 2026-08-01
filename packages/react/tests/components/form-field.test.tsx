import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormField } from '../../src/primitives/form-field';
import { Input } from '../../src/primitives/input';

describe('FormField', () => {
  it('wires label to control via htmlFor/id', () => {
    render(
      <FormField label="Email">
        <Input type="email" />
      </FormField>
    );
    expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
  });

  it('links hint via aria-describedby', () => {
    render(
      <FormField label="Email" hint="Work address preferred">
        <Input type="email" />
      </FormField>
    );
    const input = screen.getByRole('textbox', { name: 'Email' });
    const hint = screen.getByText('Work address preferred');
    expect(input).toHaveAttribute('aria-describedby', hint.id);
  });

  it('sets aria-invalid and alert on error', () => {
    render(
      <FormField label="Email" error="Invalid email">
        <Input type="email" />
      </FormField>
    );
    const input = screen.getByRole('textbox', { name: 'Email' });
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid email');
  });
});
