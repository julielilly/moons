import { shopifyClient } from "@/lib/shopify";
import { PRODUCTS_QUERY } from "@/lib/queries";

import ProductCard from "@/components/shop/ProductCard";

const ShopInspiration = async () => {
  const data = await shopifyClient.request(PRODUCTS_QUERY); // runs the GraphQL query using the Shopify client
  const products = data.products.edges.map((edge) => edge.node); // extract the product nodes from the edges array

  return (
    <section className="section">
      <h3 className="mb-xs text-center">Bliv inspireret</h3>
      <div className="gap-m grid grid-cols-2 md:grid-cols-4">
        {/* .slice() creates a shallow copy of a portion of an array without modifying the original array */}
        {products.slice(0, 4).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ShopInspiration;
