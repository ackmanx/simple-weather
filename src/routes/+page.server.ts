import { toFahrenheit } from '$utils'

interface ResponseBody {
  heatIndex: string
  temp: string
  description: string
  weatherIcon: string
  observationDate: string
  dewPoint: string
  humidity: string
  windSpeed: string
  windGust: string
  windChill: string
}

export const load = async (): Promise<ResponseBody> => {
  const weatherApiResponse = await fetch(
    'https://api.weather.gov/stations/KANE/observations/latest?require_qc=false'
  )
  const weatherApiData = await weatherApiResponse.json()

  const forecastApiResponse = await fetch(
    'https://forecast.weather.gov/MapClick.php?lat=45.0632&lon=-93.2052&FcstType=json'
  )
  const forecastApiData = await forecastApiResponse.json()

  return {
    observationDate: forecastApiData.currentobservation.Date,
    description: forecastApiData.currentobservation.Weather,
    weatherIcon: forecastApiData.currentobservation.Weatherimage,
    temp: forecastApiData.currentobservation.Temp,
    heatIndex: toFahrenheit(weatherApiData.properties.heatIndex.value).toString(),
    dewPoint: forecastApiData.currentobservation.Dewp,
    humidity: forecastApiData.currentobservation.Relh,
    windSpeed: forecastApiData.currentobservation.Winds,
    windGust: forecastApiData.currentobservation.Gust,
    windChill: forecastApiData.currentobservation.WindChill,
  }
}
