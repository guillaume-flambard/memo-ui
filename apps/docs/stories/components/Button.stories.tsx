import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from 'storybook/test';
import { Button } from '@memo-ui/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Primary action control. Use `primary` for the strongest CTA; keep ocre scarce. `loading` preserves the accessible name via `sr-only` children.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'outline'],
      description: 'Visual style',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Control height and padding',
      table: { defaultValue: { summary: 'md' } },
    },
    loading: {
      control: 'boolean',
      description: 'Shows spinner and disables the button',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    loading: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Outline: Story = { args: { variant: 'outline' } };
export const Disabled: Story = {
  args: { disabled: true },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
};
export const Loading: Story = {
  args: { loading: true },
  parameters: {
    a11y: {
      config: {
        // Loading uses opacity token — contrast intentionally muted
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
};

export const AllVariants: Story = {
  parameters: {
    a11y: {
      config: {
        // Includes disabled/loading samples with intentional muted contrast
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="primary" size="sm">
        Small
      </Button>
      <Button variant="primary" size="lg">
        Large
      </Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  ),
};

export const Interactive: Story = {
  args: { children: 'Click me' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });
    await userEvent.click(button);
    await expect(button).toBeEnabled();
    button.focus();
    await expect(button).toHaveFocus();
  },
};
