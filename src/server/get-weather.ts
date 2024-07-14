import { OpenMeteo, type Providers, nws } from '$server/weather-api-adapters'

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

export async function getCurrentConditions(
  provider: Providers
): Promise<CurrentConditions | undefined> {
  if (provider === 'forecast-api') {
    return await nws.currentConditions()
  }

  if (provider === 'open-meteo') {
    return await OpenMeteo.currentConditions()
  }

  return undefined
}
