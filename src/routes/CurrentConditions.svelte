<script lang="ts">
  import { page } from '$app/stores'

  import { DateTime } from 'luxon'

  const {
    heatIndex,
    temp,
    description,
    weatherIcon,
    observationDate,
    dewPoint,
    humidity,
    windSpeed,
    windGust,
    windChill,
  } = $page.data

  let showDate = $state(false)

  const observationsDate = $page.data.observationDate.slice(0, -4)

  // https://moment.github.io/luxon/#/parsing?id=table-of-tokens
  const FORECAST_PARSE_FORMAT = 'd MMM h:m a'
</script>

<style>
  i-dont-know-weather-and-data-i-guess {
    display: flex;
    gap: 16px;
    margin-bottom: 8px;
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
    width: 150px;
    text-align: center;
  }

  conditions {
    display: flex;
    flex-wrap: wrap;
  }

  condition {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin: 8px;
    padding: 8px;
  }
</style>

<component>
  <the-summary>
    <i-dont-know-weather-and-data-i-guess>
      <img
        src={`https://forecast.weather.gov/newimages/large/${weatherIcon}`}
        alt="shut up intellij"
      />
      <div>
        <current-temperature>
          {temp}f
          {#if heatIndex !== temp}
            <span>but feels like {heatIndex}f</span>
          {/if}
        </current-temperature>
        <current-weather-description>{description}</current-weather-description>
      </div>
    </i-dont-know-weather-and-data-i-guess>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <observation-date onclick={() => (showDate = true)}>
      {DateTime.fromFormat(observationDate.slice(0, -4), FORECAST_PARSE_FORMAT).toRelative()}
      {#if showDate}
        - {observationsDate}
      {/if}
    </observation-date>
  </the-summary>

  <conditions>
    <condition>Dew Point: {dewPoint}f</condition>
    <condition>Humidity: {humidity}%</condition>
    <condition>Wind Speed: {windSpeed}mph</condition>

    {#if windGust !== 'NA'}
      <condition>Wind Gust: {windGust}mph</condition>
    {/if}

    {#if windChill !== 'NA'}
      <condition>Wind Chill: {windChill}f</condition>
    {/if}
  </conditions>
</component>
