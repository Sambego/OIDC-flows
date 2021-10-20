<script>
  export let label;
  export let prefix;
  export let value = "";
</script>

<style>
  .row {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0 0 2rem 0;
  }

  .label {
    display: inline-block;
    width: 20rem;
    padding-right: 2rem;
    text-align: right;
  }

  .container {
    position: relative;
    display: inline-block;
  }

  .input {
    width: 100%;
    padding: 1rem 2rem;
    background: var(--color-white);
    border: 1px solid var(--color-gray-7);
    border-radius: 1rem;
    font-size: 1.6rem;
  }

  .prefix {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1.1rem 1rem;
    background: var(--color-gray-7);
    border-radius: 1rem 0 0 1rem;
    font-size: 1.6rem;
  }

  .input.prefixed {
    padding-left: 3rem;
  }
</style>

<div class="row">
  {#if label}
    <label class="label" for="{label.replace(' ', '')}">{label}</label>
    <div class="container">
      {#if prefix}<span class="prefix">{prefix}</span>{/if}

      <input
        type="text"
        value="{value}"
        class="input {prefix ? 'prefixed' : ''}"
        id="{label.replace(' ', '')}"
      />
    </div>
  {:else}<input type="text" value="{value}" class="input" />{/if}
</div>
