// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageState {}
    // interface Platform {}
    interface PageData {
      heatIndex: string
      temp: string
      description: string
      weatherIcon: string
      observationDate: string
      dewPoint: string
      humidity: string
      windSpeed: string
      windGust: string
      windChill: string
    }
  }
}

export {}
