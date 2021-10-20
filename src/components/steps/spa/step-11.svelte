<script>
  import Step from "../../Step.svelte";

  export let active;
</script>

<Step from="{4}" to="{2}" active="{active}">
  <span slot="title">API Response</span>
</Step>
