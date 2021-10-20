<script>
  import Step from "../../Step.svelte";

  export let active;
</script>

<Step from="{1}" to="{2}" active="{active}">
  The user clicks on a login link
</Step>
