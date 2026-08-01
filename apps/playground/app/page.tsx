import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Text,
  Stack,
} from '@memo-ui/react';

const sections = [
  { id: 'buttons', label: 'Button' },
  { id: 'cards', label: 'Card' },
  { id: 'inputs', label: 'Input' },
  { id: 'typography', label: 'Text' },
  { id: 'tokens', label: 'Tokens' },
] as const;

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-[var(--color-line)] pt-12">
      <div className="mb-8 max-w-2xl">
        <Text as="h2" size="2xl" weight="semibold">
          {title}
        </Text>
        <Text size="sm" className="mt-2 text-[var(--color-ink3)]">
          {description}
        </Text>
      </div>
      {children}
    </section>
  );
}

function VariantLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-3 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink3)]">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      <header className="sticky top-0 z-20 border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-paper)_88%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <div className="flex items-baseline gap-3">
            <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-encre)]">
              memo-ui
            </span>
            <span className="hidden text-sm text-[var(--color-ink3)] sm:inline">playground</span>
          </div>
          <nav className="flex flex-wrap items-center gap-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-lg px-2.5 py-1.5 text-sm text-[var(--color-ink2)] transition-colors duration-150 hover:bg-[var(--color-ocre-soft)] hover:text-[var(--color-ocre-ink)]"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--color-ocre-ink)]">
            Design system
          </p>
          <Text as="h1" size="5xl" weight="bold" className="leading-[1.05]">
            Precision with warmth
          </Text>
          <Text size="lg" className="mt-5 text-[var(--color-ink2)]">
            Paper, ink, and a single ocre accent. Components for shipping fast without looking generic.
          </Text>
          <Stack direction="row" gap={3} wrap className="mt-8 items-center">
            <Button variant="primary" size="md">
              Get started
            </Button>
            <Button variant="secondary" size="md">
              View tokens
            </Button>
            <Button variant="ghost" size="md">
              Browse primitives
            </Button>
          </Stack>
        </div>

        <div className="flex flex-col gap-4">
          <Section
            id="buttons"
            title="Button"
            description="Four variants, three sizes. Springs-ready interactive timing under 180ms."
          >
            <div className="grid gap-10">
              <div>
                <VariantLabel>Primary · sizes</VariantLabel>
                <Stack direction="row" gap={3} wrap className="items-center">
                  <Button variant="primary" size="sm">
                    Small
                  </Button>
                  <Button variant="primary" size="md">
                    Medium
                  </Button>
                  <Button variant="primary" size="lg">
                    Large
                  </Button>
                </Stack>
              </div>
              <div>
                <VariantLabel>Variants</VariantLabel>
                <Stack direction="row" gap={3} wrap className="items-center">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                </Stack>
              </div>
            </div>
          </Section>

          <Section
            id="cards"
            title="Card"
            description="Surface containers for interactive content — default, outlined, elevated."
          >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Card variant="default">
                <CardHeader>
                  <CardTitle>Default</CardTitle>
                  <CardDescription>Quiet border, no elevation.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Text size="sm" className="text-[var(--color-ink2)]">
                    Use for grouped content that sits flush with the page.
                  </Text>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" size="sm">
                    Action
                  </Button>
                </CardFooter>
              </Card>

              <Card variant="outlined">
                <CardHeader>
                  <CardTitle>Outlined</CardTitle>
                  <CardDescription>Stronger edge definition.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Text size="sm" className="text-[var(--color-ink2)]">
                    Good when you need structure without shadow.
                  </Text>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" size="sm">
                    Action
                  </Button>
                </CardFooter>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Elevated</CardTitle>
                  <CardDescription>Soft depth for focus.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Text size="sm" className="text-[var(--color-ink2)]">
                    Prefer for primary interactive panels.
                  </Text>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    Action
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </Section>

          <Section
            id="inputs"
            title="Input"
            description="Clear focus ring in ocre. Error state uses semantic destructive color."
          >
            <div className="grid max-w-md gap-4">
              <div>
                <VariantLabel>Default</VariantLabel>
                <Input placeholder="Email address" type="email" />
              </div>
              <div>
                <VariantLabel>Error</VariantLabel>
                <Input variant="error" placeholder="Invalid value" defaultValue="not-an-email" />
              </div>
              <div>
                <VariantLabel>Password</VariantLabel>
                <Input type="password" placeholder="Password" defaultValue="••••••••" />
              </div>
            </div>
          </Section>

          <Section
            id="typography"
            title="Text"
            description="Display sizes use Space Grotesk. Body sizes use Geist."
          >
            <div className="grid gap-3">
              <Text size="5xl" weight="bold">
                Display 5xl
              </Text>
              <Text size="4xl" weight="semibold">
                Display 4xl
              </Text>
              <Text size="3xl" weight="medium">
                Display 3xl
              </Text>
              <Text size="2xl" weight="semibold">
                Display 2xl
              </Text>
              <Text size="xl" weight="medium">
                Title xl
              </Text>
              <Text size="lg">Large body for supporting copy.</Text>
              <Text size="base">Base body for interface reading.</Text>
              <Text size="sm" className="text-[var(--color-ink2)]">
                Small for captions and metadata.
              </Text>
              <Text size="xs" className="text-[var(--color-ink3)]">
                Extra small for dense UI chrome.
              </Text>
              <p className="mt-2 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.18em] text-[var(--color-ocre-ink)]">
                Mono kickers
              </p>
            </div>
          </Section>

          <Section
            id="tokens"
            title="Color tokens"
            description="Foundation palette — paper, ink scale, one warm accent."
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { name: 'Paper', swatch: 'var(--color-paper)', ink: 'var(--color-encre)', border: true },
                { name: 'Surface', swatch: 'var(--color-surface)', ink: 'var(--color-encre)', border: true },
                { name: 'Encre', swatch: 'var(--color-encre)', ink: 'var(--color-surface)' },
                { name: 'Ink 2', swatch: 'var(--color-ink2)', ink: 'var(--color-surface)' },
                { name: 'Ink 3', swatch: 'var(--color-ink3)', ink: 'var(--color-surface)' },
                { name: 'Line', swatch: 'var(--color-line)', ink: 'var(--color-encre)', border: true },
                { name: 'Ocre', swatch: 'var(--color-ocre)', ink: 'var(--color-on-ocre)' },
                { name: 'Ocre ink', swatch: 'var(--color-ocre-ink)', ink: 'var(--color-surface)' },
              ].map((token) => (
                <div
                  key={token.name}
                  className="flex h-28 flex-col justify-between rounded-2xl p-4"
                  style={{
                    background: token.swatch,
                    color: token.ink,
                    border: token.border ? '1px solid var(--color-line)' : undefined,
                  }}
                >
                  <span className="font-[family-name:var(--font-display)] text-sm font-semibold">
                    {token.name}
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider opacity-70">
                    token
                  </span>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}
