import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from 'storybook/test';
import { Label, Input } from '@memo-ui/react';

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Accessible form label. Use `htmlFor` with a sibling control, or nest the control as a child — not both for toggles.',
      },
    },
  },
  argTypes: {
    required: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Email',
    required: false,
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex max-w-sm flex-col gap-1.5">
      <Label {...args} htmlFor="label-email" />
      <Input id="label-email" type="email" placeholder="you@memo.dev" />
    </div>
  ),
};

export const Required: Story = {
  args: { required: true, children: 'Full name' },
  render: (args) => (
    <div className="flex max-w-sm flex-col gap-1.5">
      <Label {...args} htmlFor="label-name" />
      <Input id="label-name" required />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-1.5">
      <Label htmlFor="label-play">Nickname</Label>
      <Input id="label-play" defaultValue="memo" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Nickname')).toHaveValue('memo');
  },
};
