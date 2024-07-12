<script lang="ts">
  import { page } from '$app/stores'

  const { temp, dewPoint, humidity, windSpeed, windGust } = $page.data.currentConditions
</script>

<style>
  i-dont-know-weather-and-data-i-guess {
    display: flex;
    gap: 16px;
  }

  current-temperature {
    font-size: var(--font-size-xxlarge);
  }

  /*conditions {*/
  /*  display: flex;*/
  /*  flex-wrap: wrap;*/
  /*}*/

  /*condition {*/
  /*  width: 100px;*/
  /*  height: 50px;*/
  /*  border-radius: 10px;*/
  /*  margin: 8px;*/
  /*  padding: 8px;*/

  /*  span {*/
  /*    font-size: var(--font-size-small);*/
  /*  }*/
  /*}*/
</style>

<component>
  <the-summary>
    <i-dont-know-weather-and-data-i-guess>
      <div>
        <current-temperature>
          {temp}°F
        </current-temperature>
      </div>
    </i-dont-know-weather-and-data-i-guess>

    <observation-date> </observation-date>
  </the-summary>

  <conditions>
    <condition><span>Dew Point</span> {dewPoint}°F</condition>
    <condition><span>Humidity</span> {humidity}%</condition>
    <condition><span>Wind Speed</span> {windSpeed} mph</condition>
    <condition><span>Wind Gust</span> {windGust} mph</condition>
  </conditions>
</component>
