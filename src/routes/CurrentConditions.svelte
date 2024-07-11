<script lang="ts">
  import { page } from '$app/stores'

  import { DateTime } from 'luxon'

  const {
    temp,
    description,
    weatherIcon,
    observationDate,
    dewPoint,
    humidity,
    windSpeed,
    windGust,
    windChill,
  } = $page.data.currentConditions

  let showDate = $state(false)

  const observationsDate = observationDate.slice(0, -4)

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
  }

  observation-date {
    font-size: var(--font-size-xsmall);
    width: 150px;
    text-align: center;
  }

  conditions {
    display: flex;
    flex-wrap: wrap;
  }

  condition {
    width: 100px;
    height: 50px;
    border-radius: 10px;
    margin: 8px;
    padding: 8px;

    span {
      font-size: var(--font-size-small);
    }
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
          {temp}°F
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
    <condition><span>Dew Point</span> {dewPoint}°F</condition>
    <condition><span>Humidity</span> {humidity}%</condition>
    <condition><span>Wind Speed</span> {windSpeed} mph</condition>

    {#if windGust !== 'NA'}
      <condition><span>Wind Gust</span> {windGust} mph</condition>
    {/if}

    {#if windChill !== 'NA'}
      <condition><span>Wind Chill</span> {windChill}°F</condition>
    {/if}
  </conditions>
</component>
