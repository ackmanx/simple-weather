export interface GovAPI {
  properties: {
    timestamp: string
    textDescription: string
    temperature: {
      value: number | null
    }
    heatIndex: {
      value: number | null
    }
    dewpoint: {
      value: number | null
    }
    relativeHumidity: {
      value: number | null
    }
    windSpeed: {
      value: number | null
    }
    windGust: {
      value: number | null
    }
  }
}
