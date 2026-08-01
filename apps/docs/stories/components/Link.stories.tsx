import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from 'storybook/test';
import { Link, Stack, Text } from '@memo-ui/react';

const meta = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Text link as native `<a>`. Set `external` for new-tab + `noopener` and an SR-only new-tab hint.',
      },
    },
  },
  argTypes: {
    underline: {
      control: 'select',
      options: ['always', 'hover', 'none'],
      table: { defaultValue: { summary: 'hover' } },
    },
    external: { control: 'boolean' },
  },
  args: {
    href: '#',
    children: 'Read the docs',
    underline: 'hover',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const External: Story = {
  args: {
    href: 'https://example.com',
    external: true,
    children: 'External resource',
  },
};

export const InCopy: Story = {
  render: () => (
    <Text size="sm">
      Prefer tokenized{' '}
      <Link href="#tokens" underline="always">
        design tokens
      </Link>{' '}
      over hard-coded values.
    </Text>
  ),
};

export const Underlines: Story = {
  render: () => (
    <Stack gap={3}>
      <Link href="#" underline="always">
        Always
      </Link>
      <Link href="#" underline="hover">
        Hover
      </Link>
      <Link href="#" underline="none">
        None
      </Link>
    </Stack>
  ),
};

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('link', { name: 'Read the docs' })).toBeInTheDocument();
  },
};
