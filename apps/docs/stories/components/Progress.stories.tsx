import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from 'storybook/test';
import { Progress, Stack, Text } from '@memo-ui/react';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Determinate progress bar. Exposes `aria-valuemin` / `aria-valuemax` / `aria-valuenow`. Provide `label` for an accessible name.',
      },
    },
  },
  args: {
    value: 45,
    label: 'Upload progress',
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Levels: Story = {
  render: () => (
    <Stack gap={4} className="w-80">
      {[0, 25, 50, 75, 100].map((value) => (
        <Stack key={value} gap={1}>
          <Text size="xs" className="text-[var(--color-ink3)]">
            {value}%
          </Text>
          <Progress value={value} label={`${value} percent`} />
        </Stack>
      ))}
    </Stack>
  ),
};

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const bar = canvas.getByRole('progressbar', { name: 'Upload progress' });
    await expect(bar).toHaveAttribute('aria-valuenow', '45');
  },
};
