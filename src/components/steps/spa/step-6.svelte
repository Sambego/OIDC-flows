<script>
  import { getContext, onMount } from "svelte";
  import { state } from "../../../services/state";
  import Step from "../../Step.svelte";
  import Code from "../../Code.svelte";

  export let active;
  const { authorize } = getContext(state);
</script>

<Step from="{3}" to="{2}" active="{active}">
  <span slot="title">Authorization code</span>
  <span slot="details"><Code label="Authorization code">
      {$authorize.code}
    </Code></span>
</Step>
