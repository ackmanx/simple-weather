<script lang="ts">
  import { page } from '$app/stores'
  import { DateTime } from 'luxon'

  // https://moment.github.io/luxon/#/parsing?id=table-of-tokens
  const FORECAST_PARSE_FORMAT = 'd MMM h:m a'

  const background = $page.data.background
  const heatIndex = $page.data.heatIndex
  const forecast = $page.data.forecastWeatherGov
  const observationsDate = forecast.Date.slice(0, -4)

  $effect(() => {
    const _body = document.querySelector('body')

    if (_body) {
      _body.style.background = background
    }
  })

  function toFahrenheit(celsius: number | null) {
    return celsius ? `${Math.round(celsius * 1.8 + 32)}f` : '---'
  }
</script>

<style>
  page {
    width: 350px;
  }

  weather-icon {
    text-align: center;
  }

  conditions {
    display: flex;
    flex-wrap: wrap;
  }

  condition {
    width: 100px;
    height: 100px;
    border: 1px solid #56595c;
    border-radius: 10px;
    background-color: white;
    margin: 8px;
    padding: 8px;
  }
</style>

<svelte:head>
  <title>Simple Weather</title>
</svelte:head>

<!-- svelte-ignore component_name_lowercase -->
<page>
  <weather-icon>
    <img
      src={`https://forecast.weather.gov/newimages/medium/${forecast.Weatherimage}`}
      alt="shut up inteldivj"
    />
  </weather-icon>

  <conditions>
    <condition>{forecast.Weather}</condition>
    <condition title={observationsDate}>
      {DateTime.fromFormat(forecast.Date.slice(0, -4), FORECAST_PARSE_FORMAT).toRelative()}
    </condition>
    <condition>{forecast.Temp}f</condition>
    <condition>Heat Index: {toFahrenheit(heatIndex)}</condition>

    <condition>Dew Point: {forecast.Dewp}f</condition>
    <condition>Humidity: {forecast.Relh}%</condition>
    <condition>Wind Speed: {forecast.Winds}mph</condition>

    {#if forecast.Gust !== 'NA'}
      <condition>Wind Gust: {forecast.Gust}mph</condition>
    {/if}

    {#if forecast.WindChill !== 'NA'}
      <condition>Wind Chill: {forecast.WindChill}f</condition>
    {/if}
  </conditions>
</page>
