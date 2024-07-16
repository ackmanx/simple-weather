export interface CurrentConditions {
  temp: number | null
  apparentTemp?: number | null
  observationDate: string
  dewPoint: number | null
  humidity: number | null
  windSpeed: number | null
  windGust: number | null
  description: string
}

export type Providers = 'nws' | 'open-meteo' | 'gov-api'
