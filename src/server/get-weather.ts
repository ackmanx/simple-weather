
import type { CurrentConditions, Providers } from '../types/types'
import { NWS } from '$server/providers/nws/adapter'
import { OpenMeteo } from '$server/providers/open-meteo/adapter'

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
