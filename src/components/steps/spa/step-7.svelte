<script>
  import { onMount, getContext } from "svelte";
  import { state } from "../../../services/state";
  import { generateUrl, token } from "../../../requests/spa/token";

  import Step from "../../Step.svelte";
  import Code from "../../Code.svelte";

  export let active;
  let t;
  const { settings, authorize, tokens } = getContext(state);
  const url = generateUrl($settings.tenant, $settings.tokenEndpoint);

  onMount(async () => {
    if (active) {
      t = await token(
        url,
        $settings.clientId,
        $authorize.code,
        $authorize.codeVerifier,
        $settings.audience
      );
      tokens.set(t);
    }
  });
</script>

<Step from="{2}" to="{3}" active="{active}">
  <span slot="title">Authorization code + code verifier to
    <Code>/oauth/token</Code></span>
  <div slot="details">
    <Code label="Request">
      <span style="font-family: monospace;">curl \</span><br />
      <span style="font-family: monospace;">&nbsp;&nbsp;--request POST \</span><br />
      <span style="font-family: monospace;">&nbsp;&nbsp;--url '{$settings.tenant}/{$settings.tokenEndpoint}'
        \</span><br />
      <span style="font-family: monospace;">&nbsp;&nbsp;--header 'content-type:
        application/x-www-form-urlencoded' \</span><br />
      <span style="font-family: monospace;">&nbsp;&nbsp;--data
        'grant_type=authorization_code&client_id=${$settings.clientId}&code_verifier=${$authorize.codeVerifier}&code=${$authorize.code}'</span>
    </Code>
  </div>
</Step>
