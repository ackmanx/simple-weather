<script lang="ts">
  import '$theme/reset.css'
  import '$theme/variables.css'
  import '$theme/custom-components.css'
  import '$theme/global.css'
</script>

<style>
  footer {
    font-size: var(--font-size-small);
  }
</style>

<main>
  <slot />
</main>

<footer>
  <a
    href="https://api.open-meteo.com/v1/forecast?latitude=45.06&longitude=-93.2052&current=dew_point_2m,temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_gusts_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=1"
    target="_blank"
  >
    Current Conditions API
  </a>
</footer>
