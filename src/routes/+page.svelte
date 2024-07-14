<script lang="ts">
  import CurrentConditions from '$routes/CurrentConditions.svelte'

  let provider = $state<'weatherGovForecast' | 'openMeteo'>('openMeteo')

  function setProvider(newProvider: 'weatherGovForecast' | 'openMeteo') {
    provider = newProvider
  }
</script>

<style>
  button {
    cursor: pointer;
    background-color: white;
    border: none;
    padding: 16px;
  }
</style>

<svelte:head>
  <title>Simple Weather</title>
</svelte:head>

<main>
  <div>
    <button onclick={() => setProvider('openMeteo')}>Open Meteo</button>
    <button onclick={() => setProvider('weatherGovForecast')}>Weather Gov Forecast</button>
    <CurrentConditions {provider} />
  </div>
</main>
