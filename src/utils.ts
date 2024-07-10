export function toFahrenheit(celsius: number | null) {
  return celsius ? Math.round(celsius * 1.8 + 32) : ''
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
