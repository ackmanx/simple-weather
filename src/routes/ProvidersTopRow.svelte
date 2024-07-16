<script lang="ts">
  import type { Providers } from '../types/types'

  interface Props {
    provider: Providers
    setProvider: (newProvider: Providers) => void
  }

  const { provider, setProvider }: Props = $props()
</script>

<style>
  button {
    cursor: pointer;
    background-color: white;
    border: none;
    padding: 16px;

    &.isActive {
      background-color: #f8e164;
      color: #1d1f20;
    }
  }
</style>

<button class:isActive={provider === 'nws'} onclick={() => setProvider('nws')}> NWS </button>

<button class:isActive={provider === 'open-meteo'} onclick={() => setProvider('open-meteo')}>
  Open Meteo
</button>

<button class:isActive={provider === 'gov-api'} onclick={() => setProvider('gov-api')}>
  Gov API
</button>
