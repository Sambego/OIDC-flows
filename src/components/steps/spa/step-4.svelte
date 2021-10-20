<script>
  import Step from "../../Step.svelte";

  export let active;
</script>

<Step from="{3}" to="{1}" active="{active}">
  <span slot="title">Redirect to the login and authorization prompt</span>
</Step>
