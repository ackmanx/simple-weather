// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { NormalizedCurrentConditions } from './types/types'

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageState {}
    // interface Platform {}
    interface PageData {
      'gov-api': NormalizedCurrentConditions
      nws: NormalizedCurrentConditions
      'open-meteo': NormalizedCurrentConditions
    }
  }
}

// Declare svg so TS doesn't barf when I try to use it in an image element
declare module '*.svg' {
  const content: string
  export default content
}

export {}
