import { GovApi } from '$server/providers/gov-api/adapter'
import { NWS } from '$server/providers/nws/adapter'
import { OpenMeteo } from '$server/providers/open-meteo/adapter'

import type { CurrentConditions } from '../types/types'

interface ResponseBody {
  nws: CurrentConditions | undefined
  'open-meteo': CurrentConditions | undefined
  'gov-api': CurrentConditions | undefined
}

export const load = async (): Promise<ResponseBody> => {
  return {
    nws: await NWS.currentConditions(),
    'open-meteo': await OpenMeteo.currentConditions(),
    'gov-api': await GovApi.currentConditions(),
  }
}
