const SHOPIFY_DOMAIN = "drdeodrant.myshopify.com";
const STOREFRONT_TOKEN = "e5272fb300e4dfe9ada40cd200dfc6c6";

const endpoint = `https://${SHOPIFY_DOMAIN}/api/2024-07/graphql.json`;

async function shopifyFetch(query: string, variables = {}) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

export default shopifyFetch;