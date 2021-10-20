<script>
  import Step from "../../Step.svelte";

  export let active;
</script>

<Step from="{1}" to="{2}" active="{active}">
  <span slot="title">The user clicks on a login link</span>
</Step>
