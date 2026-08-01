# AGENTS.md — memo-ui

Design system: React 19 + Tailwind v4 + Storybook 10 + Vitest.

Respond in French when chatting with Guillaume; keep code, JSDoc, and Storybook docs in English.

## Inventory

| Status | Components |
|--------|------------|
| Done | Button, Input, Text, Icon, Badge, Divider, Card, Stack, Grid, Checkbox, Radio, Modal, Tabs, Select, Tooltip, Toast, Label, Textarea, Switch, Spinner, Avatar, FormField, Link, Breadcrumb, Pagination, Skeleton, Progress, Alert |
| Next | Theme presets, brand assets, denser navigation patterns |

Brand and tokens are already set (paper/ink + ocre, Space Grotesk/Geist, soft radius). Do **not** re-ask for brand or rebuild foundation tokens.

## Multi-component builds

Use `.cursor/agents/construction-bibliotheque.md` (not ad-hoc one-offs). Pipeline per component:

1. Spec (`@doc-composant` / fiche) when API is unclear
2. Code (`@build-composant`) → `packages/react/src/primitives/`
3. Vitest → `packages/react/tests/{components,layout}/`
4. Stories (`@storybook`) → `apps/docs/stories/{components,layout}/`
5. A11y pass (`@a11y`) on Canvas

Deliverable checklist: JSDoc props + barrel export + Vitest + CSF autodocs + `parameters.docs.description`.

Headless Radix only for Modal / Tabs / Select / Tooltip (behavior/a11y). Style = tokens only. Toast = custom.

## Storybook MCP (required when Storybook is running)

Server: **`memo-ui-storybook`** → http://localhost:6006/mcp

1. `list-all-documentation` / `get-documentation` before inventing props
2. Prefer documented props and story examples only
3. `get-storybook-story-instructions` before writing/updating CSF
4. After UI/story changes, run story tests when available; fix real failures

- UI: http://localhost:6006
- Manifests: http://localhost:6006/manifests/components.html
- Foundation MDX: Docs/Introduction, Getting started, Tokens, Accessibility, Agents & MCP

## Local commands

```bash
pnpm storybook                                          # Storybook :6006
pnpm --filter @memo-ui/playground exec next dev -p 3001 # Playground
pnpm --filter @memo-ui/react test                       # Unit tests
```

## Layout

| Path | Contents |
| --- | --- |
| `packages/core/` | Tokens + `tailwind.css` |
| `packages/react/src/primitives/` | Components |
| `packages/react/tests/{components,layout}/` | Vitest |
| `apps/docs/stories/{docs,components,layout}/` | MDX + CSF |
| `apps/docs/.storybook/` | SB config, preview CSS (`@source` monorepo) |
| `.cursor/agents/` | DS agents (orchestrator, construction-bibliotheque, …) |

## Design rules (short)

- Tokens only — no hard-coded colors/spacing; no shadcn as style base
- Motion: opacity/transform; interactive < 300ms; reduced motion
- A11y: axe on `#storybook-root` (Canvas); Input needs accessible name; contrast via `*-ink` tokens
- New primitive: component + barrel + tests + stories + JSDoc props
