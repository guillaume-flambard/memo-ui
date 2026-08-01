import type { Meta, StoryObj } from '@storybook/react';
import { Grid, Card, CardHeader, CardTitle, CardContent } from '@memo-ui/react';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'number', min: 1, max: 12 },
      table: { defaultValue: { summary: '1' } },
    },
    gap: {
      control: { type: 'number', min: 0, max: 12 },
      table: { defaultValue: { summary: '4' } },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
  },
  args: {
    columns: 3,
    gap: 4,
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

function Cell({ title }: { title: string }) {
  return (
    <Card variant="outlined">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-[var(--color-ink2)]">Grid cell</CardContent>
    </Card>
  );
}

export const Default: Story = {
  render: (args) => (
    <Grid {...args}>
      <Cell title="A" />
      <Cell title="B" />
      <Cell title="C" />
    </Grid>
  ),
};

export const TwoColumns: Story = {
  args: { columns: 2, gap: 3 },
  render: (args) => (
    <Grid {...args}>
      <Cell title="Left" />
      <Cell title="Right" />
    </Grid>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Grid columns={2} gap={3}>
        <Cell title="2-col" />
        <Cell title="2-col" />
      </Grid>
      <Grid columns={4} gap={2}>
        <Cell title="1" />
        <Cell title="2" />
        <Cell title="3" />
        <Cell title="4" />
      </Grid>
    </div>
  ),
};
