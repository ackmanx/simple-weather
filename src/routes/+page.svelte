<script lang="ts">
  import CurrentConditions from '$routes/CurrentConditions.svelte'
</script>

<style>
  page {
    width: 350px;
  }
</style>

<svelte:head>
  <title>Simple Weather</title>
</svelte:head>

<page>
  <CurrentConditions />
</page>
