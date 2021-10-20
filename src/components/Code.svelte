<script>
  export let label;
  export let color = "rgba(255, 255, 255, .4)";
</script>

<style>
  .container {
    margin: 0 0 1rem;
  }

  .container:last-child {
    margin: 0;
  }

  .label {
    display: inline-block;
    margin: 0;
    padding: 0.5rem 1rem;
    background: var(--background);
    border-radius: 0.5rem 0.5rem 0 0;
    font-weight: bold;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-width: 1px 1px 0 1px;
  }

  .code {
    margin: 0;
    background: var(--background);
    border: none;
    border-radius: 0.5rem;
    font-family: monospace;
    line-height: 1.2;
  }

  .code pre {
    max-width: 100%;
    white-space: nowrap;
  }

  .code code {
    width: 100%;
    overflow: scroll;
    padding: 0 0 1rem 0;
    background: none;
    border: none;
    padding: 0;
  }

  .padded {
    width: 100%;
    padding: 0.5rem 1rem 0rem;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>

{#if label}
  <div class="container" style="--background: {color};">
    <p class="label">{label}</p>
    <div class="code padded">
      <pre><code><slot /></code></pre>
    </div>
  </div>
{:else}
  <code class="code" style="--background: {color};"><slot /></code>
{/if}
