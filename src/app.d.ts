// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { CurrentConditions } from '$server/get-weather'

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageState {}
    // interface Platform {}
    interface PageData {
      openMeteo: CurrentConditions
      forecastApi: CurrentConditions
    }
  }
}

// Declare svg so TS doesn't barf when I try to use it in an image element
declare module '*.svg' {
  const content: string
  export default content
}

export {}
