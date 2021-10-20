<script>
  import { Route } from "svelte-routing";

  import Flow from "../../components/Flow.svelte";

  import Step1 from "../../components/steps/regular/step-1.svelte";
  import Step2 from "../../components/steps/regular/step-2.svelte";
  import Step3 from "../../components/steps/regular/step-3.svelte";
  import Step4 from "../../components/steps/regular/step-4.svelte";
  import Step5 from "../../components/steps/regular/step-5.svelte";
  import Step6 from "../../components/steps/regular/step-6.svelte";
  import Step7 from "../../components/steps/regular/step-7.svelte";
  import Step8 from "../../components/steps/regular/step-8.svelte";
  import Step9 from "../../components/steps/regular/step-9.svelte";
  import Step10 from "../../components/steps/regular/step-10.svelte";

  const steps = [
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
    Step9,
    Step10,
  ];
</script>

<Route path="regular-web-app">
  <Flow
    type="Regular Web Application"
    flow="Authorization Code Flow"
    link="https://auth0.com/docs/flows/authorization-code-flow"
    steps="{steps}"
  />
</Route>
