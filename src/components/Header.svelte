<script lang="ts">
  import Auth0 from "./icons/auth0-logo.svg";
  import Flows from "./icons/flows.svg";
</script>

<style>
  .header {
    grid-area: header;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    background: var(--color-white);
    border-bottom: 1px solid var(--color-gray-7);
  }

  .link {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2rem 4rem;
    color: var(--color-gray-1);
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
  }

  .logo {
    width: 26rem;
    margin-right: 1rem;
    border-right: 1px solid var(--color-gray-7);
  }

  .icon {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin: 0 1rem 0 0;
  }

  .icon-fill {
    padding: 0.5rem;
    background: var(--color-purple);
    border-radius: 0.5rem;
    color: var(--color-white);
  }

  .auth0 {
    display: inline-block;
    width: 8.5rem;
    height: 3rem;
    margin: 0 1rem 0 0;
  }
</style>

<header class="header">
  <a href="/" title="Go to the homepage" class="link logo">
    <span class="icon icon-fill">
      <Flows />
    </span> OIDC Flows
  </a>
  <a
    href="https://auth0.com/developer"
    title="Go to the Auth0 developers portal"
    class="link"
  >
    <span class="auth0">
      <Auth0 />
    </span>
  </a>
</header>
