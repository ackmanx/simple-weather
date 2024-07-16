export interface OpenMeteoData {
  current: {
    time: string
    weather_code: number
    temperature_2m: number
    apparent_temperature: number
    dew_point_2m: number
    relative_humidity_2m: number
    wind_speed_10m: number
    wind_gusts_10m: number
  }
}
