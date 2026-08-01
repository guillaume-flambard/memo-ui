import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from 'storybook/test';
import { Input } from '@memo-ui/react';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Single-line field. Always provide an accessible name. `variant="error"` sets `aria-invalid` unless overridden.',
      },
    },
  },
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
    'aria-label': 'Email address',
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
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
};

export const AllVariants: Story = {
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
  render: () => (
    <div className="flex max-w-md flex-col gap-3">
      <Input aria-label="Default" placeholder="Default" />
      <Input aria-label="Invalid" variant="error" defaultValue="Invalid" />
      <Input aria-label="Password" type="password" defaultValue="secret" />
      <Input aria-label="Disabled" disabled placeholder="Disabled" />
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
