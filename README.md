# @memo-ui

Personal design system: paper/ink + scarce ocre, Space Grotesk + Geist. Built to ship fast with a clear visual voice.

**"The engineer who gets design"** — system rigor meeting human warmth.

## Quick start

```bash
pnpm install

# Storybook (docs + a11y + MCP) → http://localhost:6006
pnpm storybook

# Playground (Next.js sandbox) → http://localhost:3001
pnpm --filter @memo-ui/playground exec next dev -p 3001

# Unit tests (Vitest + Testing Library)
pnpm --filter @memo-ui/react test
```

## Stack

| Layer | Choice |
| --- | --- |
| UI | React 19, TypeScript strict |
| Styling | Tailwind CSS v4 (`@theme` + CSS vars) |
| Monorepo | Turborepo + pnpm workspaces |
| Docs | Storybook **10** (CSF 3, autodocs, addon-a11y, addon-mcp) |
| Motion | Motion (micro) + GSAP wrappers (cinematic) |
| Tests | Vitest + Testing Library (`packages/react`) |

## Architecture

```
@memo-ui/
├─ apps/
│  ├─ docs/           # Storybook 10 + MDX foundation pages
│  ├─ playground/     # Next.js sandbox
│  └─ brand/          # Brand showcase (planned)
├─ packages/
│  ├─ core/           # Tokens + Tailwind v4 (no JSX)
│  ├─ react/          # Primitives + Vitest suite
│  ├─ utils/          # cn(), composeRefs, keyboard helpers
│  ├─ motion/         # GSAP + Motion primitives
│  ├─ typography/     # Space Grotesk / Geist
│  └─ brand/          # Logo, voice layer
└─ agent/             # Voice/messaging for AI agents
```

### Package map

| Package | Role |
| --- | --- |
| `@memo-ui/core` | Design tokens (`colors`, spacing, radius, shadows, motion) + `tailwind.css` |
| `@memo-ui/react` | Primitives: Button, Input, Text, Icon, Badge, Divider, Card, Stack, Grid, Checkbox, Radio, Modal, Tabs, Select, Tooltip, Toast, Label, Textarea, Switch, Spinner, Avatar, FormField |
| `@memo-ui/utils` | `cn()` and shared helpers |
| `@memo-ui/docs` | Storybook app (`apps/docs`) |

## Design tokens

Three levels: **Foundation → Semantic → Component**.

- Source of truth: `packages/core/src/tokens/` + `packages/core/tailwind.css`
- Brand: paper `#FAFBFC` + encre `#0E1320`, accent ocre used sparingly
- Text/icon on ocre washes: use `ocre-ink` / `*-ink` tokens (WCAG AA), not fill ocre alone
- Spacing: 4px base (`gap={4}` on Stack/Grid → `1rem`)
- Motion: opacity/transform only; interactive < 300ms; respect reduced motion

Never hardcode colors or one-off spacing. Prefer CSS vars / mapped Tailwind classes.

## Primitives

### Vague 1

| Component | Path | Notes |
| --- | --- | --- |
| Button | `primitives/button.tsx` | primary / secondary / ghost / outline; `loading` keeps accessible name via `sr-only` |
| Input | `primitives/input.tsx` | `variant="error"` sets `aria-invalid`; stories need `aria-label` (or label) |
| Text | `primitives/text.tsx` | display font from `xl` up |
| Icon | `primitives/icon.tsx` | wrapper only; `label` → semantic, else decorative |
| Badge | `primitives/badge.tsx` | ocre is scarce punctuation |
| Divider | `primitives/divider.tsx` | horizontal `<hr>`; labeled = two rules + text; vertical = `role=separator` |
| Card | `primitives/card.tsx` | Header / Title / Description / Content / Footer |
| Stack | `primitives/stack.tsx` | flex; `gap` via inline style (dynamic Tailwind-safe) |
| Grid | `primitives/grid.tsx` | CSS grid; `columns` 1–12 |

### Vague 2 (+ form)

| Component | Path | Notes |
| --- | --- | --- |
| Checkbox | `primitives/checkbox.tsx` | native + optional `label` |
| Radio / RadioGroup | `primitives/radio.tsx` | native radios with shared group context |
| Modal | `primitives/modal.tsx` | Radix Dialog (behavior); tokens for chrome |
| Tabs | `primitives/tabs.tsx` | Radix Tabs |
| Select | `primitives/select.tsx` | Radix Select; name the trigger |
| Tooltip | `primitives/tooltip.tsx` | Radix Tooltip + `TooltipProvider` |
| Toast | `primitives/toast.tsx` | custom `ToastProvider` / `useToast` / `ToastViewport` |

### Vague 3 (forms + feedback)

| Component | Path | Notes |
| --- | --- | --- |
| Label | `primitives/label.tsx` | `htmlFor` or wrap; `required` visual asterisk |
| Textarea | `primitives/textarea.tsx` | Input chrome; `variant="error"` → `aria-invalid` |
| Switch | `primitives/switch.tsx` | native checkbox + `role="switch"`; nested label only |
| Spinner | `primitives/spinner.tsx` | decorative vs labeled (`role="status"`); sizes |
| Avatar | `primitives/avatar.tsx` | image + initials fallback; sizes |
| FormField | `primitives/form-field.tsx` | Label + control + hint/error; a11y wiring |

Import from `@memo-ui/react`:

```tsx
import { Button, Stack, Text } from '@memo-ui/react';
```

## Storybook

- App: `apps/docs`
- Stories: `apps/docs/stories/{components,layout}/**/*.stories.tsx`
- Foundation MDX: `apps/docs/stories/docs/*.mdx` (Introduction, Getting started, Tokens, Accessibility, Agents & MCP)
- Preview CSS must `@source` monorepo packages so Tailwind sees primitive classes (`apps/docs/.storybook/preview.css`)
- A11y: axe scoped to `#storybook-root` via `parameters.a11y.context` (Canvas audits; Docs can false-positive on chrome)
- Disabled / loading states may intentionally skip `color-contrast` in story parameters

### Storybook MCP (agents)

With Storybook running:

| | |
| --- | --- |
| UI | http://localhost:6006 |
| MCP | http://localhost:6006/mcp |
| Manifests | http://localhost:6006/manifests/components.html |

Cursor: project `.cursor/mcp.json` + global server `memo-ui-storybook`. See `AGENTS.md`.

Agents must call MCP docs tools before inventing props or claiming a11y status.

## Testing

```
packages/react/tests/
  components/   # Button, Input, Badge, …
  layout/       # Stack, Grid
```

```bash
pnpm --filter @memo-ui/react test
```

Story `play` functions live in CSF stories (Interactions panel). Full `run-story-tests` via MCP needs addon-vitest browser wiring (partially installed; not required for unit tests).

## Monorepo CSS note

Tailwind v4 only emits classes it can see. Apps must `@source` `packages/react` (and stories) or utilities like `flex` / `h-10` never generate. Playground: `apps/playground/app/globals.css`. Docs: `.storybook/preview.css`.

## Status

- [x] Phase 1 — Core foundation (tokens, utils, motion wrappers)
- [x] Phase 2 — Vague 1 primitives + Storybook + playground + Vitest
- [x] Storybook 10 + MCP + foundation MDX
- [x] Vague 2 — Checkbox, Radio, Modal, Tabs, Select, Tooltip, Toast
- [x] Vague 3 — Label, Textarea, Switch, Spinner, Avatar, FormField
- [ ] Brand assets (logo)
- [ ] Theme presets
- [ ] Patterns: Navigation

## License

MIT
