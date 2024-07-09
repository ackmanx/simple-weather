import { toFahrenheit } from '$utils'

interface ResponseBody {
  heatIndex: any
  forecastWeatherGov: any
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
    heatIndex: toFahrenheit(weatherApiData.properties.heatIndex.value).toString(),
    forecastWeatherGov: forecastApiData.currentobservation,
  }
}
