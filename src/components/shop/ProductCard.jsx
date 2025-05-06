import Link from "next/link";

const ProductCard = ({ product }) => {
  const newProduct =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 14; // created within the last 14 days
  const onSale = product.variants.edges[0].node.compareAtPrice;
  const soldOut = !product.availableForSale;

  const discountPercent = onSale
    ? Math.round(
        ((onSale.amount - product.variants.edges[0].node.price.amount) /
          onSale.amount) *
          100,
      )
    : 0;

  const tag = "absolute top-0 mt-xs px-2xs text-[0.75rem]/6 bg-background ";

  return (
    <article className="product-card group relative">
      <Link
        href={`/shop/${product.handle}`}
        className="group absolute bottom-0 left-0 right-0 top-0"
      />

      {/* nyhed */}
      {newProduct && !onSale && (
        <div className={`${tag} rounded-e-sm`}>Nyhed</div>
      )}

      {/* udsalg */}
      {onSale && (
        <div className={`${tag} text-background rounded-e-sm bg-red-800`}>
          Tilbud
        </div>
      )}

      {/* udsolgt */}
      {soldOut && <div className={`${tag} right-0 rounded-s-sm`}>Udsolgt</div>}

      <div className="image-container aspect-4/5 mb-2 w-full overflow-hidden rounded-lg">
        <img
          src={product.images.edges[0]?.node.url}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className={`${soldOut ? "text-dark-grey" : ""}`}>
        <p className="font-h text-body-lg">{product.title}</p>
        <p className="text-caption m-0">
          {new Intl.NumberFormat("da-DK", {
            style: "currency",
            currency: "DKK",
          }).format(product.variants.edges[0].node.price.amount)}
        </p>
        {onSale && (
          <p className="m-0 text-[0.75rem]">
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
    </article>
  );
};

export default ProductCard;
