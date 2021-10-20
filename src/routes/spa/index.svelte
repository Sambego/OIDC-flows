<script>
  import { Route } from "svelte-routing";
  import Redirect from "../../components/Redirect.svelte";
</script>

<Route path="/single-page-app/">
  <Redirect to="/single-page-app/1" />
</Route>
