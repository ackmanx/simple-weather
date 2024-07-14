import { type CurrentConditions, getCurrentConditions } from '$server/get-weather'

interface ResponseBody {
  openMeteo: CurrentConditions | undefined
  forecastApi: CurrentConditions | undefined
}

export const load = async (): Promise<ResponseBody> => {
  return {
    forecastApi: await getCurrentConditions('forecast-api'),
    openMeteo: await getCurrentConditions('open-meteo'),
  }
}
