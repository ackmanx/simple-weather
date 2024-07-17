<script lang="ts">
  import CurrentConditions from '$routes/CurrentConditions.svelte'
  import type { Providers } from '../types/types'
  import ProvidersTopRow from '$routes/ProvidersTopRow.svelte'

  let provider = $state<Providers>('govApi')

  function setProvider(newProvider: Providers) {
    provider = newProvider
  }
</script>

<svelte:head>
  <title>Yet Another Weather Thing</title>
</svelte:head>

<main>
  <ProvidersTopRow {provider} {setProvider} />
  <CurrentConditions {provider} />
</main>
