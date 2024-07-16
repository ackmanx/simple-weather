import { GovApi } from '$server/providers/gov-api/adapter'
import { NWS } from '$server/providers/nws/adapter'
import { OpenMeteo } from '$server/providers/open-meteo/adapter'
import { normalize } from '$utils'

import type { NormalizedCurrentConditions } from '../types/types'

interface ResponseBody {
  nws: NormalizedCurrentConditions | undefined
  'open-meteo': NormalizedCurrentConditions | undefined
  'gov-api': NormalizedCurrentConditions | undefined
}

export const load = async (): Promise<ResponseBody> => {
  return {
    nws: normalize(await NWS.currentConditions()),
    'open-meteo': normalize(await OpenMeteo.currentConditions()),
    'gov-api': normalize(await GovApi.currentConditions()),
  }
}
