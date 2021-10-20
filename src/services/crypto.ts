export const CHARSET =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";

export const getCrypto = () => {
  //ie 11.x uses msCrypto
  return (window.crypto || (window as any).msCrypto) as Crypto;
};

export const getCryptoSubtle = () => {
  const crypto = getCrypto();
  //safari 10.x uses webkitSubtle
  return crypto.subtle || (crypto as any).webkitSubtle;
};

export const createRandomString = (): string => {
  const randomValues = Array.from(
    getCrypto().getRandomValues(new Uint8Array(43))
  );

  return randomValues.reduce((r, v) => (r += CHARSET[v % CHARSET.length]), "");
};

export const sha256 = async (input: string): Promise<string> => {
  return getCryptoSubtle().digest(
    { name: "SHA-256" },
    new TextEncoder().encode(input)
  );
};

export const urlEncodeB64 = (input: string) => {
  const b64Chars: { [index: string]: string } = { "+": "-", "/": "_", "=": "" };
  return input.replace(/[+/=]/g, (m: string) => b64Chars[m]);
};

export const bufferToBase64UrlEncoded = (input: number[] | Uint8Array) => {
  const ie11SafeInput = new Uint8Array(input);
  return urlEncodeB64(
    window.btoa(String.fromCharCode(...Array.from(ie11SafeInput)))
  );
};
