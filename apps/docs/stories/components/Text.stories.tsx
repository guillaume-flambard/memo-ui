import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@memo-ui/react';

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      table: { defaultValue: { summary: 'base' } },
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      table: { defaultValue: { summary: 'normal' } },
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    children: { control: 'text' },
  },
  args: {
    children: 'Precision with warmth',
    size: 'base',
    weight: 'normal',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Display: Story = {
  args: { size: '4xl', weight: 'bold', as: 'h1' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text size="5xl" weight="bold">
        Display 5xl
      </Text>
      <Text size="3xl" weight="semibold">
        Display 3xl
      </Text>
      <Text size="xl" weight="medium">
        Title xl
      </Text>
      <Text size="base">Base body</Text>
      <Text size="sm" className="text-[var(--color-ink2)]">
        Small meta
      </Text>
      <Text size="xs" className="text-[var(--color-ink3)]">
        Extra small
      </Text>
    </div>
  ),
};
