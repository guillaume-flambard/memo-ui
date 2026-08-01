import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from 'storybook/test';
import { Avatar, Stack } from '@memo-ui/react';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Circular user avatar. Shows `src` when available; otherwise renders initials from `fallback`.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    src: { control: 'text' },
    alt: { control: 'text' },
    fallback: { control: 'text' },
  },
  args: {
    fallback: 'Memo UI',
    size: 'md',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fallback: Story = {};

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop',
    alt: 'Portrait',
    fallback: 'JD',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap={3} className="items-center">
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
    </Stack>
  ),
};

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('MU')).toBeInTheDocument();
  },
};
