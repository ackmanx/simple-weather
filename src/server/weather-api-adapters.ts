import { DateTime } from 'luxon'

import { NWS_PARSE_FORMAT } from '$utils'
import type { CurrentConditions } from '../types/types'

export type Providers = 'nws' | 'open-meteo'

const WMOCodes: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Drizzle: Light',
  53: 'Drizzle: Moderate',
  55: 'Drizzle: Dense',
  56: 'Freezing Drizzle: Light',
  57: 'Freezing Drizzle: Dense',
  61: 'Rain: Slight',
  63: 'Rain: Moderate',
  65: 'Rain: Heavy',
  66: 'Freezing Rain: Light',
  67: 'Freezing Rain: Heavy',
  71: 'Snow fall: Slight',
  73: 'Snow fall: Moderate',
  75: 'Snow fall: Heavy',
  77: 'Snow grains',
  80: 'Rain showers: Slight',
  81: 'Rain showers: Moderate',
  82: 'Rain showers: Violent',
  85: 'Snow showers: Slight',
  86: 'Snow showers: Heavy',
}

export const NWS = {
  currentConditions: async (): Promise<CurrentConditions> => {
    const response = await fetch(
      'https://forecast.weather.gov/MapClick.php?lat=45.0632&lon=-93.2052&FcstType=json'
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

export const OpenMeteo = {
  currentConditions: async (): Promise<CurrentConditions> => {
    const response = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=45.06&longitude=-93.2052&current=weather_code,dew_point_2m,temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_gusts_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=1'
    )
    const data = await response.json()

    return {
      observationDate: data.current.time,
      apparentTemp: Math.round(data.current.apparent_temperature),
      temp: Math.round(data.current.temperature_2m),
      dewPoint: Math.round(data.current.dew_point_2m),
      humidity: Math.round(data.current.relative_humidity_2m),
      windSpeed: Math.round(data.current.wind_speed_10m),
      windGust: Math.round(data.current.wind_gusts_10m),
      description: WMOCodes[data.current.weather_code],
    }
  },
}
