<script>
  import Info from "./Icons/info-circle.svg";
  import Icon from "./Icon.svelte";
</script>

<style>
  .info {
    background: none;
    border: none;
    color: currentColor;
  }
</style>

<button class="info" on:click>
  <Icon>
    <Info />
  </Icon>
</button>
