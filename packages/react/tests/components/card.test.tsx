import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../../src/primitives/card';

describe('Card', () => {
  it('composes header content and footer', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Panel</CardTitle>
          <CardDescription>Quiet surface</CardDescription>
        </CardHeader>
        <CardContent>Body</CardContent>
        <CardFooter>Actions</CardFooter>
      </Card>
    );
    expect(screen.getByText('Panel')).toBeInTheDocument();
    expect(screen.getByText('Quiet surface')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });
});
