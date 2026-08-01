import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@memo-ui/react';

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  );
}

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'], table: { defaultValue: { summary: 'md' } } },
    color: {
      control: 'select',
      options: ['inherit', 'encre', 'ink2', 'ocre'],
      table: { defaultValue: { summary: 'inherit' } },
    },
    label: { control: 'text' },
  },
  args: { size: 'md', color: 'encre' },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Icon {...args}>
      <SparkleIcon />
    </Icon>
  ),
};

export const WithLabel: Story = {
  args: { label: 'Highlights', color: 'ocre' },
  render: (args) => (
    <Icon {...args}>
      <SparkleIcon />
    </Icon>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon size="sm" color="ink2">
        <SparkleIcon />
      </Icon>
      <Icon size="md" color="encre">
        <SparkleIcon />
      </Icon>
      <Icon size="lg" color="ocre" label="Ocre accent">
        <SparkleIcon />
      </Icon>
    </div>
  ),
};
