# Simple Weather

## Intellij - Imports not showing up as errors if file not found

In these two files:
`node_modules/.pnpm/svelte@5.0.0-next.94/node_modules/svelte/types/index.d.ts`
`node_modules/.pnpm/svelte@5.0.0-next.94/node_modules/svelte/src/ambient.d.ts`

Comment out this module declaration:

```typescript
declare module '*.svelte' {
  export { SvelteComponent as default } from 'svelte'
}
```

I'm not sure what the right solution or cause of this issue is, but that works for my purposes right now.

## Svelte Ignore Template

Check Obsidian note `Svelte.md` for ignore comments
