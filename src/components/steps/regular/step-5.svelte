<script>
  import Step from "../../Step.svelte";

  export let active;
</script>

<Step from="{3}" to="{2}" active="{active}">Authorization code</Step>
