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
      currentConditions: CurrentConditions
    }
  }
}

export {}
