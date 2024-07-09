interface ResponseBody {
  backgroundColor: string
  heatIndex: any
  forecastWeatherGov: any
}

export const load = async (): Promise<ResponseBody> => {
  const responseApi = await fetch(
    'https://api.weather.gov/stations/KANE/observations/latest?require_qc=false'
  )
  const observationsApi = await responseApi.json()

  const responseForecast = await fetch(
    // 'https://forecast.weather.gov/MapClick.php?lat=45.14&lon=-93.2099999&FcstType=json',
    'https://forecast.weather.gov/MapClick.php?lat=45.0632&lon=-93.2052&FcstType=json'
  )
  const observationsForecast = await responseForecast.json()

  return {
    backgroundColor: 'rgba(78,202,2,.35)',
    heatIndex: observationsApi.properties.heatIndex.value,
    forecastWeatherGov: observationsForecast.currentobservation,
  }
}
