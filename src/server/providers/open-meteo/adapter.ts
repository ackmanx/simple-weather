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
