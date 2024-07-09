<script lang="ts">
  import { page } from '$app/stores'

  import { DateTime } from 'luxon'
  import { toFahrenheit } from '$utils'

  const backgroundColor = $page.data.backgroundColor
  const heatIndex = $page.data.heatIndex
  const forecast = $page.data.forecastWeatherGov

  let showDate = $state(false)

  const observationsDate = forecast.Date.slice(0, -4)

  // https://moment.github.io/luxon/#/parsing?id=table-of-tokens
  const FORECAST_PARSE_FORMAT = 'd MMM h:m a'

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

  i-dont-know-weather-and-data-i-guess {
    display: flex;
    gap: 16px;
  }

  img {
    width: 150px;
    border-radius: 10px;
  }

  current-temperature {
    font-size: var(--font-size-xxlarge);

    span {
      font-size: var(--font-size-normal);
    }
  }

  observation-date {
    font-size: var(--font-size-small);
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
    <i-dont-know-weather-and-data-i-guess>
      <img
        src={`https://forecast.weather.gov/newimages/large/${forecast.Weatherimage}`}
        alt="shut up intellij"
      />
      <div>
        <current-temperature>
          {forecast.Temp}f
          {#if heatIndex}<span>but feels like {toFahrenheit(heatIndex)}</span>{/if}
        </current-temperature>
        <current-weather-description>{forecast.Weather}</current-weather-description>
      </div>
    </i-dont-know-weather-and-data-i-guess>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <observation-date onclick={() => (showDate = true)}>
      {DateTime.fromFormat(forecast.Date.slice(0, -4), FORECAST_PARSE_FORMAT).toRelative()}
      {#if showDate}
        - {observationsDate}
      {/if}
    </observation-date>
  </the-summary>

  <conditions>
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
