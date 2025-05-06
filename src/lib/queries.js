// standard GraphQL query to fetch the first 10 products from Shopify
// this is not data - it’s a plain JavaScript template string (string literal) that defines what you’re asking from Shopify
export const PRODUCTS_QUERY = `
  {
    products(first: 50, sortKey: CREATED_AT, reverse: true) {
        edges {
            node {
                id
                handle
                title
                createdAt
                availableForSale
                images(first: 1) {
                    edges {
                        node {
                        url
                        }
                    }
                }
                variants(first: 1) {
                    edges {
                        node {
                            price {
                                amount
                            }
                            compareAtPrice {
                                amount
                            }
                        }
                    }
                }
            }
        }
    }
  }
`;

export const SINGLE_PRODUCT_QUERY = `
  query ProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      descriptionHtml
      createdAt
      availableForSale
      images(first: 1) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            id 
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
            }
            quantityAvailable
            availableForSale
          }
        }
      }
      metafield(namespace: "custom", key: "color") {
        value
      }
    }
  }
`;

export const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// When you actually run that query (e.g. with shopifyClient.request(PRODUCTS_QUERY)), Shopify returns JSON data like this:
// {
//     "products": {
//       "edges": [
//         {
//           "node": {
//             "id": "gid://shopify/Product/1",
//             "title": "T-Shirt"
//           }
//         },
//         {
//           "node": {
//             "id": "gid://shopify/Product/2",
//             "title": "Hat"
//           }
//         }
//       ]
//     }
//   }
