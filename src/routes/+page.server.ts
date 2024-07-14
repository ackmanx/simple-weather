import { getCurrentConditions } from '$server/get-weather'
import type { CurrentConditions } from '../types/types'

interface ResponseBody {
  nws: CurrentConditions | undefined
  openMeteo: CurrentConditions | undefined
}

export const load = async (): Promise<ResponseBody> => {
  return {
    nws: await getCurrentConditions('nws'),
    openMeteo: await getCurrentConditions('open-meteo'),
  }
}
