import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../../src/primitives/button';
import { Tooltip, TooltipProvider } from '../../src/primitives/tooltip';
import { ToastProvider, ToastViewport, useToast } from '../../src/primitives/toast';

describe('Tooltip', () => {
  it('renders a labeled trigger', () => {
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip content="More info">
          <Button>Hint</Button>
        </Tooltip>
      </TooltipProvider>
    );
    expect(screen.getByRole('button', { name: 'Hint' })).toBeInTheDocument();
  });
});

function ToastDemo() {
  const { toast } = useToast();
  return (
    <>
      <Button onClick={() => toast({ title: 'Saved', description: 'All good' })}>Notify</Button>
      <ToastViewport />
    </>
  );
}

describe('Toast', () => {
  it('renders a toast after trigger', async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <ToastDemo />
      </ToastProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Notify' }));
    expect(screen.getByText('Saved')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('dismisses on button click', async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <ToastDemo />
      </ToastProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Notify' }));
    await user.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(screen.queryByText('Saved')).not.toBeInTheDocument();
  });
});
