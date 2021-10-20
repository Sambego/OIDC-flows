<script>
  import { getContext } from "svelte";
  import { state } from "../../../services/state";

  import Step from "../../Step.svelte";
  import Info from "../../Info.svelte";
  import Modal from "../../Modal.svelte";
  import Code from "../../Code.svelte";

  export let active;
  let showInfo;

  const handleToggleInfo = () => {
    showInfo = !showInfo;
  };
</script>

<Step from="{3}" to="{3}" active="{active}">
  <span slot="title">Validate code verifier and challenge
    <Info on:click="{handleToggleInfo}" />
    <Modal active="{showInfo}">
      <h4>Validate code challenge and verifier</h4>
      <p>
        The authorization server (Auth0) verifies the <strong>code verifier</strong>
        by calculating the <strong>code challenge</strong> from the received <strong
        >code verifier</strong> and comparing it with the previously associated <strong
        >code challenge</strong>.
      </p>
      <ul>
        <li>
          If the code challenge method was
          <Code color="{'var(--color-gray-7)'}">plain</Code>, they are compared
          directly.
        </li>
        <li>
          If the code challenge method was
          <Code color="{'var(--color-gray-7)'}">S256</Code>, the received <strong
          >code verifier</strong> is hashed by
          <Code color="{'var(--color-gray-7)'}">SHA-256</Code>,
          <Code color="{'var(--color-gray-7)'}">base64url-encoded</Code>, and
          then compared to the <strong>code challenge</strong>,
        </li>
      </ul>
      <p>
        If the values are equal, the token endpoint must continue processing as
        normal If the values are not equal, an error response indicating
        <Code color="{'var(--color-gray-7)'}">invalid_grant</Code>
        must be returned.
      </p>
    </Modal></span>
</Step>
