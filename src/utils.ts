export function toFahrenheit(celsius: number | null) {
  return celsius ? Math.round(celsius * 1.8 + 32) : null
}

export function toMph(speedKph: number | null) {
  return speedKph ? Math.round(speedKph / 1.609344) : null
}

export function getTempBackgroundColor(temp: string) {
  const numericalTemp = Number(temp)

  switch (true) {
    case numericalTemp < 50:
      return 'var(--color-background)'

    case numericalTemp < 60:
      return 'var(--color-50)'

    case numericalTemp < 70:
      return 'var(--color-60)'

    case numericalTemp < 80:
      return 'var(--color-70)'

    case numericalTemp < 90:
      return 'var(--color-80)'

    case numericalTemp < 100:
      return 'var(--color-90)'

    case numericalTemp >= 100:
      return 'var(--color-100)'

    default:
      return 'var(--color-background)'
  }
}

// https://moment.github.io/luxon/#/parsing?id=table-of-tokens
export const NWS_PARSE_FORMAT = 'd MMM h:m a'
