<script>
  import { Router, Link } from "svelte-routing";

  import Window from "./icons/window.svg";
  import Phone from "./icons/phone.svg";
  import Terminal from "./icons/terminal.svg";
  import Sliders from "./icons/sliders.svg";

  import Icon from "./Icon.svelte";

  $: console.log(window.location.pathname);
</script>

<style>
  .navigation {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 2rem 1rem 0 0;
    background: var(--color-white);
    border-right: 1px solid var(--color-gray-7);
  }

  .item {
    width: 100%;
    margin: 0 0 1rem;
    padding: 0;
    list-style: none;
  }

  .item-divided {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid var(--color-gray-7);
  }

  :global(.navigation-link) {
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.5rem 2rem 1.5rem 4rem;
    border-radius: 0 3rem 3rem 0;
    color: var(--color-gray-1);
    font-size: 1.5rem;
    text-decoration: none;
  }

  :global(.navigation-link:hover) {
    background: var(--color-gray-8);
  }

  :global(.navigation-link.active),
  :global(.navigation-link.active:hover) {
    background: var(--color-purple);
    color: var(--color-white);
  }

  .badge {
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
    position: absolute;
    right: -0.25rem;
    bottom: 0;
    padding: 0.25rem;
    background: var(--color-gray-1);
    border-radius: 0.25rem;
    font-size: 0.8rem;
    color: var(--color-white);
  }

  :global(.navigation-link.active) .badge {
    background: var(--color-white);
    color: var(--color-gray-1);
  }
</style>

<ul class="navigation">
  <li class="item">
    <Link
      to="/single-page-app"
      title="Single Page App"
      getProps="{() => ({ class: `navigation-link ${window.location.pathname.includes('single-page-app') ? 'active' : ''}` })}"
    >
      <Icon style="margin-right: 1rem;" width="{2.5}">
        <Window /><span class="badge">SPA</span>
      </Icon>
      Single Page App
    </Link>
  </li>
  <li class="item">
    <Link
      to="/regular-web-app"
      title="Regular Web App"
      getProps="{() => ({ class: `navigation-link ${window.location.pathname.includes('regular-web-app') ? 'active' : ''}` })}"
    >
      <Icon style="margin-right: 1rem;" width="{2.5}">
        <Window />
      </Icon>
      Regular Web App
    </Link>
  </li>
  <li class="item">
    <Link
      to="/native-app"
      title="Native App"
      getProps="{() => ({ class: `navigation-link ${window.location.pathname.includes('native-app') ? 'active' : ''}` })}"
    >
      <Icon style="margin-right: 1rem;" width="{2.5}">
        <Phone />
      </Icon>
      Native App
    </Link>
  </li>
  <li class="item">
    <Link
      to="/machine-to-machine"
      title="Machine to Machine"
      getProps="{() => ({ class: `navigation-link ${window.location.pathname.includes('machine-to-machine') ? 'active' : ''}` })}"
    >
      <Icon style="margin-right: 1rem;" width="{2.5}">
        <Terminal />
      </Icon>Machine to Machine
    </Link>
  </li>
  <li class="item item-divided">
    <Link
      to="/settings"
      title="Settings"
      getProps="{() => ({ class: `navigation-link ${window.location.pathname.includes('settings') ? 'active' : ''}` })}"
    >
      <Icon style="margin-right: 1rem;" width="{2.5}">
        <Sliders />
      </Icon>Settings
    </Link>
  </li>
</ul>
