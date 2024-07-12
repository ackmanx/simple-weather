import { type CurrentConditions, getCurrentConditions } from '$server/get-weather'

interface ResponseBody {
  currentConditions: CurrentConditions | undefined
}

export const load = async (): Promise<ResponseBody> => {
  return {
    currentConditions: await getCurrentConditions('open-meteo'),
  }
}
