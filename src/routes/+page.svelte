<script lang="ts">
  import { page } from '$app/stores'

  const latest = $page.data.latestObservations.properties

  /* prettier-ignore */ console.log('^_^', latest)

  function toFahrenheit(celcius: number | null) {
    return celcius ? `${Math.round(celcius * 1.8 + 32)}f` : '---'
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
    overflow: hidden;
  }
</style>

<svelte:head>
  <title>Simple Weather</title>
</svelte:head>

<!-- svelte-ignore component_name_lowercase -->
<page>
  <h1>Current Conditions</h1>
  <ul>
    <li><img src={latest.icon} alt="shut up intellij" /></li>
    <li>Description: {latest.textDescription}</li>
    <li>Timestamp: {latest.timestamp}</li>
    <li>Station: {latest.station}</li>
    <li>Temperature: {toFahrenheit(latest.temperature.value)}</li>
    <li>Heat Index: {toFahrenheit(latest.heatIndex.value)}</li>
    <li>Low Temperature Last 24hr: {toFahrenheit(latest.minTemperatureLast24Hours.value)}</li>
    <li>High Temperature Last 24hr: {toFahrenheit(latest.maxTemperatureLast24Hours.value)}</li>
    <li>Dew Point: {toFahrenheit(latest.dewpoint.value)}</li>
    <li>Humidity: {latest.relativeHumidity.value}%</li>
    <li>Wind Speed: {toMph(latest.windSpeed.value)}</li>
    <li>Wind Gust: {toMph(latest.windGust.value)}</li>
    <li>Wind Chill: {toFahrenheit(latest.windChill.value)}</li>
    <li>Precip Last 1hr: {toInches(latest.precipitationLastHour.value)}</li>
    <li>Precip Last 3hr: {toInches(latest.precipitationLast3Hours.value)}</li>
    <li>Precip Last 6hr: {toInches(latest.precipitationLast6Hours.value)}</li>
  </ul>
</page>
