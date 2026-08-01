import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@memo-ui/react';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      table: { defaultValue: { summary: 'horizontal' } },
    },
    tone: {
      control: 'select',
      options: ['line', 'line2'],
      table: { defaultValue: { summary: 'line' } },
    },
    label: { control: 'text' },
  },
  args: {
    orientation: 'horizontal',
    tone: 'line',
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-md py-4">
      <Divider {...args} />
    </div>
  ),
};

export const WithLabel: Story = {
  args: { label: 'Or continue' },
  render: (args) => (
    <div className="w-full max-w-md py-4">
      <Divider {...args} />
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div className="flex h-16 items-stretch gap-4">
      <span className="text-sm text-[var(--color-ink2)]">Left</span>
      <Divider {...args} />
      <span className="text-sm text-[var(--color-ink2)]">Right</span>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Divider />
      <Divider tone="line2" />
      <Divider label="Section" />
    </div>
  ),
};
