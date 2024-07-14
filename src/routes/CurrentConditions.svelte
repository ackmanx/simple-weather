<script lang="ts">
  import { page } from '$app/stores'
  import DewPointIcon from '$images/source/dew-point.svg'
  import HumidityIcon from '$images/source/humidity.svg'
  import WindIcon from '$images/source/wind.svg'
  import WindGustIcon from '$images/source/wind-gust.svg'
  import Image from '$routes/Image.svelte'

  const { temp, apparentTemp, dewPoint, humidity, windSpeed, windGust, description } =
    $page.data.openMeteo
</script>

<style>
  the-summary {
    display: flex;
    justify-content: center;
    background-color: #f8e164;
    color: #1d1f20; /* always this, because background is always yellow */
  }

  current-temperature {
    font-size: var(--font-size-mega);
    padding: 0 16px;

    span {
      font-size: var(--font-size-normal);
    }
  }

  the-details {
    margin: 16px 8px;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
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
    {description}
  </the-details>

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
      <Image src={WindIcon} />
      {windSpeed} mph
    </condition>

    <condition>
      <Image src={WindGustIcon} />
      {windGust} mph
    </condition>
  </the-details>
</component>
