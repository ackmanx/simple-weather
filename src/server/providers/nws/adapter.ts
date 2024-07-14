import type { CurrentConditions } from '../../../types/types'
import { DateTime } from 'luxon'
import { NWS_PARSE_FORMAT } from '$utils'

export const NWS = {
  currentConditions: async (): Promise<CurrentConditions> => {
    const response = await fetch(
      'https://forecast.weather.gov/MapClick.php?lat=45.0632&lon=-93.2052&FcstType=json',
    )
    const data = await response.json()

    const dateWithoutTimezone = data.currentobservation.Date.slice(0, -4)

    return {
      description: data.currentobservation.Weather,
      observationDate:
        DateTime.fromFormat(dateWithoutTimezone, NWS_PARSE_FORMAT, {
          zone: 'America/Chicago',
        }).toISO() ?? '',
      temp: data.currentobservation.Temp,
      dewPoint: data.currentobservation.Dewp,
      humidity: data.currentobservation.Relh,
      windSpeed: data.currentobservation.Winds,
      windGust: data.currentobservation.Gust,
    }
  },
}
