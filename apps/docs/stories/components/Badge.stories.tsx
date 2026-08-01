import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@memo-ui/react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'ocre', 'outline', 'success', 'warning', 'error'],
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      table: { defaultValue: { summary: 'md' } },
    },
    children: { control: 'text' },
  },
  args: {
    children: 'Badge',
    variant: 'default',
    size: 'md',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Ocre: Story = { args: { variant: 'ocre', children: 'Pivot' } };
export const Outline: Story = { args: { variant: 'outline' } };
export const Success: Story = { args: { variant: 'success', children: 'Live' } };
export const Warning: Story = { args: { variant: 'warning', children: 'Soon' } };
export const Error: Story = { args: { variant: 'error', children: 'Blocked' } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="ocre">Ocre</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge size="sm">Small</Badge>
    </div>
  ),
};
