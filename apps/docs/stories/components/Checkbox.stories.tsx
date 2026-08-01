import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from 'storybook/test';
import { Checkbox } from '@memo-ui/react';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Native checkbox with token chrome. Prefer `label` (or `aria-label`) for an accessible name.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      table: { defaultValue: { summary: 'md' } },
    },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    label: 'Send me product updates',
    size: 'md',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = { args: { defaultChecked: true } };

export const Invalid: Story = { args: { invalid: true, label: 'Required field' } };

export const Disabled: Story = {
  args: { disabled: true },
  parameters: {
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } },
  },
};

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const box = canvas.getByRole('checkbox');
    await userEvent.click(box);
    await expect(box).toBeChecked();
  },
};
