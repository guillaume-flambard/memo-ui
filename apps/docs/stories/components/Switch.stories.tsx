import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from 'storybook/test';
import { Switch } from '@memo-ui/react';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Binary toggle with `role="switch"`. Prefer `label` (or `aria-label`). Nested label only — never `htmlFor` + nest.',
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
    label: 'Email digests',
    size: 'md',
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = { args: { defaultChecked: true } };

export const Invalid: Story = { args: { invalid: true, label: 'Required setting' } };

export const Disabled: Story = {
  args: { disabled: true },
  parameters: {
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } },
  },
};

export const AllVariants: Story = {
  parameters: {
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } },
  },
  render: () => (
    <div className="flex flex-col gap-3">
      <Switch label="Off" size="sm" />
      <Switch label="On" defaultChecked />
      <Switch label="Invalid" invalid />
      <Switch label="Disabled" disabled />
    </div>
  ),
};

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole('switch');
    await userEvent.click(control);
    await expect(control).toBeChecked();
  },
};
