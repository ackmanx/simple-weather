interface ResponseBody {
  latestObservations: any
}

export const load = async (): Promise<ResponseBody> => {
  const response = await fetch(
    'https://api.weather.gov/stations/KANE/observations/latest?require_qc=false'
  )
  const observations = await response.json()

  return {
    latestObservations: observations,
  }
}
