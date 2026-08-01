import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from 'storybook/test';
import { Button, Tooltip, TooltipProvider } from '@memo-ui/react';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={0}>
        <Story />
      </TooltipProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Hover/focus hint. Radix for behavior/a11y; visual chrome from tokens. Wrap with TooltipProvider at app root.',
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Precision with warmth',
    children: <Button variant="secondary">Hover me</Button>,
  },
};

export const Interactive: Story = {
  args: {
    content: 'Copied',
    children: <Button>Copy</Button>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.hover(canvas.getByRole('button', { name: 'Copy' }));
    await expect(await body.findByText('Copied')).toBeInTheDocument();
  },
};
