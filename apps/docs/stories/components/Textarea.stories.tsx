import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from 'storybook/test';
import { Textarea } from '@memo-ui/react';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Multi-line field matching Input chrome. Always provide an accessible name. `variant="error"` sets `aria-invalid` unless overridden.',
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
  },
  args: {
    placeholder: 'Write a short bio…',
    variant: 'default',
    'aria-label': 'Bio',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: { variant: 'error', defaultValue: 'Too short' },
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
      <Textarea aria-label="Default" placeholder="Default" />
      <Textarea aria-label="Invalid" variant="error" defaultValue="Invalid" />
      <Textarea aria-label="Disabled" disabled placeholder="Disabled" />
    </div>
  ),
};

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByLabelText(/bio/i);
    await userEvent.type(field, 'Hello memo-ui');
    await expect(field).toHaveValue('Hello memo-ui');
  },
};
