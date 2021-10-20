<script>
  import { getContext } from "svelte";
  import { Route } from "svelte-routing";
  import { state } from "../services/state.ts";

  import Container from "../components/Container.svelte";
  import Input from "../components/Input.svelte";

  const { settings } = getContext(state);
</script>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 3rem 4rem;
    border-bottom: 1px solid var(--color-gray-7);
  }

  .heading {
    margin: 0 0 1rem;
    font-size: 2.4rem;
  }

  .form {
    padding: 3rem 4rem;
  }

  .hr {
    margin: 4rem 0;
    border: none;
    border-top: 1px solid var(--color-gray-7);
  }
</style>

<Route path="settings">
  <Container>
    <header class="header">
      <h3 class="heading">Settings</h3>
    </header>
    <form class="form">
      <Input value="{$settings.tenant}" label="Auth0 Tenant" />
      <Input value="{$settings.clientId}" label="OIDC Client ID" />
      <Input value="{$settings.clientSecret}" label="OIDC Client Secret" />
      <hr class="hr" />
      <Input
        value="{$settings.authorizationEndpoint}"
        label="Authorization endpoint"
        prefix="/"
      />
      <Input
        value="{$settings.tokenEndpoint}"
        label="Token endpoint"
        prefix="/"
      />
      <Input
        value="{$settings.tokenKeysEndpoint}"
        label="Token Keys Endpoint"
        prefix="/"
      />
    </form>
  </Container>
</Route>
