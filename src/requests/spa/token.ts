import { createRandomString } from "../../services/crypto";

export function generateUrl(tenant: string, endpoint: string): string {
  return `${tenant.replace(/\/$/, "")}/${endpoint}`;
}

export function token(
  url: string,
  client_id: string,
  code: string,
  code_verifier: string,
  audience: string = ""
) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id,
      code,
      code_verifier,
      grant_type: "authorization_code",
      redirect_uri: `${window.location.origin}/single-page-app/7`,
      audience,
    }),
  }).then((response) => response.json());
}
