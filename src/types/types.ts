export interface CurrentConditions {
  temp: number
  apparentTemp?: number
  observationDate: string
  dewPoint: number
  humidity: number
  windSpeed: number
  windGust: number
  description: string
}

export type Providers = 'nws' | 'open-meteo'
