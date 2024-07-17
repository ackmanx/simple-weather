import { GovApi } from '$server/providers/gov-api/adapter'
import { NWS } from '$server/providers/nws/adapter'
import { OpenMeteo } from '$server/providers/open-meteo/adapter'
import { normalize } from '$utils'

import type { NormalizedCurrentConditions } from '../types/types'

interface ResponseBody {
  nws: NormalizedCurrentConditions | undefined
  openMeteo: NormalizedCurrentConditions | undefined
  govApi: NormalizedCurrentConditions | undefined
}

export const load = async (): Promise<ResponseBody> => {
  return {
    nws: normalize(await NWS.currentConditions()),
    openMeteo: normalize(await OpenMeteo.currentConditions()),
    govApi: normalize(await GovApi.currentConditions()),
  }
}
