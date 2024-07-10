# Simple Weather

## Sources
### Weather.gov API Docs
https://www.weather.gov/documentation/services-web-api

### Current conditions
Forecast API: https://forecast.weather.gov/MapClick.php?lat=45.0632&lon=-93.2052&FcstType=json
Weather API: https://api.weather.gov/stations/KANE/observations/latest?require_qc=false
* No longer using this one because it updates much less frequently, sometimes hours apart

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
