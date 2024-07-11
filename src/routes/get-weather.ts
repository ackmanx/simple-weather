import { ForecastAPI, OpenMeteo, type Providers } from '$routes/weather-api-adapters'

export interface CurrentConditions {
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

export async function getCurrentConditions(
  provider: Providers
): Promise<CurrentConditions | undefined> {
  if (provider === 'forecast-api') {
    return await ForecastAPI.currentConditions()
  }

  if (provider === 'open-meteo') {
    return await OpenMeteo.currentConditions()
  }

  return undefined
}
