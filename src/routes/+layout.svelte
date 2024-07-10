<script lang="ts">
  import '$theme/variables.css'
  import '$theme/custom-components.css'
  import '$theme/global.css'
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  footer {
    display: flex;
    gap: 8px;
    margin-top: 50px;
    font-size: var(--font-size-small);
  }
</style>

<main>
  <page-slot><slot /></page-slot>
  <footer>
    <a
      href="https://forecast.weather.gov/MapClick.php?lat=45.0632&lon=-93.2052&FcstType=json"
      target="_blank"
    >
      Source: Forecast API
    </a>
  </footer>
</main>
