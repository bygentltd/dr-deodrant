export const PRODUCT_QUERY = `
query Product($handle: String!) {
  productByHandle(handle: $handle) {
    id
    title
    description
    images(first: 10) {
      edges {
        node {
          url
        }
      }
    }
    variants(first: 1) {
      edges {
        node {
          id
          title
          availableForSale
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`;