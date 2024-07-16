import type { CurrentConditions, NormalizedCurrentConditions } from './types/types'

export function toFahrenheit(celsius: number | null) {
  return celsius ? Math.round(celsius * 1.8 + 32) : null
}

export function toMph(speedKph: number | null) {
  return speedKph ? Math.round(speedKph / 1.609344) : null
}

/*
 * Make sure all numbers are rounded
 * Don't include any null values
 */
export function normalize(conditions: CurrentConditions) {
  const normalizedConditions: NormalizedCurrentConditions = {
    observationDate: conditions.observationDate,
  }

  if (conditions.description) {
    normalizedConditions.description = conditions.description
  }

  if (conditions.temp) {
    normalizedConditions.temp = Math.round(conditions.temp)
  }

  if (conditions.apparentTemp) {
    normalizedConditions.apparentTemp = Math.round(conditions.apparentTemp)
  }

  if (conditions.dewPoint) {
    normalizedConditions.dewPoint = Math.round(conditions.dewPoint)
  }

  if (conditions.humidity) {
    normalizedConditions.humidity = Math.round(conditions.humidity)
  }

  if (conditions.windSpeed) {
    normalizedConditions.windSpeed = Math.round(conditions.windSpeed)
  }

  if (conditions.windGust) {
    normalizedConditions.windGust = Math.round(conditions.windGust)
  }

  return normalizedConditions
}

// https://moment.github.io/luxon/#/parsing?id=table-of-tokens
export const NWS_PARSE_FORMAT = 'd MMM h:m a'
