<script lang="ts">
  import '$theme/variables.css'
  import '$theme/custom-components.css'
  import '$theme/global.css'
</script>

<style>
  main {
    display: flex;
  }
</style>

<main>
  <page-slot><slot /></page-slot>
</main>
