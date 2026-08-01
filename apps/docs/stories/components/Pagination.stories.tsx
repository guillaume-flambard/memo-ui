import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { within, userEvent, expect } from 'storybook/test';
import { Pagination, Stack, Text } from '@memo-ui/react';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Prev/next plus numbered page controls built on Button. Controlled via `page`, `pageCount`, and `onPageChange`.',
      },
    },
  },
  args: {
    page: 1,
    pageCount: 8,
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Controlled: Story = {
  render: function ControlledPagination() {
    const [page, setPage] = useState(3);
    return (
      <Stack gap={3}>
        <Text size="sm" className="text-[var(--color-ink2)]">
          Page {page} of 12
        </Text>
        <Pagination page={page} pageCount={12} onPageChange={setPage} />
      </Stack>
    );
  },
};

export const Interactive: Story = {
  args: { page: 2, pageCount: 5 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', { name: 'Page 2' })).toHaveAttribute(
      'aria-current',
      'page'
    );
    await userEvent.click(canvas.getByRole('button', { name: 'Next page' }));
  },
};
