<script lang="ts">
  import { getContext } from "svelte";
  import { state } from "../../../services/state";

  import Step from "../../Step.svelte";
  import Code from "../../Code.svelte";
  import Button from "../../Button.svelte";
  import type { token } from "../../../requests/spa/token";

  export let active;
  const { tokens } = getContext(state);

  const isJwt = (input: string) => {
    return input.split(".").length === 3;
  };
</script>

<style>
  .button-container {
    margin: 0 0 1rem 0;
  }
</style>

<Step from="{3}" to="{2}" active="{active}">
  <span slot="title">ID Token and Access token</span>
  <span slot="details">
    {#if $tokens.access_token}
      <Code label="Access token">{$tokens.access_token}</Code>
      {#if isJwt($tokens.access_token)}
        <div class="button-container">
          <Button href="http://jwt.io?token={$tokens.access_token}">
            Validate the access token on jwt.io
          </Button>
        </div>
      {/if}
    {/if}
    {#if $tokens.id_token}
      <Code label="ID token">{$tokens.id_token}</Code>
      {#if isJwt($tokens.id_token)}
        <div class="button-container">
          <Button href="{`http://jwt.io?token=${$tokens.id_token}`}">
            Validate the ID token on jwt.io
          </Button>
        </div>
      {/if}
    {/if}
    {#if $tokens.refresh_token}
      <Code label="Refresh token">{$tokens.refresh_token}</Code>
    {/if}
  </span>
</Step>
