import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import { Input } from '@memo-ui/react';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
      table: { defaultValue: { summary: 'default' } },
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search'],
    },
  },
  args: {
    placeholder: 'Email address',
    variant: 'default',
    type: 'email',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: { variant: 'error', defaultValue: 'not-an-email' },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-3">
      <Input placeholder="Default" />
      <Input variant="error" defaultValue="Invalid" />
      <Input type="password" defaultValue="secret" />
      <Input disabled placeholder="Disabled" />
    </div>
  ),
};

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/email/i);
    await userEvent.type(input, 'you@memo.dev');
    await expect(input).toHaveValue('you@memo.dev');
  },
};
