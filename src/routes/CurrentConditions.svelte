<script lang="ts">
  import { page } from '$app/stores'

  import { DateTime } from 'luxon'
  import { toFahrenheit } from '$utils'
  import PartlyCloudyIcon from '$images/source/partly-cloudy.svg'
  import SunnyIcon from '$images/source/sunny.svg'

  const backgroundColor = $page.data.backgroundColor
  const heatIndex = $page.data.heatIndex
  const forecast = $page.data.forecastWeatherGov
  const observationsDate = forecast.Date.slice(0, -4)

  // https://moment.github.io/luxon/#/parsing?id=table-of-tokens
  const FORECAST_PARSE_FORMAT = 'd MMM h:m a'

  const weatherIcons: Record<string, any> = {
    'Partly Cloudy': PartlyCloudyIcon,
    Fair: SunnyIcon,
  }

  $effect(() => {
    const _body = document.querySelector('body')

    if (_body) {
      _body.style.backgroundColor = backgroundColor
    }
  })
</script>

<style>
  the-summary {
    color: var(--color-background);
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
    background-color: var(--color-background);
    margin: 8px;
    padding: 8px;
  }
</style>

<component>
  <the-summary>
    <weather-icon>
      <img src={weatherIcons[forecast.Weather]} alt="shut up intellij" />
    </weather-icon>
    <div>
      <span>{forecast.Temp}f</span>
      <span>but feels like {toFahrenheit(heatIndex)}</span>
      <span>{forecast.Weather}</span>
    </div>
  </the-summary>

  <conditions>
    <condition title={observationsDate}>
      {DateTime.fromFormat(forecast.Date.slice(0, -4), FORECAST_PARSE_FORMAT).toRelative()}
    </condition>

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
</component>
