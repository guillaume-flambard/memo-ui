import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from 'storybook/test';
import { Skeleton, Stack, Card, CardHeader, CardContent } from '@memo-ui/react';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Loading placeholder with pulse animation. Decorative (`aria-hidden`); reduced motion is handled in core CSS.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: { variant: 'text', size: 'md' },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <Stack gap={4} className="w-72">
      <Stack direction="row" gap={3} className="items-center">
        <Skeleton variant="circular" size="md" />
        <Stack gap={2} className="flex-1">
          <Skeleton variant="text" size="md" className="w-full" />
          <Skeleton variant="text" size="sm" className="w-2/3" />
        </Stack>
      </Stack>
      <Skeleton variant="rectangular" size="md" />
    </Stack>
  ),
};

export const CardPlaceholder: Story = {
  render: () => (
    <Card className="w-72">
      <CardHeader>
        <Skeleton variant="text" size="lg" className="w-3/4" />
      </CardHeader>
      <CardContent>
        <Stack gap={2}>
          <Skeleton variant="text" className="w-full" />
          <Skeleton variant="text" className="w-5/6" />
          <Skeleton variant="rectangular" size="sm" />
        </Stack>
      </CardContent>
    </Card>
  ),
};

export const Interactive: Story = {
  args: { 'data-testid': 'skeleton' } as Story['args'],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('skeleton')).toHaveAttribute('aria-hidden', 'true');
  },
};
