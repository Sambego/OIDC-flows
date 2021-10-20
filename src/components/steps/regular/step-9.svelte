<script>
  import Step from "../../Step.svelte";

  export let active;
</script>

<Step from="{2}" to="{4}" active="{active}">
  Request user data with Access token
</Step>
