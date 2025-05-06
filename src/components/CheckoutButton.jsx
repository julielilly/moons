import { shopifyClient } from "@/lib/shopify"; // shopify GraphQL client
import { CART_CREATE_MUTATION } from "@/lib/queries"; // GraphQL mutation to create cart
import { useCartStore } from "@/lib/store/cartStore";

export default function CheckoutButton() {
  const cart = useCartStore((state) => state.cart);

  const handleCheckout = async () => {
    // console.log("Initiating checkout with cart:", cart);
    if (cart.length === 0) return;

    // transforms the cart items into the format Shopify expects
    const lines = cart.map((item) => {
      if (!item.variantId || !item.quantity) return null;

      return {
        merchandiseId: item.variantId,
        quantity: item.quantity,
      };
    });

    // sends the cart data to Shopify via the CART_CREATE_MUTATION. This creates a checkout session
    const data = await shopifyClient.request(CART_CREATE_MUTATION, {
      input: {
        lines,
      },
    });

    const cartData = data?.cartCreate?.cart;

    // if Shopify returns a checkout URL, the browser redirects the user to it. This opens Shopify’s native checkout flow.
    if (cartData?.checkoutUrl) {
      window.location.href = cartData.checkoutUrl;
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="button mt-2xs w-full cursor-pointer"
    >
      Gå til betaling
    </button>
  );
}
