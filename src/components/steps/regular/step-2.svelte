<script>
  import Step from "../../Step.svelte";

  export let active;
</script>

<Step from="{2}" to="{3}" active="{active}">
  Authorization code request to /authorize
</Step>
