const url = 'https://drdeodrant.myshopify.com/api/2024-01/graphql.json';
const headers = {
  'Content-Type': 'application/json',
  'X-Shopify-Storefront-Access-Token': 'e5272fb300e4dfe9ada40cd200dfc6c6'
};

const query = `
  query {
    product(handle: "dr-deodrantnatural-crystal-deodorant") {
      id
      title
      options {
        name
        values
      }
      variants(first: 5) {
        edges {
          node {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
`;

fetch(url, { method: 'POST', headers, body: JSON.stringify({ query }) })
  .then(r => r.json())
  .then(res => console.log(JSON.stringify(res.data.product, null, 2)))
  .catch(console.error);
