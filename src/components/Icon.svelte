<script>
  export let width = 1.6;
  export let height;
  export let style;
</script>

<style>
  .icon {
    position: relative;
    display: inline-block;
    width: var(--width);
    height: var(--height);
    margin: 0;
    vertical-align: bottom;
  }
</style>

<span
  class="icon"
  style="--width:{width}rem; --height:{height ? height : width}rem; {style}"
>
  <slot />
</span>
