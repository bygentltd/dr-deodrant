const SHOP = "drdeodrant.myshopify.com";
const TOKEN = "e5272fb300e4dfe9ada40cd200dfc6c6";

const query = `
{
  productByHandle(handle: "dr-deodrantnatural-crystal-deodorant") {
    id
    title
    availableForSale
    variants(first: 5) {
      edges {
        node {
          id
          title
          availableForSale
        }
      }
    }
  }
}
`;

async function test() {
  const response = await fetch(
    `https://${SHOP}/api/2024-04/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": TOKEN,
      },
      body: JSON.stringify({ query }),
    }
  );

  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}

test();