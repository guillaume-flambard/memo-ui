import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { within, userEvent, expect } from 'storybook/test';
import { Alert, Stack } from '@memo-ui/react';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Inline status banner. `error` / `warning` use `role="alert"`; other tones use `status`. Optional dismiss via `dismissible` + `onDismiss`.',
      },
    },
  },
  argTypes: {
    tone: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
    },
  },
  args: {
    title: 'Heads up',
    children: 'Something noteworthy happened.',
    tone: 'default',
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Tones: Story = {
  render: () => (
    <Stack gap={3} className="w-full max-w-md">
      <Alert tone="default" title="Default">
        Neutral notice.
      </Alert>
      <Alert tone="info" title="Info">
        Scarce ocre wash for informational callouts.
      </Alert>
      <Alert tone="success" title="Success">
        Saved successfully.
      </Alert>
      <Alert tone="warning" title="Warning">
        Check before continuing.
      </Alert>
      <Alert tone="error" title="Error">
        Request failed.
      </Alert>
    </Stack>
  ),
};

export const Dismissible: Story = {
  render: function DismissibleAlert() {
    const [open, setOpen] = useState(true);
    if (!open) return <button type="button" onClick={() => setOpen(true)}>Show alert</button>;
    return (
      <Alert
        tone="info"
        title="Dismissible"
        dismissible
        onDismiss={() => setOpen(false)}
      >
        Close when you are done reading.
      </Alert>
    );
  },
};

export const Interactive: Story = {
  args: { tone: 'error', title: 'Failed', children: 'Try again' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('alert')).toHaveTextContent('Failed');
  },
};

export const DismissPlay: Story = {
  render: Dismissible.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Dismiss' }));
    await expect(canvas.getByRole('button', { name: 'Show alert' })).toBeInTheDocument();
  },
};
