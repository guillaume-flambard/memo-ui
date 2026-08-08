# Run log — memo-ui (audit remediation, 2026-08-08)

## Scope
Fix the P1 audit + P2 lint findings from the sweep. No feature work.

| check | result |
|---|---|
| stack | ts-react — pnpm+turbo monorepo, React 19 + Tailwind v4 + Storybook 10 + Vitest |
| gates | typecheck:ok (4 pkgs tsc clean) · tests:64/64 (Vitest, @memo-ui/react) · lint:6/6 pkgs · build:6/6 (incl. next build) |
| verdict | green (P1 + P2 cleared) |

## Audit (P1) — 4 high → 0 high
- `pnpm audit` before: 4 high (postcss×2, sharp, nanoid) + 3 moderate.
- `pnpm audit --fix update` auto-fixed **nanoid** (patched 3.3.17).
- **postcss + sharp** came from `next` (apps/playground): next@16.2.12 pins postcss@8.4.31 and sharp@^0.34.5 — both vulnerable.
  Attempted a within-range minor bump: `pnpm --filter @memo-ui/playground update next` → **next@16.3.0**, which ships
  postcss@8.5.23 (patched) and sharp@^0.35.3 (patched, ≥0.35.0 gate). Turbo build stays green → kept.
- Remaining after fix: **1 moderate** — `valibot ≤1.4.1` (GHSA-5qjj-4xww-7phc), dev-only, deep transitive via
  `apps/docs > @storybook/addon-mcp > @storybook/mcp > @tmcp/adapter-valibot@0.1.6 > valibot@1.2.0`.
  `@tmcp/adapter-valibot@0.1.6` is already latest — no safe upgrade path without a breaking storybook change.
  Documented, not force-fixed.
- `pnpm-workspace.yaml` gained pnpm's `minimumReleaseAgeExclude` entries (added by `pnpm audit --fix`) so the patched
  versions install immediately. Committed as-is.

## Lint wiring (P2) — fixed
- Root cause: turbo.json defines a `lint` task and root has `"lint": "turbo run lint"`, but **no package defined a `lint`
  script** → turbo ran 0 tasks ("No tasks were executed as part of this run").
- Fix: installed `eslint` + `@eslint/js` + `typescript-eslint` (root devDeps), added root `eslint.config.mjs`
  (typescript-eslint recommended, ignores node_modules/dist/.next/coverage/storybook-static), and added `"lint": "eslint ."`
  to all 6 packages (core, motion, utils, react, docs, playground).
- Real errors surfaced & fixed (minimal): 6× `@typescript-eslint/no-empty-object-type` in
  `packages/react/src/primitives/breadcrumb.tsx` and `toast.tsx` — converted `interface XProps extends Base {}` →
  `type XProps = Base`.
- `pnpm lint` now: **6/6 tasks successful**.

## Evidence
- Gates run 2026-08-08 11:26. Audit after fix: 1 moderate, 0 high.
- Committed + pushed to `origin/main`.
