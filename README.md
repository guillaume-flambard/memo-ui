# @memo-ui

Design system personnel avec âme - precision + warmth, pour shipper rapidement et me faire remarquer.

## Concept central

**"L'ingénieur qui comprend le design"**

- La précision technique meeting l'émotion humaine
- Alternate entre "rigueur système" et "liberté créative"
- Design systems that feel human

## Stack

- **React 19** + **Next.js 16**
- **Tailwind CSS v4** (PostCSS)
- **Turborepo** (monorepo)
- **pnpm** (workspaces)
- **TypeScript** (strict mode)
- **GSAP** (cinematic motion)
- **Motion** (micro-interactions)
- **Storybook 8** (CSF 3 docs)

## Architecture

```
@memo-ui/
├─ apps/
│  ├─ docs/              # Storybook 8
│  ├─ playground/        # Next.js sandbox
│  └─ brand/             # Brand showcase
├─ packages/
│  ├─ core/              # Tokens + Tailwind v4 (NO JSX)
│  ├─ react/             # React components
│  ├─ utils/             # cn(), composeRefs, GSAP wrappers
│  ├─ motion/            # GSAP + Motion primitives
│  ├─ typography/        # Space Grotesk/Geist system
│  └─ brand/             # Logo, voice layer
└─ agent/                # Voice/messaging pour AI agents
```

## Status

- Phase 1 - Core Foundation - complete
- Phase 2 - Primitives Vague 1 - complete

- [x] Architecture setup (Turborepo + pnpm)
- [x] Design tokens (colors, typography, spacing, radius, shadows, motion)
- [x] Tailwind CSS v4 config with @theme + component tokens (badge, divider, icon)
- [x] Voice layer (positioning, audience, messaging, voice, concepts, differentiation)
- [x] Core utilities (cn(), keyboardKeys)
- [x] GSAP wrappers (gsapFadeIn, gsapRiseIn, gsapSunIn, gsapStagger)
- [x] Motion primitives (motionTiming, motionVariants, prefersReducedMotion)
- [x] Button, Card, Input, Text, Stack
- [x] Icon, Badge, Divider, Grid
- [x] Playground app (Next.js 16)
- [x] Storybook docs (`apps/docs`, CSF 3 + addon a11y)
- [ ] Brand assets (logo)
- [ ] 5 theme presets
- [ ] Vague 2: Modal, Tabs, Select, Tooltip

## Progress

- **Colors**: largo-ai heritage (paper + ink) + ocre accent (Alan Chester style)
- **Typography**: Space Grotesk (display) + Geist (sans) + Geist Mono (mono)
- **Spacing**: 4px base unit
- **Radius**: soft scale through pill
- **React package**: 9 primitives
- **Docs**: `pnpm storybook` → stories in `apps/docs/stories/{components,layout}/`
- **Tests**: `pnpm --filter @memo-ui/react test` → `packages/react/tests/{components,layout}/`

## Next steps

1. Brand assets (logo @memo-ui)
2. Vague 2 composed components (Modal, Tabs, Select, Tooltip)
3. 5 theme presets

## License

MIT
