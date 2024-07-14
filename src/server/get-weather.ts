import { NWS, OpenMeteo, type Providers } from '$server/weather-api-adapters'
import type { CurrentConditions } from '../types/types'

export async function getCurrentConditions(
  provider: Providers
): Promise<CurrentConditions | undefined> {
  if (provider === 'nws') {
    return await NWS.currentConditions()
  }

  if (provider === 'open-meteo') {
    return await OpenMeteo.currentConditions()
  }

  return undefined
}
