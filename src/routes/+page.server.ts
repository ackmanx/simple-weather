import { getCurrentConditions } from '$server/get-weather'

import type { CurrentConditions } from '../types/types'

interface ResponseBody {
  nws: CurrentConditions | undefined
  'open-meteo': CurrentConditions | undefined
}

export const load = async (): Promise<ResponseBody> => {
  return {
    nws: await getCurrentConditions('nws'),
    'open-meteo': await getCurrentConditions('open-meteo'),
  }
}
