interface ResponseBody {
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
  const forecastApiResponse = await fetch(
    'https://forecast.weather.gov/MapClick.php?lat=45.0632&lon=-93.2052&FcstType=json'
  )
  const forecastApiData = await forecastApiResponse.json()

  return {
    observationDate: forecastApiData.currentobservation.Date,
    description: forecastApiData.currentobservation.Weather,
    weatherIcon: forecastApiData.currentobservation.Weatherimage,
    temp: forecastApiData.currentobservation.Temp,
    dewPoint: forecastApiData.currentobservation.Dewp,
    humidity: forecastApiData.currentobservation.Relh,
    windSpeed: forecastApiData.currentobservation.Winds,
    windGust: forecastApiData.currentobservation.Gust,
    windChill: forecastApiData.currentobservation.WindChill,
  }
}
