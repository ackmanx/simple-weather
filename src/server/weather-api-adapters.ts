import type { CurrentConditions } from '$server/get-weather'

export type Providers = 'forecast-api' | 'open-meteo'

export const ForecastAPI = {
  currentConditions: async (): Promise<CurrentConditions> => {
    const response = await fetch(
      'https://forecast.weather.gov/MapClick.php?lat=45.0632&lon=-93.2052&FcstType=json'
    )
    const data = await response.json()

    return {
      observationDate: data.currentobservation.Date,
      apparentTemp: 999,
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
      'https://api.open-meteo.com/v1/forecast?latitude=45.06&longitude=-93.2052&current=dew_point_2m,temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_gusts_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=1'
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
    }
  },
}