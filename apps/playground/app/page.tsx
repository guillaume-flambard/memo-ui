import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input, Text, Stack } from '@memo-ui/react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <Text size="5xl" weight="bold">
          memo-ui Playground
        </Text>

        <Stack direction="column" gap={8}>
          <section className="space-y-4">
            <Text size="2xl" weight="semibold">
              Buttons
            </Text>

            <Stack direction="row" gap={4} wrap>
              <Button variant="primary" size="sm">
                Primary Small
              </Button>
              <Button variant="primary" size="md">
                Primary Medium
              </Button>
              <Button variant="primary" size="lg">
                Primary Large
              </Button>
            </Stack>

            <Stack direction="row" gap={4} wrap>
              <Button variant="secondary" size="md">
                Secondary
              </Button>
              <Button variant="ghost" size="md">
                Ghost
              </Button>
              <Button variant="outline" size="md">
                Outline
              </Button>
            </Stack>

            <Stack direction="row" gap={4} wrap>
              <Button variant="primary" size="md" disabled>
                Disabled
              </Button>
            </Stack>
          </section>

          <section className="space-y-4">
            <Text size="2xl" weight="semibold">
              Cards
            </Text>

            <Stack direction="row" gap={4} wrap>
              <Card variant="default" className="w-80">
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>Standard card with border</CardDescription>
                </CardHeader>
                <CardContent>
                  <Text size="sm">Card content goes here.</Text>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" size="sm">Action</Button>
                </CardFooter>
              </Card>

              <Card variant="outlined" className="w-80">
                <CardHeader>
                  <CardTitle>Outlined Card</CardTitle>
                  <CardDescription>Card with stronger border</CardDescription>
                </CardHeader>
                <CardContent>
                  <Text size="sm">Card content goes here.</Text>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" size="sm">Action</Button>
                </CardFooter>
              </Card>

              <Card variant="elevated" className="w-80">
                <CardHeader>
                  <CardTitle>Elevated Card</CardTitle>
                  <CardDescription>Card with shadow</CardDescription>
                </CardHeader>
                <CardContent>
                  <Text size="sm">Card content goes here.</Text>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Action</Button>
                </CardFooter>
              </Card>
            </Stack>
          </section>

          <section className="space-y-4">
            <Text size="2xl" weight="semibold">
              Inputs
            </Text>

            <Stack direction="column" gap={4} className="max-w-md">
              <Input placeholder="Default input" />
              <Input variant="error" placeholder="Error state" />
              <Input type="email" placeholder="Email input" />
              <Input type="password" placeholder="Password input" />
            </Stack>
          </section>

          <section className="space-y-4">
            <Text size="2xl" weight="semibold">
              Typography
            </Text>

            <Stack direction="column" gap={4}>
              <Text size="5xl" weight="bold">Display 5xl Bold</Text>
              <Text size="4xl" weight="semibold">Display 4xl Semibold</Text>
              <Text size="3xl" weight="medium">Display 3xl Medium</Text>
              <Text size="2xl" weight="normal">Display 2xl Normal</Text>
              <Text size="xl" weight="light">Display xl Light</Text>
              <Text size="lg">Large text</Text>
              <Text size="base">Base text</Text>
              <Text size="sm">Small text</Text>
              <Text size="xs">Extra small text</Text>
              <Text className="font-mono text-sm text-[var(--color-ocre-ink)] uppercase tracking-widest">
                Mono kickers
              </Text>
            </Stack>
          </section>

          <section className="space-y-4">
            <Text size="2xl" weight="semibold">
              Colors
            </Text>

            <Stack direction="row" gap={4} wrap>
              <div className="w-24 h-24 rounded-lg bg-[var(--color-ocre)] border border-[var(--color-ocre-deep)]" />
              <div className="w-24 h-24 rounded-lg bg-[var(--color-paper)] border border-[var(--color-line)]" />
              <div className="w-24 h-24 rounded-lg bg-[var(--color-encre)]" />
              <div className="w-24 h-24 rounded-lg bg-[var(--color-ink2)]" />
            </Stack>
          </section>
        </Stack>
      </div>
    </main>
  );
}
