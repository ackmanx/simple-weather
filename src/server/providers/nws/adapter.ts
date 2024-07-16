import { DateTime } from 'luxon'

import type { NWSData } from '$server/providers/nws/types'
import { NWS_PARSE_FORMAT } from '$utils'

import type { CurrentConditions } from '../../../types/types'

export const NWS = {
  currentConditions: async (): Promise<CurrentConditions> => {
    const params = {
      lat: '45.0632',
      lon: '-93.2052',
      FcstType: 'json',
    }

    const response = await fetch(
      `https://forecast.weather.gov/MapClick.php?${new URLSearchParams(params).toString()}`
    )
    const data: NWSData = await response.json()

    const dateWithoutTimezone = data.currentobservation.Date.slice(0, -4)
    const observationDate = DateTime.fromFormat(dateWithoutTimezone, NWS_PARSE_FORMAT, {
      zone: 'America/Chicago',
    }).toISO()

    return {
      observationDate: observationDate ?? '',
      description: data.currentobservation.Weather,
      temp: Number(data.currentobservation.Temp),
      dewPoint: Number(data.currentobservation.Dewp),
      humidity: Number(data.currentobservation.Relh),
      windSpeed: Number(data.currentobservation.Winds),
      windGust: Number(data.currentobservation.Gust),
    }
  },
}
