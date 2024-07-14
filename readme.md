# Yet Another Weather Thing

## Sources
### Weather.gov API Docs
https://www.weather.gov/documentation/services-web-api

### Current conditions
Forecast API
* https://forecast.weather.gov/MapClick.php?lat=45.0632&lon=-93.2052&FcstType=json

Weather API
* https://api.weather.gov/stations/KANE/observations/latest?require_qc=false
* No longer using this one because it updates much less frequently, sometimes hours apart

Open Meteo
* https://api.open-meteo.com/v1/forecast?latitude=45.06&longitude=-93.2052&current=dew_point_2m,temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_gusts_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=1
  * Stricly current conditions. Nothing else.
* https://open-meteo.com/en/docs#current=temperature_2m&hourly=&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&past_days=1&forecast_days=3
* https://api.open-meteo.com/v1/forecast?latitude=45.06&longitude=-93.2052&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,wind_speed_10m,wind_gusts_10m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&past_days=1&forecast_days=3

Weather Bit
* https://api.weatherbit.io/v2.0/current?lat=45.06&lon=-93.2052&units=I&key=1a91f331c39d4f91a990c26ed0f18e9c
* https://www.weatherbit.io/api/swaggerui/weather-api-v2#!/Current32Weather32Data/get_current

### Icons
https://thenounproject.com/browse/collection-icon/weather-solid-127210
https://thenounproject.com/browse/collection-icon/weather-79734
https://thenounproject.com/browse/collection-icon/hotel-pack-outline-232916

## Tech Issues

### Intellij - Imports not showing up as errors if file not found

In these two files:
`node_modules/.pnpm/svelte@5.0.0-next.94/node_modules/svelte/types/index.d.ts`
`node_modules/.pnpm/svelte@5.0.0-next.94/node_modules/svelte/src/ambient.d.ts`

Comment out this module declaration:

```typescript
declare module '*.svelte' {
  export { SvelteComponent as default } from 'svelte'
}
```

I'm not sure what the right solution or cause of this issue is, but that works for my purposes right now.

### Svelte Ignore Template

Check Obsidian note `Svelte.md` for ignore comments
