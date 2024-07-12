<script lang="ts">
  import { page } from '$app/stores'
  import DewPointIcon from '$images/source/dew-point.svg'
  import HumidityIcon from '$images/source/humidity.svg'
  import Image from '$routes/Image.svelte'

  const { temp, apparentTemp, dewPoint, humidity, windSpeed, windGust, weatherCode } =
    $page.data.currentConditions

  const weatherIcons: Record<string, any> = {
    0: DewPointIcon,
  }
</script>

<style>
  current-temperature {
    background-color: #f8e164;
    color: #1d1f20; /* always this, because background is always yellow */
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
      <span>but damn, it feels like {apparentTemp}°F</span>
    </current-temperature>
  </the-summary>

  <the-details>
    <condition>
      <Image src={DewPointIcon} />
      {dewPoint}°F
    </condition>

    <condition>
      <Image src={HumidityIcon} />
      {humidity}%
    </condition>

    <condition>
      <Image src={DewPointIcon} />
      {windSpeed} mph
    </condition>

    <condition>
      <Image src={DewPointIcon} />
      {windGust} mph
    </condition>
  </the-details>
</component>
