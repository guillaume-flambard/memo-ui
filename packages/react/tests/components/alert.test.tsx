import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert } from '../../src/primitives/alert';

describe('Alert', () => {
  it('uses status role by default', () => {
    render(<Alert title="Note">Body</Alert>);
    expect(screen.getByRole('status')).toHaveTextContent('Note');
  });

  it('uses alert role for error tone', () => {
    render(
      <Alert tone="error" title="Failed">
        Try again
      </Alert>
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Failed');
  });

  it('invokes onDismiss when dismissible', async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(
      <Alert dismissible onDismiss={onDismiss} title="Closeable">
        Content
      </Alert>
    );
    await user.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
