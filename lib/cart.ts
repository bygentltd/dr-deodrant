import shopifyFetch from "./shopify";

export async function createCart(variantId: string) {
  const query = `
    mutation CreateCart($lines: [CartLineInput!]!) {
      cartCreate(input: { lines: $lines }) {
        cart {
          id
          checkoutUrl
          totalQuantity
        }
      }
    }
  `;

  const data = await shopifyFetch(query, {
    lines: [{ merchandiseId: variantId, quantity: 1 }],
  });

  return data.cartCreate.cart;
}