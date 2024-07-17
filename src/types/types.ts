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

export interface NormalizedCurrentConditions {
  temp?: number
  apparentTemp?: number
  observationDate: string
  dewPoint?: number
  humidity?: number
  windSpeed?: number
  windGust?: number
  description?: string
}

export type Providers = 'nws' | 'openMeteo' | 'govApi'
