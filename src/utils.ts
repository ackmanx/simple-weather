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

export const WMOCodes: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Drizzle: Light',
  53: 'Drizzle: Moderate',
  55: 'Drizzle: Dense',
  56: 'Freezing Drizzle: Light',
  57: 'Freezing Drizzle: Dense',
  61: 'Rain: Slight',
  63: 'Rain: Moderate',
  65: 'Rain: Heavy',
  66: 'Freezing Rain: Light',
  67: 'Freezing Rain: Heavy',
  71: 'Snow fall: Slight',
  73: 'Snow fall: Moderate',
  75: 'Snow fall: Heavy',
  77: 'Snow grains',
  80: 'Rain showers: Slight',
  81: 'Rain showers: Moderate',
  82: 'Rain showers: Violent',
  85: 'Snow showers: Slight',
  86: 'Snow showers: Heavy',
}
