<script lang="ts">
  import '$theme/reset.css'
  import '$theme/variables.css'
  import '$theme/custom-components.css'
  import '$theme/global.css'
  import { DateTime } from 'luxon'
  import { page } from '$app/stores'

  const openMeteoDate = DateTime.fromISO($page.data.openMeteo.observationDate).toRelative()
  const nwsDate = DateTime.fromISO($page.data.forecastApi.observationDate).toRelative()
</script>

<style>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--font-size-xsmall);
  }
</style>

<slot />

<footer>
  <p>
    <a
      href="https://forecast.weather.gov/MapClick.php?lat=45.0632&lon=-93.2052&FcstType=json"
      target="_blank"
    >
      NWS - {nwsDate}
    </a>
  </p>
  <p>
    <a
      href="https://api.open-meteo.com/v1/forecast?latitude=45.06&longitude=-93.2052&current=dew_point_2m,temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_gusts_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=1"
      target="_blank"
    >
      Open Meteo - {openMeteoDate}
    </a>
  </p>
</footer>
