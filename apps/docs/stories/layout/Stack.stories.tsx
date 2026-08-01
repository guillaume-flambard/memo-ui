import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Button } from '@memo-ui/react';

const meta = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      table: { defaultValue: { summary: 'column' } },
    },
    gap: { control: { type: 'number', min: 0, max: 12 }, table: { defaultValue: { summary: '0' } } },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    wrap: { control: 'boolean' },
  },
  args: {
    direction: 'row',
    gap: 3,
    wrap: true,
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Stack {...args}>
      <Button size="sm">One</Button>
      <Button size="sm" variant="secondary">
        Two
      </Button>
      <Button size="sm" variant="outline">
        Three
      </Button>
    </Stack>
  ),
};

export const Column: Story = {
  args: { direction: 'column', gap: 2 },
  render: (args) => (
    <Stack {...args} className="max-w-xs">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </Stack>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Stack direction="row" gap={3} wrap>
        <Button size="sm">Row</Button>
        <Button size="sm" variant="ghost">
          Gap 3
        </Button>
      </Stack>
      <Stack direction="column" gap={2} className="max-w-xs">
        <Button size="sm">Column</Button>
        <Button size="sm" variant="outline">
          Gap 2
        </Button>
      </Stack>
    </div>
  ),
};
