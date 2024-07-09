# Simple Weather Todo List

## Weather.gov API Docs
https://www.weather.gov/documentation/services-web-api

## Current conditions
https://api.weather.gov/stations/KANE/observations/latest?require_qc=false
https://forecast.weather.gov/MapClick.php?lat=45.0632&lon=-93.2052&FcstType=json

## 5 Day Forecast
https://api.weather.gov/gridpoints/MPX/109,77/forecast

## 48 Hour Graph
https://api.weather.gov/gridpoints/MPX/109,77
https://api.weather.gov/gridpoints/MPX/109,77/forecast/hourly?units=us

## Icons
https://thenounproject.com/browse/collection-icon/weather-216606/?p=1
https://github.com/weather-gov/api/discussions/557

## For Later
```typescript

  function toMph(kph: number | null) {
    return kph ? `${Math.round(kph / 1.609)}mph` : '---'
  }

  function toInches(mm: number | null) {
    return mm ? `${Math.round(mm / 25.4)}in` : '---'
  }
```
