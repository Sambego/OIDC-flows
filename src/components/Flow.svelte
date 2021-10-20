<script>
  import { navigate } from "svelte-routing";

  import Link from "./icons/link-45deg.svg";
  import Left from "./icons/caret-left-fill.svg";
  import Right from "./icons/caret-right-fill.svg";
  import Person from "./icons/person.svg";
  import Window from "./icons/window.svg";
  import Shield from "./icons/shield.svg";
  import Terminal from "./icons/terminal.svg";

  import Container from "./Container.svelte";
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";
  import { onMount } from "svelte";

  export let type = "";
  export let flow = "";
  export let link = "";
  export let steps = [];
  export let currentStep = 1;

  function handlePreviousStep() {
    if (currentStep > 1) {
      return navigate(Number(currentStep) - 1);
    }
  }

  function handleNextStep() {
    if (currentStep < steps.length + 1) {
      return navigate(Number(currentStep) + 1);
    }
  }
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

  .sub-heading {
    margin: 0;
    font-size: 1.6rem;
    font-style: italic;
  }
  .link {
    display: inline-block;
    width: 1.6rem;
    padding: 0;
    background: none;
    color: var(--color-purple);
    vertical-align: middle;
  }

  .explorer-container {
    position: relative;
    height: 100%;
  }

  .explorer,
  .explorer-background {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 0;
  }

  .explorer-background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: calc(100% - 12rem);
    z-index: 1;
  }

  .explorer-background .section {
    height: 100%;
    padding: 2rem;
    text-align: center;
    border-right: 1px solid var(--color-gray-7);
  }

  .section:last-child {
    border: none;
  }

  .explorer {
    position: relative;
    z-index: 1;
    padding: 8rem 0 2rem;
    overflow: auto;
    max-height: calc(100vh - 24rem);
  }

  .section-header {
    display: inline-block;
    padding: 0.5rem 2rem;
    background: var(--color-green);
    border-radius: 0.5rem;
    color: var(--color-white);
    font-weight: bold;
  }

  .section-header-icon {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    padding: 0.5rem;
    background: var(--color-white);
    border-radius: 50%;
    color: var(--color-green);
  }

  .section-header-app {
    background: var(--color-yellow);
  }

  .section-header-app .section-header-icon {
    color: var(--color-yellow);
  }

  .section-header-auth0 {
    background: var(--color-purple);
  }

  .section-header-auth0 .section-header-icon {
    color: var(--color-purple);
  }

  .section-header-api {
    background: var(--color-orange);
  }

  .section-header-api .section-header-icon {
    color: var(--color-orange);
  }
</style>

<Container>
  <header class="header">
    <div>
      <h3 class="heading">{type}</h3>
      <p class="sub-heading">
        {flow}
        <a href="{link}" class="link" target="_blank"><Icon>
            <Link />
          </Icon></a>
      </p>
    </div>
    <div>
      <Button
        on:click="{handlePreviousStep}"
        disabled="{Number(currentStep) === 1}"
      >
        <Icon style="margin-right: 1rem;">
          <Left />
        </Icon>
        Previous step
      </Button>

      <Button
        on:click="{handleNextStep}"
        disabled="{Number(currentStep) === steps.length}"
      >
        Next step
        <Icon style="margin-left: 1rem;">
          <Right />
        </Icon>
      </Button>
    </div>
  </header>
  <section class="explorer-container">
    <div class="explorer-background">
      <section class="section section-user">
        <header class="section-header section-header-user">
          <span class="section-header-icon"><Icon>
              <Person />
            </Icon></span>User
        </header>
      </section>
      <section class="section section-app">
        <header class="section-header section-header-app">
          <span class="section-header-icon"><Icon>
              <Window />
            </Icon></span>Application
        </header>
      </section>
      <section class="section section-auth0">
        <header class="section-header section-header-auth0">
          <span class="section-header-icon"><Icon>
              <Shield />
            </Icon></span>Auth0 tenant
        </header>
      </section>
      <section class="section section-api">
        <header class="section-header section-header-api">
          <span class="section-header-icon"><Icon>
              <Terminal />
            </Icon></span>API
        </header>
      </section>
    </div>
    <div class="explorer">
      {#each steps.filter((step, index) => index < currentStep) as step, i}
        <svelte:component this="{step}" active="{i === currentStep - 1}" />
      {/each}
    </div>
  </section>
</Container>
