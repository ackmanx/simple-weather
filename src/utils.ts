export function toFahrenheit(celsius: number | null) {
  return celsius ? Math.round(celsius * 1.8 + 32) : ''
}
