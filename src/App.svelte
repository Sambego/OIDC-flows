<script lang="ts">
  import { Router } from "svelte-routing";

  import State from "./components/State.svelte";
  import Header from "./components/Header.svelte";
  import Navigation from "./components/Navigation.svelte";

  import Spa from "./routes/spa/index.svelte";
  import SpaFlow from "./routes/spa/Flow.svelte";
  import SpaCallback from "./routes/spa/Callback.svelte";
  import Regular from "./routes/regular/index.svelte";
  import Settings from "./routes/Settings.svelte";
</script>

<style>
  .main {
    display: grid;
    grid-template-areas:
      "header header"
      "navigation explorer";
    grid-template-columns: 26rem 1fr;
    grid-template-rows: 6rem calc(100vh - 6rem);
    column-gap: 2rem;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
</style>

<Router>
  <State>
    <main class="main">
      <Header />
      <Navigation />

      <!-- Routes -->
      <Spa />
      <SpaFlow />
      <SpaCallback />
      <Regular />
      <Settings />
    </main>
  </State>
</Router>
