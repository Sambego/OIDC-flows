<script>
  import { getContext, onMount } from "svelte";
  import { Route, navigate } from "svelte-routing";
  import { state } from "../../services/state.ts";
  import Container from "../../components/Container.svelte";

  const { authorize } = getContext(state);
  onMount(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const savedData = await localStorage.getItem("flows:authorize");

    await authorize.update((a) => ({
      ...a,
      ...JSON.parse(savedData)?.data,
      code: urlParams.get("code"),
    }));

    navigate("/single-page-app/6");
  });
</script>

<Route path="/single-page-app/callback">
  <Container>
    <header class="header">
      <h3 class="heading">Callback</h3>
    </header>
  </Container>
</Route>
