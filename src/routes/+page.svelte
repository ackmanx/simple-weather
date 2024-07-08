<script lang="ts">
  import { page } from '$app/stores'
  import { DateTime } from 'luxon'

  // https://moment.github.io/luxon/#/parsing?id=table-of-tokens
  const FORECAST_PARSE_FORMAT = 'd MMM h:m a'

  const api = $page.data.apiWeatherGov
  const forecast = $page.data.forecastWeatherGov

  function toFahrenheit(celsius: number | null) {
    return celsius ? `${Math.round(celsius * 1.8 + 32)}f` : '---'
  }

  function toMph(kph: number | null) {
    return kph ? `${Math.round(kph / 1.609)}mph` : '---'
  }

  function toInches(mm: number | null) {
    return mm ? `${Math.round(mm / 25.4)}in` : '---'
  }
</script>

<style>
  div {
    display: flex;
  }
</style>

<svelte:head>
  <title>Simple Weather</title>
</svelte:head>

<!-- svelte-ignore component_name_lowercase -->
<page>
  <h1>Current Conditions</h1>
  <div>
    <ul>
      <li>api.weather.gov</li>
      <li><img src={api.icon} alt="shut up intellij" /></li>
      <li>Description: {api.textDescription}</li>
      <li>Timestamp: {DateTime.fromISO(api.timestamp).toRelative()}</li>
      <li>Temperature: {toFahrenheit(api.temperature.value)}</li>
      <li>Heat Index: {toFahrenheit(api.heatIndex.value)}</li>

      <li>Dew Point: {toFahrenheit(api.dewpoint.value)}</li>
      <li>Humidity: {Math.round(api.relativeHumidity.value)}%</li>
      <li>Wind Speed: {toMph(api.windSpeed.value)}</li>
      <li>Wind Gust: {toMph(api.windGust.value)}</li>
      <li>Wind Chill: {toFahrenheit(api.windChill.value)}</li>
      <li>Precip Last 1hr: {toInches(api.precipitationLastHour.value)}</li>
      <li>Precip Last 3hr: {toInches(api.precipitationLast3Hours.value)}</li>
      <li>Precip Last 6hr: {toInches(api.precipitationLast6Hours.value)}</li>

      <li>Low Temperature Last 24hr: {toFahrenheit(api.minTemperatureLast24Hours.value)}</li>
      <li>High Temperature Last 24hr: {toFahrenheit(api.maxTemperatureLast24Hours.value)}</li>
      <li>Station: {api.station}</li>
    </ul>
    <ul>
      <li>forecast.weather.gov</li>
      <li>
        <img
          src={`https://forecast.weather.gov/newimages/medium/${forecast.Weatherimage}`}
          alt="shut up intellij"
        />
      </li>
      <li>Description: {forecast.Weather}</li>
      <li>
        Timestamp: {DateTime.fromFormat(
          forecast.Date.slice(0, -4),
          FORECAST_PARSE_FORMAT
        ).toRelative()}
      </li>
      <li>Temperature: {forecast.Temp}f</li>
      <li>Heat Index: ?</li>

      <li>Dew Point: {forecast.Dewp}f</li>
      <li>Humidity: {forecast.Relh}%</li>
      <li>Wind Speed: {forecast.Winds}mph</li>
      <li>Wind Gust: {forecast.Gust}mph</li>
      <li>Wind Chill: {forecast.WindChill}f</li>
      <li>Precip Last: ?</li>
      <li>Precip Last: ?</li>
      <li>Precip Last: ?</li>

      <li>Low Temperature Last 24hr: ?</li>
      <li>High Temperature Last 24hr: ?</li>
      <li>Station: {forecast.id}</li>
    </ul>
  </div>
</page>
