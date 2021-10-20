<script>
  import { onMount, getContext } from "svelte";
  import { state } from "../../../services/state";
  import {
    generateUrl,
    authorize as authorizeRequest,
  } from "../../../requests/spa/authorize";

  import Step from "../../Step.svelte";
  import Code from "../../Code.svelte";
  import Icon from "../../Icon.svelte";
  import Stopwatch from "../../icons/stopwatch.svg";

  export let active;
  let timer;

  const { settings, authorize } = getContext(state);
  const url = generateUrl(
    $settings.tenant,
    $settings.authorizationEndpoint,
    $settings.clientId,
    $authorize.codeChallenge
  );

  onMount(() => {
    if (active) {
      timer = 3000;

      window.setInterval(() => {
        if (timer >= 1000) {
          timer = timer - 1000;
        }
      }, 1000);
      window.setTimeout(() => {
        authorizeRequest(url);
      }, 3000);
    }
  });
</script>

<style>
  .countdown {
    margin: 0 0 1rem;
  }
</style>

<Step from="{2}" to="{3}" active="{active}">
  <span slot="title">Authorization code request + code challenge to
    <Code>/authorize</Code></span>
  <span slot="details">
    {#if timer}
      <div class="countdown">
        <Icon>
          <Stopwatch />
        </Icon>
        Redirecting in {timer / 1000}s
      </div>
    {/if}
    <Code label="Request">
      <span style="font-family: monospace;">curl \</span><br />
      <span style="font-family: monospace;">&nbsp;&nbsp;--request GET \</span><br />
      <span style="font-family: monospace;">&nbsp;&nbsp;--url '{url}'</span>
    </Code></span>
</Step>
