import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from 'storybook/test';
import { Button, Modal } from '@memo-ui/react';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Modal dialog. Radix Dialog for focus trap / Escape / a11y; visuals from tokens. Reuses Button for actions.',
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>Open modal</Button>,
    title: 'Archive project?',
    description: 'This moves the project to archive. You can restore it later.',
    children: <p className="text-[var(--color-ink2)]">No hard deletes in this demo.</p>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', { name: 'Open modal' }));
    await expect(await body.findByRole('dialog')).toBeInTheDocument();
  },
};
