import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { within, userEvent, expect } from 'storybook/test';
import { Radio, RadioGroup } from '@memo-ui/react';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Native radio option. Prefer `RadioGroup` for shared name and controlled selection.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      table: { defaultValue: { summary: 'md' } },
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Option',
    value: 'a',
    name: 'demo',
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Group: Story = {
  render: function Render() {
    const [value, setValue] = useState('pro');
    return (
      <RadioGroup
        aria-label="Plan"
        value={value}
        onValueChange={setValue}
        className="min-w-[12rem]"
      >
        <Radio value="free" label="Free" />
        <Radio value="pro" label="Pro" />
        <Radio value="team" label="Team" />
      </RadioGroup>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('radio', { name: 'Free' }));
    await expect(canvas.getByRole('radio', { name: 'Free' })).toBeChecked();
  },
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup aria-label="Align" orientation="horizontal">
      <Radio value="start" label="Start" name="align" defaultChecked />
      <Radio value="center" label="Center" name="align" />
      <Radio value="end" label="End" name="align" />
    </RadioGroup>
  ),
};
