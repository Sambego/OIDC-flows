<script>
  import { onMount, getContext } from "svelte";
  import { Route } from "svelte-routing";

  import { state } from "../../services/state";

  import Flow from "../../components/Flow.svelte";

  import Step1 from "../../components/steps/spa/step-1.svelte";
  import Step2 from "../../components/steps/spa/step-2.svelte";
  import Step3 from "../../components/steps/spa/step-3.svelte";
  import Step4 from "../../components/steps/spa/step-4.svelte";
  import Step5 from "../../components/steps/spa/step-5.svelte";
  import Step6 from "../../components/steps/spa/step-6.svelte";
  import Step7 from "../../components/steps/spa/step-7.svelte";
  import Step8 from "../../components/steps/spa/step-8.svelte";
  import Step9 from "../../components/steps/spa/step-9.svelte";
  import Step10 from "../../components/steps/spa/step-10.svelte";
  import Step11 from "../../components/steps/spa/step-11.svelte";

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
    Step11,
  ];
</script>

<Route path="/single-page-app/:step" let:params>
  <Flow
    type="Single Page Application"
    flow="Authorization Code Flow with Proof Key for Code Exchange (PKCE)"
    link="https://auth0.com/docs/flows/authorization-code-flow-with-proof-key-for-code-exchange-pkce"
    steps="{steps}"
    currentStep="{params.step}"
  />
</Route>
