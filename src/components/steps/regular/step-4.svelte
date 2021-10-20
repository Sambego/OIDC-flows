<script>
  import Step from "../../Step.svelte";

  export let active;
</script>

<Step from="{1}" to="{3}" active="{active}">Authenticate and give consent</Step>
