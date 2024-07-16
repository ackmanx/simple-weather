import type { OpenMeteoData } from '$server/providers/open-meteo/types'

import type { CurrentConditions } from '../../../types/types'

/*
 * WMO 4677 codes can be found in various places online, such as:
 * https://artefacts.ceda.ac.uk/badc_datadocs/surface/code.html
 * https://www.nodc.noaa.gov/gtspp/document/codetbls/wmocodes/table4677.html
 * https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM
 */
const WMOCodes: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  56: 'Light freezing drizzle',
  57: 'Dense freezing drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  66: 'Light freezing rain',
  67: 'Heavy freezing rain',
  71: 'Slight snow fall',
  73: 'Moderate snow fall',
  75: 'Heavy snow fall',
  77: 'Snow grains',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
}

export const OpenMeteo = {
  currentConditions: async (): Promise<CurrentConditions> => {
    const params = {
      latitude: '45.06',
      longitude: '-93.2052',
      current: [
        'weather_code',
        'dew_point_2m',
        'temperature_2m',
        'relative_humidity_2m',
        'apparent_temperature',
        'wind_speed_10m',
        'wind_gusts_10m',
      ].join(','),
      temperature_unit: 'fahrenheit',
      wind_speed_unit: 'mph',
      precipitation_unit: 'inch',
      timezone: 'America/Chicago',
      forecast_days: '1',
    }

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?${new URLSearchParams(params).toString()}`
    )

    const data: OpenMeteoData = await response.json()

    return {
      observationDate: data.current.time,
      description: WMOCodes[data.current.weather_code],
      temp: data.current.temperature_2m,
      apparentTemp: data.current.apparent_temperature,
      dewPoint: data.current.dew_point_2m,
      humidity: data.current.relative_humidity_2m,
      windSpeed: data.current.wind_speed_10m,
      windGust: data.current.wind_gusts_10m,
    }
  },
}
