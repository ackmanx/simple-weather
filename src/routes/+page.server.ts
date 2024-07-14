import { type CurrentConditions, getCurrentConditions } from '$server/get-weather'

interface ResponseBody {
  openMeteo: CurrentConditions | undefined
  weatherGovForecast: CurrentConditions | undefined
}

export const load = async (): Promise<ResponseBody> => {
  return {
    weatherGovForecast: await getCurrentConditions('forecast-api'),
    openMeteo: await getCurrentConditions('open-meteo'),
  }
}
