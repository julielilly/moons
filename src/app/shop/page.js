import { shopifyClient } from "@/lib/shopify";
import { PRODUCTS_QUERY } from "@/lib/queries";

import TopImage from "@/components/common/TopImage";
import HeroImage from "@/app/assets/hat-top.png";
import ProductCard from "@/components/shop/ProductCard";

export default async function ShopPage() {
  const data = await shopifyClient.request(PRODUCTS_QUERY); // runs the GraphQL query using the Shopify client
  const products = data.products.edges.map((edge) => edge.node); // extract the product nodes from the edges array

  console.log(products);
  return (
    <main>
      <title>Shop - Moons by Mogens Gyldenløve</title>
      <TopImage
        header="Shop – Håndlavede Saunahuer"
        copy="Hos Moons finder du udvalgte, håndlavede saunahuer – skabt med respekt for både funktion og æstetik. Saunahuen er mere end bare et stykke udstyr. Den beskytter hovedet og ørene mod den intense varme i saunaen og hjælper kroppen med at bevare sin balance i temperaturforskellen mellem krop og omgivelser. Resultatet? En mere behagelig, dybere og længere gusoplevelse."
        imageName={HeroImage}
        imageAlt="saunahuer"
      />

      <section className="section gap-m grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
}
