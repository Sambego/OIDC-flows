<script>
  import { setContext, onMount } from "svelte";
  import { writable } from "svelte/store";
  import { state } from "../services/state.ts";

  setContext(state, {
    settings: writable({
      tenant: process.env.AUTH0_TENANT,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      authorizationEndpoint: "authorize",
      tokenEndpoint: "oauth/token",
      tokenKeysEndpoint: ".well-known/jwks.json",
    }),
    authorize: writable({}),
    tokens: writable({}),
  });
</script>

<slot />
