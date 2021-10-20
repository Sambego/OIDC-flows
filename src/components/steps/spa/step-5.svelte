<script>
  import Step from "../../Step.svelte";

  export let active;
</script>

<Step from="{1}" to="{3}" active="{active}">
  <span slot="title">Authenticate and give consent</span>
</Step>
