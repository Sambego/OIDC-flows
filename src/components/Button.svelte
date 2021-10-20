<script>
  export let href;
  export let disabled = false;
</script>

<style>
  .button {
    display: inline-block;
    padding: 1rem 2rem;
    background: var(--color-purple);
    border-radius: 0.5rem;
    color: var(--color-white);
    border: none;
    font-size: 1.6rem;
    text-decoration: none;
  }

  .button[disabled] {
    opacity: 0.5;
  }
</style>

{#if href}
  <a class="button" href="{decodeURI(href)}" target="_blank"><slot /></a>
{:else}
  <button class="button" on:click disabled="{disabled}"><slot /></button>
{/if}
