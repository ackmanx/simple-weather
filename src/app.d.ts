// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageState {}
    // interface Platform {}
    interface PageData {
      latestObservations: any
    }
  }
}

export {}
