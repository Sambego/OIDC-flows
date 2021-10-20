<script>
  import { getContext, onMount } from "svelte";
  import { state } from "../../../services/state";

  import Step from "../../Step.svelte";
  import Code from "../../Code.svelte";
  import Info from "../../Info.svelte";
  import Modal from "../../Modal.svelte";
  import {
    createRandomString,
    sha256,
    bufferToBase64UrlEncoded,
  } from "../../../services/crypto";

  export let active;

  let showInfo = false;
  const { authorize } = getContext(state);
  const codeVerifier = createRandomString();
  const codeChallenge = sha256(codeVerifier);

  const handleToggleInfo = () => {
    showInfo = !showInfo;
  };

  onMount(async () => {
    if (active) {
      const challengeBuffer = await codeChallenge;
      const challenge = bufferToBase64UrlEncoded(challengeBuffer);
      authorize.update(() => {
        return {
          codeVerifier,
          codeChallenge: challenge,
        };
      });

      localStorage.setItem(
        "flows:authorize",
        JSON.stringify({
          type: "spa",
          data: {
            codeVerifier,
            codeChallenge: challenge,
          },
        })
      );
    }
  });
</script>

<Step from="{2}" to="{2}" active="{active}">
  <span slot="title">Generate a <strong>code verifier</strong> and code <strong>challenge</strong>
    <Info on:click="{handleToggleInfo}" />
  </span>
  <span slot="details">
    <Code label="Code verifier">{codeVerifier}</Code>
    {#await codeChallenge then challenge}
      <Code label="Code challenge">{bufferToBase64UrlEncoded(challenge)}</Code>
    {/await}
    <Modal active="{showInfo}">
      <h4>Code challenge</h4>
      <p>
        The code challenge is a high-entropy cryptographic random string using
        the unreserved characters
        <Code color="{'var(--color-gray-7)'}">[A-Z]</Code>,
        <Code color="{'var(--color-gray-7)'}">[a-z]</Code>,
        <Code color="{'var(--color-gray-7)'}">[0-9]</Code>,
        <Code color="{'var(--color-gray-7)'}">-._ ~</Code>
        , with a minimum length of 43 characters and a maximum length of 128
        characters.
      </p>
      <p>
        <em>It is recommended that the output of a suitable random number
          generator be used to create a 32-octet sequence. The octet sequence is
          then base64url-encoded to produce a 43-octet URL safe string to use as
          the code verifier</em>
      </p>

      <h4>Code verifier</h4>
      <p>
        The code challenge derived from the code verifier by using one of the
        following transformations on the codeverifier:
      </p>
      <ul>
        <li>
          <strong>plain:</strong> the code verifier is the same as the code challenge.
        </li>
        <li>
          <strong>S256:</strong> the code verifier is a
          <Code color="{'var(--color-gray-7)'}">base64url</Code>
          encoded,
          <Code color="{'var(--color-gray-7)'}">SHA-256</Code>
          hash from the code challenge.
        </li>
      </ul>
    </Modal>
  </span>
</Step>
