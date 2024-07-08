<script lang="ts">
  import { page } from '$app/stores'
  import { DateTime } from 'luxon'

  // https://moment.github.io/luxon/#/parsing?id=table-of-tokens
  const FORECAST_PARSE_FORMAT = 'd MMM h:m a'

  const heatIndex = $page.data.heatIndex
  const forecast = $page.data.forecastWeatherGov
  const observationsDate = forecast.Date.slice(0, -4)

  function toFahrenheit(celsius: number | null) {
    return celsius ? `${Math.round(celsius * 1.8 + 32)}f` : '---'
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
      <li>
        <img
          src={`https://forecast.weather.gov/newimages/medium/${forecast.Weatherimage}`}
          alt="shut up intellij"
        />
      </li>
      <li>Description: {forecast.Weather}</li>
      <li title={observationsDate}>
        Timestamp: {DateTime.fromFormat(
          forecast.Date.slice(0, -4),
          FORECAST_PARSE_FORMAT
        ).toRelative()}
      </li>
      <li>Temperature: {forecast.Temp}f</li>
      <li>Heat Index: {toFahrenheit(heatIndex)}</li>

      <li>Dew Point: {forecast.Dewp}f</li>
      <li>Humidity: {forecast.Relh}%</li>
      <li>Wind Speed: {forecast.Winds}mph</li>
      <li>Wind Gust: {forecast.Gust}mph</li>
      <li>Wind Chill: {forecast.WindChill}f</li>
    </ul>
  </div>
</page>
