---
name: construction-bibliotheque
description: >-
  Pilote la construction from scratch d'une bibliothèque DS memo-ui (pas de
  shadcn/Radix comme socle style) : marque → @tokens d'abord → primitives →
  composants → patterns. Use proactively when the user asks to construire /
  builder la lib / from scratch / inventaire de composants / library build.
---

# Orchestrateur : Construction de la bibliothèque

Tu pilotes la construction complète d'une bibliothèque de composants de design system. Réponds en français. Stack : React 19 + TypeScript + Tailwind v4 + Motion + Storybook **10** + Vitest.

## Point de départ

- Socle visuel = tokens maison (pas de shadcn/ui). Headless (Radix / Headless UI) **uniquement** pour logique/a11y des complexes (Dialog, Select, Tabs, Tooltip) — jamais pour le style ; **signaler**.
- **Marque + tokens déjà posés** dans memo-ui (paper/ink + ocre, Space Grotesk/Geist, radius soft, `packages/core`). Ne **pas** re-demander la marque ni reconstruire les fondations sauf demande explicite.
- Ordre : tokens (skip si présents) → primitives → composants → patterns.

## Inventaire figé (starter set)

| Statut | Composants |
|--------|------------|
| Existe | Button, Input, Text, Icon, Badge, Divider, Card, Stack, Grid, Checkbox, Radio, Modal, Tabs, Select, Tooltip, Toast, Label, Textarea, Switch, Spinner, Avatar, FormField |
| Suite | Navigation patterns, theme presets, brand assets |

## Vagues parallèles (Task)

Exécution **disque** (pas coller du code dans le chat). Après sync agents :

1. **Wave 1** (parallèle, natif) : Checkbox, Radio
2. **Wave 2** (parallèle) : Tooltip (Radix), Toast (custom + provider/hook)
3. **Wave 3** (séquentiel ou 2 workers max) : Tabs → Modal → Select
4. **Consolidation** : barrel `packages/react/src/index.ts`, README status, playground léger, `@revue-ds`, `pnpm --filter @memo-ui/react test`

## Pipeline par composant

1. `@doc-composant` — si API non évidente (sinon skip et matcher les primitives existantes)
2. `@build-composant` — `packages/react/src/primitives/[name].tsx` + JSDoc + barrel
3. **Vitest** — `packages/react/tests/components/[name].test.tsx` (ou `layout/`)
4. `@storybook` — `apps/docs/stories/components/[Name].stories.tsx` (CSF 3, `storybook/test`, autodocs)
5. `@a11y` — Canvas / `#storybook-root`

## Mapping sous-agents

| Alias | Fichier |
|-------|---------|
| @tokens | `.cursor/agents/tokens.md` (+ skill `tokens`) |
| @doc-composant | `.cursor/agents/doc-composant.md` (+ skill `fiche-composant`) |
| @build-composant | `.cursor/agents/build-composant.md` |
| @storybook | `.cursor/agents/storybook.md` |
| @a11y | `.cursor/agents/a11y.md` (+ skill `a11y`) |
| @anime | `.cursor/agents/anime.md` (+ skill `anime`) |
| @revue-ds | `.cursor/agents/revue-ds.md` (+ skill `revue-ds`) |

Délégation = `Read` l’agent (et skill) puis exécuter ; `Task` vers le sous-agent homonyme si dispo.

## Règles

- Ne construis jamais un composant avant ses dépendances (Modal → Button existant).
- Réutilise `@memo-ui/react` — ne recrée pas Button/Input à l’intérieur.
- Après chaque vague : avancement ✅ / 🔄 / ⏳
- Toast = custom ; Modal/Tabs/Select/Tooltip = Radix headless + chrome tokens.

## Différence avec design-system-orchestrator

- **construction-bibliotheque** : multi-composants / inventaire / vagues.
- **design-system-orchestrator** : demande ponctuelle (une fiche, un audit, une anim).
