<script lang="ts">
  import { page } from '$app/stores'
  import { DateTime } from 'luxon'
  import PartlyCloudyIcon from '$images/source/partly-cloudy.svg'
  import SunnyIcon from '$images/source/sunny.svg'

  // https://moment.github.io/luxon/#/parsing?id=table-of-tokens
  const FORECAST_PARSE_FORMAT = 'd MMM h:m a'

  const backgroundColor = $page.data.backgroundColor
  const heatIndex = $page.data.heatIndex
  const forecast = $page.data.forecastWeatherGov
  const observationsDate = forecast.Date.slice(0, -4)

  const weatherIcons = {
    'Partly Cloudy': PartlyCloudyIcon,
    Fair: SunnyIcon,
  }

  $effect(() => {
    const _body = document.querySelector('body')

    if (_body) {
      _body.style.backgroundColor = backgroundColor
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

    img {
      width: 100px;
    }
  }

  conditions {
    display: flex;
    flex-wrap: wrap;
  }

  condition {
    width: 100px;
    height: 100px;
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
    <img src={weatherIcons[forecast.Weather]} alt="shut up intellij" />
  </weather-icon>

  <conditions>
    <condition>{forecast.Weather}</condition>
    <condition title={observationsDate}>
      {DateTime.fromFormat(forecast.Date.slice(0, -4), FORECAST_PARSE_FORMAT).toRelative()}
    </condition>
    <condition>
      <a
        href="https://forecast.weather.gov/MapClick.php?lat=45.0632&lon=-93.2052&FcstType=json"
        target="_blank"
        >{forecast.Temp}f
      </a></condition
    >
    <condition>
      <a
        href="https://api.weather.gov/stations/KANE/observations/latest?require_qc=false"
        target="_blank"
      >
        Heat Index: {toFahrenheit(heatIndex)}</a
      ></condition
    >

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
