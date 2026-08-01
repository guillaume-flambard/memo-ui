import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from 'storybook/test';
import { Tabs, TabsContent, TabsList, TabsTrigger, Text } from '@memo-ui/react';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tabbed navigation. Radix Tabs for keyboard / ARIA; list and triggers styled with tokens.',
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[24rem]">
      <TabsList aria-label="Sections">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="tokens">Tokens</TabsTrigger>
        <TabsTrigger value="a11y">A11y</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Text size="sm">Paper, ink, scarce ocre.</Text>
      </TabsContent>
      <TabsContent value="tokens">
        <Text size="sm">Foundation → Semantic → Component.</Text>
      </TabsContent>
      <TabsContent value="a11y">
        <Text size="sm">WCAG AA on Canvas audits.</Text>
      </TabsContent>
    </Tabs>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('tab', { name: 'Tokens' }));
    await expect(canvas.getByText(/Foundation/)).toBeVisible();
  },
};
