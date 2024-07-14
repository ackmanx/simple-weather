# yet-another-weather-thing Todo List

## 5 Day Forecast
https://api.weather.gov/gridpoints/MPX/109,77/forecast

## 48 Hour Graph
https://api.weather.gov/gridpoints/MPX/109,77
https://api.weather.gov/gridpoints/MPX/109,77/forecast/hourly?units=us

## Icons
NOAA icon set:
https://saratoga-weather.org/saratoga-icons2.zip

## For Later
```typescript

  function toMph(kph: number | null) {
    return kph ? `${Math.round(kph / 1.609)}mph` : '---'
  }

  function toInches(mm: number | null) {
    return mm ? `${Math.round(mm / 25.4)}in` : '---'
  }
```
