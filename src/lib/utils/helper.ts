export const encodeKeysForBasicAuth = (stringedKeys: string) => {
  return Buffer.from(stringedKeys).toString("base64");
};

export const getCommonHeaders = (clientId: string, clientSecret: string) => {
  const stringedKeys = `${clientId}:${clientSecret}`;
  return {
    Authorization: `Basic ${encodeKeysForBasicAuth(stringedKeys)}`,
    "Content-Type": "application/json",
    Accept: "application/json"
  };
};
