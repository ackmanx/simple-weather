<script lang="ts">
  import { page } from '$app/stores'
  import { DateTime } from 'luxon'

  const documents = $page.data.collectionDocuments

  const stylesForDocs = documents.map((doc, index) => {
    const top = Math.floor(Math.random() * 100)
    const left = Math.floor(Math.random() * 100)
    const fontSize = Math.ceil(index / 2)

    let styles = `position: absolute; top: ${top}vh; left: ${left}vw; font-size: ${fontSize}px; width: 100%;`

    if (index === documents.length - 1) {
      styles = `${styles}color: var(--color-background); background-color: var(--color-text); padding: 8px; border-radius: 10px`
    }

    return styles
  })
</script>

<style>
  div {
    overflow: hidden;
  }
</style>

<svelte:head>
  <title>I Already Saw That</title>
</svelte:head>

<!-- svelte-ignore component_name_lowercase -->
<page>
  {#each documents as doc, index}
    <div style={stylesForDocs[index]}>
      {DateTime.fromISO(doc.createdForTesting).toRelative()}
    </div>
  {/each}
</page>
