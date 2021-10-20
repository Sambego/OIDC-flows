<script>
  export let active = false;

  const handleClose = () => {
    active = false;
  };
</script>

<style>
  .modal {
    position: fixed;
    z-index: 3;
    top: 50%;
    left: 50%;
    width: 50rem;
    transform: translate3d(-50%, -50%, 0);
    background: var(--color-white);
    border: 1px solid var(--color-gray-7);
    box-shadow: 0 0 1rem 0 var(--color-gray-6);
    border-radius: 1rem;
  }

  .header {
    display: flex;
    justify-content: flex-end;
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--color-gray-7);
  }

  .close {
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    width: 2.5rem;
    height: 2.5rem;
    background: none;
    border: none;
    border: 1px solid var(--color-gray-6);
    border-radius: 50%;
    color: var(--color-gray-6);
  }

  .close:hover {
    border-color: var(--color-gray-1);
    color: var(--color-gray-1);
  }

  .content {
    padding: 1rem 2rem;
    color: var(--color-gray-1);
  }
</style>

{#if active}
  <div class="modal">
    <header class="header">
      <button class="close" on:click="{handleClose}">&#10005;</button>
    </header>
    <section class="content">
      <slot />
    </section>
  </div>
{/if}
