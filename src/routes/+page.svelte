<script lang="ts">
  import CurrentConditions from '$routes/CurrentConditions.svelte'
</script>

<style>
  div {
    width: 350px;
    border: 2px solid black;
    border-radius: 15px;
    padding: 24px;
    margin-bottom: 24px;
    background-color: var(--color-background);
  }
</style>

<svelte:head>
  <title>Simple Weather</title>
</svelte:head>

<page>
  <div>
    <CurrentConditions />
  </div>
</page>
