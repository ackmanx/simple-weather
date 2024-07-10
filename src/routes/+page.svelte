<script lang="ts">
  import CurrentConditions from '$routes/CurrentConditions.svelte'
</script>

<style>
  page {
    width: 350px;
    border: 2px solid black;
    border-radius: 15px;
    padding: 24px;
  }
</style>

<svelte:head>
  <title>Simple Weather</title>
</svelte:head>

<page>
  <CurrentConditions />
</page>
