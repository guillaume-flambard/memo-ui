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

🚧 Phase 1 — Core Foundation (Weekend) — 80% complete

- [x] Architecture setup (Turborepo + pnpm)
- [x] Design tokens (colors, typography, spacing, radius, shadows, motion)
- [x] Tailwind CSS v4 config with @theme
- [x] Voice layer (positioning, audience, messaging, voice, concepts, differentiation)
- [x] Core utilities (cn(), keyboardKeys)
- [ ] GSAP wrappers
- [ ] Motion primitives
- [ ] Brand assets (logo)
- [ ] 5 theme presets

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

## Next steps

1. Configurer GSAP wrappers (cinematic motion)
2. Créer Motion primitives (micro-interactions)
3. Créer brand assets (logo @memo-ui)
4. Démarrer primitives (Button, Card, Input, etc.)
5. Setup Storybook for documentation

## License

MIT
