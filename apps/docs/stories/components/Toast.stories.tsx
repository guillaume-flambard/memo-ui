import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from 'storybook/test';
import { Button, ToastProvider, ToastViewport, useToast } from '@memo-ui/react';

function Demo() {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() => toast({ title: 'Saved', description: 'Changes applied.' })}
      >
        Default
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast({ title: 'Live', description: 'Deployed.', tone: 'success' })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast({ title: 'Careful', description: 'Check the form.', tone: 'warning' })
        }
      >
        Warning
      </Button>
      <Button
        variant="ghost"
        onClick={() =>
          toast({ title: 'Failed', description: 'Try again.', tone: 'error' })
        }
      >
        Error
      </Button>
      <ToastViewport />
    </div>
  );
}

const meta = {
  title: 'Components/Toast',
  component: ToastViewport,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Custom toast system: ToastProvider + useToast + ToastViewport. Motion via CSS opacity/transform only.',
      },
    },
  },
} satisfies Meta<typeof ToastViewport>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Demo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Default' }));
    await expect(canvas.getByText('Saved')).toBeInTheDocument();
  },
};
