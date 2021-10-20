<script>
  import Step from "../../Step.svelte";

  export let active;
</script>

<Step from="{2}" to="{4}" active="{active}">
  <span slot="title">Request user data with Access token</span>
</Step>
