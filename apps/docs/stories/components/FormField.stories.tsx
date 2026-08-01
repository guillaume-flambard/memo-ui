import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from 'storybook/test';
import { FormField, Input, Textarea, Switch } from '@memo-ui/react';

const meta = {
  title: 'Components/FormField',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Form pattern composing Label + control + hint/error. Wires `id`/`htmlFor`, `aria-describedby`, and `aria-invalid` onto the child control.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    required: { control: 'boolean' },
  },
  args: {
    label: 'Email',
    hint: 'Work address preferred',
    required: false,
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <FormField {...args}>
      <Input type="email" placeholder="you@memo.dev" />
    </FormField>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Email',
    hint: undefined,
    error: 'Enter a valid email address',
    required: true,
  },
  render: (args) => (
    <FormField {...args}>
      <Input type="email" defaultValue="not-an-email" variant="error" />
    </FormField>
  ),
};

export const TextareaField: Story = {
  args: {
    label: 'Bio',
    hint: 'A sentence or two',
  },
  render: (args) => (
    <FormField {...args}>
      <Textarea placeholder="Tell us about you" />
    </FormField>
  ),
};

export const WithSwitch: Story = {
  args: {
    label: undefined,
    hint: 'You can change this later in settings',
  },
  render: (args) => (
    <FormField {...args}>
      <Switch label="Marketing emails" />
    </FormField>
  ),
};

export const Interactive: Story = {
  render: () => (
    <FormField label="Username" hint="Letters and numbers only">
      <Input defaultValue="memo" />
    </FormField>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: 'Username' });
    await expect(input).toHaveValue('memo');
    await expect(input).toHaveAttribute('aria-describedby');
  },
};
