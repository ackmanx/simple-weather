import type { GovAPI } from '$server/providers/gov-api/types'
import { toFahrenheit, toMph } from '$utils'

import type { CurrentConditions } from '../../../types/types'

export const GovApi = {
  currentConditions: async (): Promise<CurrentConditions> => {
    const response = await fetch(`https://api.weather.gov/stations/KANE/observations/latest`)
    const data: GovAPI = await response.json()

    return {
      observationDate: data.properties.timestamp,
      description: data.properties.textDescription,
      temp: toFahrenheit(data.properties.temperature.value),
      apparentTemp: toFahrenheit(data.properties.heatIndex.value),
      dewPoint: toFahrenheit(data.properties.dewpoint.value),
      humidity: data.properties.relativeHumidity.value,
      windSpeed: toMph(data.properties.windSpeed.value),
      windGust: toMph(data.properties.windGust.value),
    }
  },
}
