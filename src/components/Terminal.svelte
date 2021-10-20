<script>
import { writable } from "svelte/store";


  export let consoleMessages = writable([]);
</script>

<style>
  .terminal {
    grid-area: terminal;
    padding: 2rem;
    background-color: #1e212a;
  }

  .terminal-header {
    padding: 1rem 2rem;
    margin: 0;
    background: #65676e;
    border-radius: 0.5rem 0.5rem 0 0;
    color: #c7c8cc;
  }

  .terminal-content {
    max-width: calc(100vw - 4rem);
    height: calc(100% - 3rem);
    padding: 1rem 2rem;
    margin: 0;
    background: #41444b;
    border-radius: 0 0 0.5rem 0.5rem;
    color: #c7c8cc;
    font-family: monospace;
    overflow: auto;
  }

  .terminal-content p {
    margin: 0.5rem;
    font-family: monospace;
    white-space: nowrap;
  }

  .terminal-content p::before {
    content: "$";
    padding-right: 1rem;
    opacity: 0.4;
  }

  :global(.terminal-content a),
  :global(.terminal-highlight) {
    color: #8e8afc;
    font-family: inherit;
    font-weight: normal;
  }
</style>

<div class="terminal">
  <header class="terminal-header">Terminal</header>
  <section class="terminal-content">
    {#each $consoleMessages as message}
      <p>
        {@html message}
      </p>
    {/each}
  </section>
</div>
