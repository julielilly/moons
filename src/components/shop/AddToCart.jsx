"use client";

import { useCartStore } from "@/lib/store/cartStore";

const AddToCart = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  const variant = product.variants.edges[0].node;

  // checks current quantity of this product in the cart
  const currentItem = cart.find((item) => item.id === product.id);
  const currentQuantity = currentItem ? currentItem.quantity : 0;

  const atMax = currentQuantity >= variant.quantityAvailable;

  const onSale = variant.compareAtPrice;

  const discountPercent = onSale
    ? Math.round(((onSale.amount - variant.price.amount) / onSale.amount) * 100)
    : 0;

  const handleClick = () => {
    if (!atMax) {
      addToCart({
        id: product.id,
        title: product.title,
        variantId: variant.id,
        quantity: 1,
        image: product.images.edges[0]?.node.url,
        price: variant.price.amount,
        onSale: onSale,
        discountPercent: discountPercent,
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={atMax}
      className={`button text-caption cursor-pointer ${atMax ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {atMax ? "I kurven" : "Tilføj til kurv"}
    </button>
  );
};

export default AddToCart;
