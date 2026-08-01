import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'memo-ui Playground',
  description: 'Design system with soul: precision + warmth',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const tokenFonts = {
    '--font-sans': 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
    '--font-mono': 'var(--font-geist-mono), ui-monospace, monospace',
    '--font-display': 'var(--font-space-grotesk), "Space Grotesk", ui-sans-serif, sans-serif',
  } as CSSProperties;

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body
        className={`${GeistSans.className} min-h-screen bg-[var(--color-paper)] text-[var(--color-encre)] antialiased`}
        style={tokenFonts}
      >
        {children}
      </body>
    </html>
  );
}
