import { shopifyClient } from "@/lib/shopify";
import { SINGLE_PRODUCT_QUERY } from "@/lib/queries";

import Link from "next/link";
import AddToCart from "@/components/shop/AddToCart";
import Accordion from "@/components/common/Accordion";
import ShopInspiration from "@/components/shop/ShopInspiration";
import ProductImage from "@/components/shop/ProductImage";

const Page = async ({ params }) => {
  const { handle } = await params;

  const data = await shopifyClient.request(SINGLE_PRODUCT_QUERY, { handle }); // sends a GraphQL request to Shopify, asking for the product with the given handle
  const product = data.productByHandle; // access the product from the response

  let color = "";
  if (product.metafield?.value) {
    color = JSON.parse(product.metafield.value).join(", ");
  }

  const newProduct =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 14; // created within the last 14 days
  const onSale = product.variants.edges[0].node.compareAtPrice;
  const soldOut = !product.availableForSale;

  console.log("newProduct", product.createdAt);

  const discountPercent = onSale
    ? Math.round(
        ((onSale.amount - product.variants.edges[0].node.price.amount) /
          onSale.amount) *
          100,
      )
    : 0;

  const tag = "absolute top-0 mt-xs px-2xs text-[0.75rem]/6 bg-background ";

  // if there is no product
  if (!product)
    return (
      <main className="section py-30">
        <h1>Produkt ikke fundet</h1>
        <p>
          Siden du anmodede om kunne ikke findes. Brug navigationen ovenfor til
          at lokalisere produktet.
        </p>
      </main>
    );

  return (
    <main className="sm:pt-23 pt-15">
      <title>Shop - Moons by Mogens Gyldenløve</title>
      {/* skal være header height */}
      <section className="section mt-2xl relative z-10">
        <div className="text-dark-grey mb-xs lowercase">
          <Link href="/shop" className="text-foreground font-normal">
            shop
          </Link>{" "}
          / {product.title}
        </div>

        <div className="gap-2xl grid sm:grid-cols-2">
          {/* header height */}
          <div className="top-18 h-fit sm:sticky">
            <div className="relative h-[400px] w-full sm:h-full sm:w-fit">
              {/* nyhed */}
              {newProduct && !onSale && (
                <div className={`${tag} rounded-e-sm`}>Nyhed</div>
              )}

              {/* udsalg */}
              {onSale && (
                <div
                  className={`${tag} text-background rounded-e-sm bg-red-800`}
                >
                  Tilbud
                </div>
              )}

              {/* udsolgt */}
              {soldOut && (
                <div className={`${tag} right-0 rounded-s-sm`}>Udsolgt</div>
              )}

              <ProductImage
                imageUrl={product.images.edges[0]?.node.url}
                alt={product.title}
              />
            </div>
          </div>

          <div className="">
            <h1 className="text-h2">{product.title}</h1>

            <p className="text-dark-green text-caption">{color}</p>

            <div className="my-xs">
              <p
                className={`${soldOut ? "text-dark-grey" : "text-dark-green"} text-body-lg`}
              >
                {new Intl.NumberFormat("da-DK", {
                  style: "currency",
                  currency: "DKK",
                }).format(product.variants.edges[0].node.price.amount)}
              </p>

              {onSale && (
                <p className="m-0">
                  <span className="text-dark-grey line-through">
                    {new Intl.NumberFormat("da-DK", {
                      style: "currency",
                      currency: "DKK",
                    }).format(onSale.amount)}
                  </span>
                  <span
                    className={`${soldOut ? "text-dark-grey" : "text-red-800"} no-line-through ml-2xs`}
                  >
                    -${discountPercent}%
                  </span>
                </p>
              )}
            </div>

            {!soldOut ? (
              <AddToCart product={product} />
            ) : (
              <p className="text-red-800">Ikke på lager</p>
            )}

            <div
              className="shopifyHtml mt-m col-span-2"
              dangerouslySetInnerHTML={{
                __html: product.descriptionHtml,
              }}
            />

            <Accordion
              items={[
                {
                  id: "1",
                  question: "Størrelse og pasform",
                  answer:
                    "Saunahuen fra Moons findes i én størrelse, men da de er håndlavede, kan der forekomme små variationer i størrelse og form. Er du i tvivl, har du mulighed for at prøve dem i forbindelse med en gus-session.",
                },
                {
                  id: "2",
                  question: "Materiale",
                  answer:
                    "Huerne er fremstillet i 100% uld, hvilket giver optimal varmeisolering og komfort under saunagus.",
                },
                {
                  id: "3",
                  question: "Levering og returnering",
                  answer:
                    "Du kan vælge at afhente din hue i Herlev efter aftale, eller få den tilsendt for 50 kr. Leveringstiden er typisk 3-5 hverdage. Returnering er muligt inden for 14 dage, så længe huen er ubrugt. Returnering sker for købers egen regning.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <ShopInspiration />
    </main>
  );
};

export default Page;
