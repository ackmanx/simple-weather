<script lang="ts">
  interface Props {
    src: string
  }

  const { src }: Props = $props()
</script>

<style>
  img {
    width: 36px;
  }
</style>

<img {src} alt="fuck you svelte" />
