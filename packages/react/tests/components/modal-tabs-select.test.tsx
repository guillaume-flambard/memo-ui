import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../../src/primitives/button';
import { Modal } from '../../src/primitives/modal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../src/primitives/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../src/primitives/select';

describe('Modal', () => {
  it('opens from trigger and shows title', async () => {
    const user = userEvent.setup();
    render(
      <Modal
        trigger={<Button>Open</Button>}
        title="Confirm"
        description="Are you sure?"
      >
        Body copy
      </Modal>
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });
});

describe('Tabs', () => {
  it('switches panels', async () => {
    const user = userEvent.setup();
    render(
      <Tabs defaultValue="one">
        <TabsList aria-label="Demo">
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
        </TabsList>
        <TabsContent value="one">Panel one</TabsContent>
        <TabsContent value="two">Panel two</TabsContent>
      </Tabs>
    );
    expect(screen.getByText('Panel one')).toBeVisible();
    await user.click(screen.getByRole('tab', { name: 'Two' }));
    expect(screen.getByText('Panel two')).toBeVisible();
  });
});

describe('Select', () => {
  it('renders trigger with accessible name', () => {
    render(
      <Select>
        <SelectTrigger aria-label="Fruit">
          <SelectValue placeholder="Pick" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('combobox', { name: 'Fruit' })).toBeInTheDocument();
  });
});
