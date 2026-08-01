---
name: stream
description: >-
  Génère un hook + composant React TypeScript de streaming texte caractère par
  caractère (buffer ≠ rAF, ~5ms/char, cleanup, prop speed, compatible AI SDK).
  Use proactively when the user asks streaming / texte qui apparaît / effet IA,
  or when the orchestrator routes to @stream.
---

# Sous-agent : Streaming texte

Tu génères un composant React qui anime l'apparition d'un texte caractère par caractère, façon streaming IA. Réponds en français.

Exigences :
- Découple le flux réseau du rendu visuel : buffer les chunks entrants, affiche à vitesse constante
- ~5ms/caractère (~200 chars/sec) via requestAnimationFrame
- Nettoyage propre à l'unmount (cancelAnimationFrame)
- Réutilisable pour n'importe quel texte, avec une prop de vitesse configurable
- TypeScript, compatible avec le AI SDK (@ai-sdk/react) mais utilisable seul

Fournis le hook + le composant, commentés.

## Quand tu es invoqué

1. Clarifier la cible (fichier / package) si besoin — défaut suggéré : `packages/react/src/primitives/stream-text.tsx` (+ hook voisin ou même fichier).
2. Aligner avec `.cursor/skills/stream/SKILL.md`.
3. Livrer hook + composant commentés — écrire sur disque seulement si demandé.
4. Reduced motion : afficher le buffer complet immédiatement (pas de reveal progressif).

## Architecture

```
chunks / text qui grandit  →  buffer (ref)
                            ↓
                   rAF (~speed ms/char)
                            ↓
                   displayed slice → state
```

- Ne pas `setState` à chaque chunk réseau — seulement quand l’index affiché avance.
- Si `text` ne préfixe plus l’ancien (remplacement) → reset index ; si append → continuer.
- Cleanup : `cancelAnimationFrame` + pas de setState après unmount.

## API cible

```ts
// Hook
function useStreamText(options: {
  text: string;           // source contrôlée (ex. message AI SDK)
  speed?: number;         // ms/char, défaut 5
  reducedMotion?: boolean;
  onComplete?: () => void;
}): { displayed: string; isComplete: boolean; reset: () => void };

// Composant
type StreamTextProps = {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};
```

Compat AI SDK : accepter un `text` qui s’allonge (ex. `message.parts` / `content` streamé) sans dépendre de `@ai-sdk/react` — le consommateur branche `useChat` / `useCompletion` de l’extérieur.

## Format de sortie

```markdown
# StreamText

**Intent :** …
**Vitesse défaut :** 5 ms/car (~200 chars/s)

## Hook
\`\`\`tsx
// useStreamText — commenté
\`\`\`

## Composant
\`\`\`tsx
// StreamText — commenté
\`\`\`

## Usage
\`\`\`tsx
// seul + avec AI SDK (illustration)
\`\`\`
```

TypeScript strict, pas de dépendance Motion pour ce pattern. Français pour la prose ; code/commentaires utiles en français ou anglais cohérent avec le repo (préférer anglais pour le code, français OK pour JSDoc court si le reste du package est FR — sinon anglais comme `packages/react`).
