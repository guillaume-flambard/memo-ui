import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from 'storybook/test';
import { Spinner, Stack } from '@memo-ui/react';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Loading indicator using the core `spin` keyframe. Provide `label` for a status announcement; omit for decorative use.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    label: { control: 'text' },
  },
  args: {
    size: 'md',
    label: 'Loading',
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Decorative: Story = {
  args: { label: undefined },
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap={4} className="items-center">
      <Spinner size="sm" label="Small" />
      <Spinner size="md" label="Medium" />
      <Spinner size="lg" label="Large" />
    </Stack>
  ),
};

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('status', { name: 'Loading' })).toBeInTheDocument();
  },
};
