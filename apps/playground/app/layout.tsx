import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'memo-ui Playground',
  description: 'Design system with soul',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
