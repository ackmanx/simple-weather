import { type CurrentConditions, getCurrentConditions } from '$server/get-weather'

interface ResponseBody {
  openMeteo: CurrentConditions | undefined
}

export const load = async (): Promise<ResponseBody> => {
  return {
    openMeteo: await getCurrentConditions('open-meteo'),
  }
}
