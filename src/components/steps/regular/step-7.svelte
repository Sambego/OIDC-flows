<script>
  import Step from "../../Step.svelte";

  export let active;
</script>

<Step from="{3}" to="{3}" active="{active}">
  Validate Authorization code + Client ID + Client Secret
</Step>
