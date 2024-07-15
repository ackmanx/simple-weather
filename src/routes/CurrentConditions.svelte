<script lang="ts">
  import { page } from '$app/stores'
  import DewPointIcon from '$images/source/dew-point.svg'
  import HumidityIcon from '$images/source/humidity.svg'
  import WindIcon from '$images/source/wind.svg'
  import WindGustIcon from '$images/source/wind-gust.svg'
  import Image from '$routes/Image.svelte'
  import type { Providers } from '../types/types'

  interface Props {
    provider: Providers
  }

  const { provider }: Props = $props()

  let temp = $state()
  let apparentTemp = $state()
  let dewPoint = $state()
  let humidity = $state()
  let windSpeed = $state()
  let windGust = $state()
  let description = $state()

  $effect(() => {
    temp = $page.data[provider].temp
    apparentTemp = $page.data[provider].apparentTemp
    dewPoint = $page.data[provider].dewPoint
    humidity = $page.data[provider].humidity
    windSpeed = $page.data[provider].windSpeed
    windGust = $page.data[provider].windGust
    description = $page.data[provider].description
  })
</script>

<style>
  the-summary {
    display: flex;
    background-color: #f8e164;
    color: #1d1f20;
  }

  current-temperature {
    font-family: var(--font-family-header);
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
      {#if apparentTemp}<span>but damn, it feels like {apparentTemp}°F</span>{/if}
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
