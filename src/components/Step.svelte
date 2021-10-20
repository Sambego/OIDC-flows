<script>
  import { onMount } from "svelte";
  import * as animateScroll from "svelte-scrollto";

  import Person from "./icons/person.svg";
  import Window from "./icons/window.svg";
  import Shield from "./icons/shield.svg";
  import Terminal from "./icons/terminal.svg";
  import Left from "./icons/caret-left-fill.svg";
  import Right from "./icons/caret-right-fill.svg";

  import Icon from "./Icon.svelte";

  export let from = 1;
  export let to = 2;
  export let active = false;

  const colors = [
    "--color-green",
    "--color-yellow",
    "--color-purple",
    "--color-orange",
  ];
  const icons = [Person, Window, Shield, Terminal];

  $: direction = from < to ? "right" : from > to ? "left" : "none";

  onMount(() => {
    animateScroll.setGlobalOptions({
      container: ".explorer",
      duration: 500,
      offset: 1000, //  ¯\_(ツ)_/¯
    });
    animateScroll.scrollToBottom();
  });
</script>

<style>
  :root {
    --from: 1;
    --to: 3;
    --background-start: var(--color-green);
    --background-end: var(--color-green);
    --arrow: var(--color-green);
  }

  .step-container {
    grid-column: var(--from) / var(--to);
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 0; /* Prevent grid blow-out when using <pre> elements */
    margin: 0 2rem 2rem;
  }

  .direction {
    width: 3rem;
    color: var(--arrow);
  }

  .wrapper {
    width: 100%;
  }

  .wrapper.direction-left,
  .wrapper.direction-right {
    width: calc(100% - 3rem);
  }

  .step {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background: linear-gradient(
      45deg,
      var(--background-start),
      var(--background-end)
    );
    border-radius: 1rem;
    color: var(--color-white);
  }

  .icon {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    padding: 1rem;
    background: var(--color-white);
    border-radius: 50%;
    color: var(--background-start);
  }

  .details {
    margin-top: -1rem;
    padding: 2rem 1rem 1rem;
    background: var(--background-detail);
    border-radius: 0 0 1rem 1rem;
    color: var(--color-gray-1);
  }
</style>

<div
  class="step-container"
  style="--from: {direction === 'right' ? from : to}; --to: {direction === 'right' ? to + 1 : from + 1};--background-start: var({direction === 'left' ? colors[to - 1] : colors[from - 1]}{active ? '' : '-light'}); --active:{active ? 1 : 0};--background-end: var({direction === 'left' ? colors[from - 1] : colors[to - 1]}{active ? '' : '-light'}); --active:{active ? 1 : 0}; --background-detail: var({colors[from - 1]}{active ? '-light' : '-super-light'}); --arrow: var({colors[to - 1]}{active ? '-light' : '-super-light'});"
>
  {#if direction === 'left'}
    <div class="direction">
      <Left />
    </div>
  {/if}
  <div class="wrapper direction-{direction}">
    <div class="step">
      <span class="icon"><Icon width="{2}">
          <svelte:component this="{icons[from - 1]}" />
        </Icon></span>
      <div class="title">
        <slot name="title" />
      </div>
    </div>
    {#if $$slots.details}
      <div class="details">
        <slot name="details" />
      </div>
    {/if}
  </div>
  {#if direction === 'right'}
    <div class="direction">
      <Right />
    </div>
  {/if}
</div>
