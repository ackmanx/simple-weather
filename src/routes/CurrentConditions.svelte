<script lang="ts">
  import { page } from '$app/stores'

  const { temp, dewPoint, humidity, windSpeed, windGust } = $page.data.currentConditions
</script>

<style>
  current-temperature {
    background-color: #f8e164;
    color: var(--color-background);
    font-size: var(--font-size-mega);
    padding: 0 16px;

    span {
      font-size: var(--font-size-normal);
    }
  }
</style>

<component>
  <the-summary>
    <current-temperature>
      {temp}°F
      <span>but damn, it feels like 88°F</span>
    </current-temperature>
  </the-summary>

  <the-details>
    <condition><span>Dew Point</span> {dewPoint}°F</condition>
    <condition><span>Humidity</span> {humidity}%</condition>
    <condition><span>Wind Speed</span> {windSpeed} mph</condition>
    <condition><span>Wind Gust</span> {windGust} mph</condition>
  </the-details>
</component>
