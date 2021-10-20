import { createRandomString } from "../../services/crypto";

export function generateUrl(
  tenant: string,
  endpoint: string,
  clientId: string,
  codeChallenge: string
): string {
  console.log(tenant, endpoint);
  const state = btoa(createRandomString());
  const nonce = btoa(createRandomString());
  return `${tenant.replace(
    /\/$/,
    ""
  )}/${endpoint}?response_type=code&scope=openid%20profile%20email%20offline_access&code_challenge=${codeChallenge}&code_challenge_method=S256&client_id=${clientId}&state=${state}&nonce=${nonce}&redirect_uri=${
    window.location.origin
  }/single-page-app/callback`;
}

export function authorize(url) {
  window.location.assign(url);
}
