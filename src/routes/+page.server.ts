import { type CurrentConditions, getCurrentConditions } from '$server/get-weather'

interface ResponseBody {
  openMeteo: CurrentConditions | undefined
  nws: CurrentConditions | undefined
}

export const load = async (): Promise<ResponseBody> => {
  return {
    nws: await getCurrentConditions('forecast-api'),
    openMeteo: await getCurrentConditions('open-meteo'),
  }
}
