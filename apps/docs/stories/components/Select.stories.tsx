import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from 'storybook/test';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@memo-ui/react';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Single-select listbox. Radix Select for behavior; trigger/content/item chrome from tokens. Always provide an accessible name on the trigger.',
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select defaultValue="pro">
      <SelectTrigger aria-label="Plan" className="w-56">
        <SelectValue placeholder="Choose plan" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="free">Free</SelectItem>
        <SelectItem value="pro">Pro</SelectItem>
        <SelectItem value="team">Team</SelectItem>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('combobox', { name: 'Plan' });
    await userEvent.click(trigger);
    await expect(await body.findByRole('option', { name: 'Free' })).toBeInTheDocument();
  },
};
