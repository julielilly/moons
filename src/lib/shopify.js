import { GraphQLClient } from "graphql-request";

// get the Shopify store domain and Storefront API token from .env.local
const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

const endpoint = `https://${domain}/api/2025-04/graphql.json`; // API endpoint

// creates a new instance of the GraphQL client with the endpoint and required headers
export const shopifyClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": token, // used to authenticate requests to the Storefront API
    "Content-Type": "application/json", // ensures that the request content type is JSON
  },
});
