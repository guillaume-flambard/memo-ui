import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from '@memo-ui/react';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Surface container. Compose with CardHeader, CardTitle, CardDescription, CardContent, and CardFooter.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      table: { defaultValue: { summary: 'default' } },
    },
  },
  args: { variant: 'default' },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

function DemoCard({ variant }: { variant?: 'default' | 'outlined' | 'elevated' }) {
  return (
    <Card variant={variant} className="max-w-sm">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Short supporting description.</CardDescription>
      </CardHeader>
      <CardContent>
        Paper surface with ink text. Ocre stays scarce.
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="primary">
          Action
        </Button>
      </CardFooter>
    </Card>
  );
}

export const Default: Story = {
  render: (args) => <DemoCard variant={args.variant} />,
};

export const Outlined: Story = {
  args: { variant: 'outlined' },
  render: (args) => <DemoCard variant={args.variant} />,
};

export const Elevated: Story = {
  args: { variant: 'elevated' },
  render: (args) => <DemoCard variant={args.variant} />,
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-4 sm:grid-cols-3">
      <DemoCard variant="default" />
      <DemoCard variant="outlined" />
      <DemoCard variant="elevated" />
    </div>
  ),
};
