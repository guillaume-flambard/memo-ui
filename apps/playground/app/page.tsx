import { Button } from '@memo-ui/react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-[var(--color-encre)]">
          memo-ui Playground
        </h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--color-encre)]">
            Buttons
          </h2>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">
              Primary Small
            </Button>
            <Button variant="primary" size="md">
              Primary Medium
            </Button>
            <Button variant="primary" size="lg">
              Primary Large
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" size="md">
              Secondary
            </Button>
            <Button variant="ghost" size="md">
              Ghost
            </Button>
            <Button variant="outline" size="md">
              Outline
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="md" disabled>
              Loading
            </Button>
            <Button variant="primary" size="md" disabled>
              Disabled
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--color-encre)]">
            Typography
          </h2>

          <p className="text-[var(--color-ink2)]">
            Space Grotesk (display) + Geist (sans) + Geist Mono (mono)
          </p>

          <p className="font-mono text-sm text-[var(--color-ocre-ink)] uppercase tracking-widest">
            Mono kickers
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--color-encre)]">
            Colors
          </h2>

          <div className="flex flex-wrap gap-4">
            <div className="w-24 h-24 rounded-lg bg-[var(--color-ocre)] border border-[var(--color-ocre-deep)]" />
            <div className="w-24 h-24 rounded-lg bg-[var(--color-paper)] border border-[var(--color-line)]" />
            <div className="w-24 h-24 rounded-lg bg-[var(--color-encre)]" />
            <div className="w-24 h-24 rounded-lg bg-[var(--color-ink2)]" />
          </div>
        </div>
      </div>
    </main>
  );
}
