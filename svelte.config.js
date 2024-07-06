import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Tell Svelte to pre-process TS scripts before building, because Svelte only understands JS
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      $db: 'src/db',
      $images: 'src/images',
      $routes: 'src/routes',
      $server: 'src/server',
      $shared: 'src/shared',
      $theme: 'src/theme',
      $types: 'src/types.ts',
      $utils: 'src/utils',
    },
  },
}

export default config
