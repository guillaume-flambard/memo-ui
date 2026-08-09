'use client';

import React from 'react';

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
  Icon,
  Badge,
  Divider,
  Grid,
  Checkbox,
  Radio,
  RadioGroup,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Modal,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Tooltip,
  TooltipProvider,
  ToastProvider,
  ToastViewport,
  useToast,
  Label,
  Textarea,
  Switch,
  Spinner,
  Avatar,
  FormField,
  Link,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Pagination,
  Skeleton,
  Progress,
  Alert,
} from '@memo-ui/react';

const sections = [
  { id: 'buttons', label: 'Button' },
  { id: 'cards', label: 'Card' },
  { id: 'inputs', label: 'Input' },
  { id: 'forms', label: 'Forms' },
  { id: 'feedback', label: 'Feedback' },
  { id: 'chrome', label: 'Chrome' },
  { id: 'overlays', label: 'Overlays' },
  { id: 'typography', label: 'Text' },
  { id: 'layout', label: 'Layout' },
  { id: 'badge', label: 'Badge' },
  { id: 'tokens', label: 'Tokens' },
] as const;


function PaginationDemo() {
  const [page, setPage] = React.useState(2);
  return <Pagination page={page} pageCount={8} onPageChange={setPage} />;
}

function ToastTriggers() {
  const { toast } = useToast();
  return (
    <Stack direction="row" gap={2} wrap>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => toast({ title: 'Saved', description: 'Playground toast.' })}
      >
        Toast
      </Button>
      <ToastViewport />
    </Stack>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  );
}

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
    <TooltipProvider delayDuration={200}>
      <ToastProvider>
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
                className="rounded-lg px-2.5 py-1.5 text-sm text-[var(--color-ink2)] transition-colors duration-150 hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent-ink)]"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent-ink)]">
            Design system
          </p>
          <Text as="h1" size="5xl" weight="bold" className="leading-[1.05]">
            Precision with warmth
          </Text>
          <Text size="lg" className="mt-5 text-[var(--color-ink2)]">
            Paper, ink, and a single accent accent. Components for shipping fast without looking generic.
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

              <Card variant="surface">
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
            description="Clear focus ring in accent. Error state uses semantic destructive color."
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
            id="forms"
            title="Forms"
            description="FormField, Label, Textarea, Switch, Checkbox, Radio, Select, and Tabs."
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="grid gap-4">
                <VariantLabel>FormField · Textarea · Switch</VariantLabel>
                <FormField label="Email" hint="Work address preferred" required>
                  <Input type="email" placeholder="you@memo.dev" />
                </FormField>
                <FormField label="Bio" hint="A sentence or two">
                  <Textarea placeholder="Tell us about you" />
                </FormField>
                <Switch label="Marketing emails" defaultChecked />
                <Checkbox label="Email digests" defaultChecked />
                <RadioGroup aria-label="Plan">
                  <Radio value="free" label="Free" name="pg-plan" defaultChecked />
                  <Radio value="pro" label="Pro" name="pg-plan" />
                </RadioGroup>
                <Select defaultValue="pro">
                  <SelectTrigger aria-label="Plan select" className="max-w-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                    <SelectItem value="team">Team</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-6">
                <div>
                  <VariantLabel>Label + Input</VariantLabel>
                  <div className="flex max-w-xs flex-col gap-1.5">
                    <Label htmlFor="pg-nick">Nickname</Label>
                    <Input id="pg-nick" defaultValue="memo" />
                  </div>
                </div>
                <div>
                  <VariantLabel>Tabs</VariantLabel>
                  <Tabs defaultValue="a">
                    <TabsList aria-label="Playground tabs">
                      <TabsTrigger value="a">One</TabsTrigger>
                      <TabsTrigger value="b">Two</TabsTrigger>
                    </TabsList>
                    <TabsContent value="a">
                      <Text size="sm" className="text-[var(--color-ink2)]">
                        First panel
                      </Text>
                    </TabsContent>
                    <TabsContent value="b">
                      <Text size="sm" className="text-[var(--color-ink2)]">
                        Second panel
                      </Text>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </Section>

          <Section
            id="feedback"
            title="Spinner · Avatar"
            description="Loading feedback and user identity primitives."
          >
            <Stack direction="row" gap={6} wrap className="items-center">
              <Stack direction="row" gap={3} className="items-center">
                <Spinner size="sm" label="Small" />
                <Spinner size="md" label="Loading" />
                <Spinner size="lg" label="Large" />
              </Stack>
              <Stack direction="row" gap={3} className="items-center">
                <Avatar size="sm" fallback="SM" />
                <Avatar size="md" fallback="Memo UI" />
                <Avatar size="lg" fallback="Guillaume Flambard" />
              </Stack>
            </Stack>
          </Section>

          <Section
            id="chrome"
            title="Navigation · chrome"
            description="Link, Breadcrumb, Pagination, Skeleton, Progress, and Alert."
          >
            <div className="grid gap-10">
              <div>
                <VariantLabel>Link · Breadcrumb</VariantLabel>
                <Stack gap={4}>
                  <Text size="sm">
                    See the{' '}
                    <Link href="#tokens" underline="always">
                      token swatches
                    </Link>{' '}
                    or an{' '}
                    <Link href="https://example.com" external>
                      external page
                    </Link>
                    .
                  </Text>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#buttons">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#forms">Forms</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Chrome</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </Stack>
              </div>
              <div>
                <VariantLabel>Pagination · Progress</VariantLabel>
                <Stack gap={4}>
                  <PaginationDemo />
                  <Progress value={62} label="Demo progress" className="max-w-md" />
                </Stack>
              </div>
              <div>
                <VariantLabel>Skeleton · Alert</VariantLabel>
                <Stack gap={4} className="max-w-md">
                  <Stack direction="row" gap={3} className="items-center">
                    <Skeleton variant="circular" />
                    <Stack gap={2} className="flex-1">
                      <Skeleton className="w-full" />
                      <Skeleton size="sm" className="w-2/3" />
                    </Stack>
                  </Stack>
                  <Alert tone="info" title="Chrome wave" dismissible onDismiss={() => undefined}>
                    Link, Breadcrumb, Pagination, Skeleton, Progress, Alert.
                  </Alert>
                </Stack>
              </div>
            </div>
          </Section>

          <Section
            id="overlays"
            title="Overlays"
            description="Modal, Tooltip, and Toast — Radix for behavior where noted; toast is custom."
          >
            <Stack direction="row" gap={3} wrap className="items-center">
              <Modal
                trigger={<Button size="sm">Open modal</Button>}
                title="Archive?"
                description="Moves the item to archive."
              />
              <Tooltip content="Scarce accent punctuation">
                <Button size="sm" variant="secondary">
                  Tooltip
                </Button>
              </Tooltip>
              <ToastTriggers />
            </Stack>
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
              <p className="mt-2 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.18em] text-[var(--color-accent-ink)]">
                Mono kickers
              </p>
            </div>
          </Section>

          <Section
            id="layout"
            title="Icon · Divider · Grid"
            description="Icon wraps SVG children. Divider marks sections. Grid complements Stack."
          >
            <div className="grid gap-10">
              <div>
                <VariantLabel>Icon · sizes and color</VariantLabel>
                <Stack direction="row" gap={4} className="items-center">
                  <Icon size="sm" color="ink2">
                    <SparkleIcon />
                  </Icon>
                  <Icon size="md" color="encre">
                    <SparkleIcon />
                  </Icon>
                  <Icon size="lg" color="accent" label="Accent">
                    <SparkleIcon />
                  </Icon>
                </Stack>
              </div>
              <div>
                <VariantLabel>Divider</VariantLabel>
                <div className="max-w-md space-y-4">
                  <Divider />
                  <Divider label="Or continue with" />
                </div>
              </div>
              <div>
                <VariantLabel>Grid · 3 columns</VariantLabel>
                <Grid columns={3} gap={4}>
                  {['A', 'B', 'C'].map((cell) => (
                    <Card key={cell} variant="outlined">
                      <CardHeader>
                        <CardTitle>Cell {cell}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Text size="sm" className="text-[var(--color-ink2)]">
                          Tokenized gap, paper surface.
                        </Text>
                      </CardContent>
                    </Card>
                  ))}
                </Grid>
              </div>
            </div>
          </Section>

          <Section
            id="badge"
            title="Badge"
            description="Compact labels. Accent is punctuation — use sparingly."
          >
            <Stack direction="row" gap={2} wrap className="items-center">
              <Badge>Default</Badge>
              <Badge variant="accent">Pivot</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="success">Live</Badge>
              <Badge variant="warning">Soon</Badge>
              <Badge variant="error">Blocked</Badge>
              <Badge size="sm">Small</Badge>
            </Stack>
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
                { name: 'Accent', swatch: 'var(--color-accent)', ink: 'var(--color-on-accent)' },
                { name: 'Accent ink', swatch: 'var(--color-accent-ink)', ink: 'var(--color-surface)' },
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
      </ToastProvider>
    </TooltipProvider>
  );
}
