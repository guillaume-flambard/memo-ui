# @memo-ui

Design system personnel avec âme — precision + warmth, pour shipper rapidement et me faire remarquer.

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

## Architecture

```
@memo-ui/
├─ apps/
│  ├─ docs/              # Storybook 10
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

🚧 Phase 1 — Core Foundation (Weekend) — 90% complete
🚧 Phase 2 — Primitives (Week 1) — 40% complete

- [x] Architecture setup (Turborepo + pnpm)
- [x] Design tokens (colors, typography, spacing, radius, shadows, motion)
- [x] Tailwind CSS v4 config with @theme
- [x] Voice layer (positioning, audience, messaging, voice, concepts, differentiation)
- [x] Core utilities (cn(), keyboardKeys)
- [x] GSAP wrappers (gsapFadeIn, gsapRiseIn, gsapSunIn, gsapStagger)
- [x] Motion primitives (motionTiming, motionVariants, prefersReducedMotion)
- [x] Button component (primary, secondary, ghost, outline variants)
- [x] Card component (default, outlined, elevated variants)
- [x] Card subcomponents (Header, Title, Description, Content, Footer)
- [x] Input component (default, error variants)
- [x] Text component (size, weight props)
- [x] Stack component (flexbox layout with wrap)
- [x] Playground app (Next.js 16, running on localhost:3001)
- [ ] Brand assets (logo)
- [ ] 5 theme presets
- [ ] Grid component
- [ ] Badge component
- [ ] Divider component

## Progress

- **Core package**: Design tokens defined (TypeScript + CSS variables)
- **Colors**: largo-ai heritage (paper + ink) + ocre accent (Alan Chester style)
- **Typography**: Space Grotesk (display) + Geist (sans) + Geist Mono (mono)
- **Spacing**: 4px base unit
- **Radius**: 8, 12, 16, 999 (pill)
- **Shadows**: Subtle elevation + card/hover special shadows
- **Motion**: Linear-style timing (120-180ms micro, 700ms cinematic)
- **Tailwind CSS v4**: @theme directive with light/dark mode support
- **Voice layer**: Jon Neylon-style agent-ready brand encoding
- **Utils package**: cn() class merger, keyboard navigation utilities
- **Motion package**: GSAP cinematic animations + reduced motion support
- **React package**: 5 primitives (Button, Card, Input, Text, Stack)
- **Playground**: Next.js 16 dev server running on localhost:3001 with full demo

## Next steps

1. Créer brand assets (logo @memo-ui)
2. Créer Grid component
3. Créer Badge component
4. Créer Divider component
5. Setup Storybook for documentation
6. 5 theme presets

## License

MIT
