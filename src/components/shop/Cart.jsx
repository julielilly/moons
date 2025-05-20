"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { useCartStore } from "@/lib/store/cartStore";
import CheckoutButton from "@/components/shop/CheckoutButton";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const [cartOpen, setCartOpen] = useState(false);

  const toggleCartState = (e) => {
    e.stopPropagation();
    setCartOpen(!cartOpen);
  };

  const cartEmpty = cart.length === 0;

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const prevCartLength = useRef(cart.length);
  useEffect(() => {
    if (cart.length > prevCartLength.current) {
      setCartOpen(true); // opens cart if item is added
    }

    if (cart.length === 0 && prevCartLength.current > 0) {
      setCartOpen(false); // closes if last item is removed
    }

    prevCartLength.current = cart.length;
  }, [cart]);

  return (
    <div
      className={`z-100 fixed bottom-0 right-0 top-0 transition-all duration-300 ${cartOpen ? "left-0" : ""} bg-foreground/60`} // semi-transparent background
      onClick={() => setCartOpen(false)}
    >
      <div
        className={`z-100 fixed bottom-0 right-0 w-[70vw] min-w-[280px] max-w-[400px] transition-all duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {!cartEmpty && (
          <button
            className="bottom-xs -left-19 absolute cursor-pointer"
            onClick={(e) => toggleCartState(e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="60px"
              viewBox="0 -960 960 960"
              width="60px"
              fill=""
              className="fill-dark-green bg-grey p-xs rounded-full shadow"
            >
              <path d="M221-120q-27 0-48-16.5T144-179L42-549q-5-19 6.5-35T80-600h190l176-262q5-8 14-13t19-5q10 0 19 5t14 13l176 262h192q20 0 31.5 16t6.5 35L816-179q-8 26-29 42.5T739-120H221Zm-1-80h520l88-320H132l88 320Zm260-80q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM367-600h225L479-768 367-600Zm113 240Z" />
            </svg>
            <div className="bg-dark-green text-background absolute -left-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full text-[0.75rem]">
              {cart.length}
            </div>
          </button>
        )}

        <div
          className="bg-background p-s flex h-[100svh] flex-col justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex-center mb-4">
              <p className="text-h3 font-semibold">Kurv</p>

              <button
                onClick={() => setCartOpen(false)}
                className="text-h4 text-foreground p-xs pb-2xs -mt-xs -mr-xs cursor-pointer"
                aria-label="Luk kurven"
              >
                ✕
              </button>
            </div>

            {cartEmpty && <p>Kurven er tom</p>}

            <div className="max-h-[75svh] overflow-y-scroll">
              {cart.map((item) => (
                <div key={item.id} className="mb-xs gap-2xs flex">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="aspect-square w-[30%] rounded-lg object-cover"
                  />

                  <div>
                    <p className="text-h4">{item.title}</p>
                    <div className="mt-2xs">
                      <p className="text-body-lg">
                        {new Intl.NumberFormat("da-DK", {
                          style: "currency",
                          currency: "DKK",
                        }).format(item.price)}
                      </p>

                      {item.onSale && (
                        <p className="m-0">
                          <span className="text-dark-grey line-through">
                            {new Intl.NumberFormat("da-DK", {
                              style: "currency",
                              currency: "DKK",
                            }).format(item.onSale.amount)}
                          </span>
                          <span className="no-line-through ml-2xs text-red-800">
                            -${item.discountPercent}%
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-auto h-fit cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="22px"
                      viewBox="0 -960 960 960"
                      width="22px"
                      fill=""
                    >
                      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="flex-center text-body-lg font-bold">
              Total -{" "}
              {cart.length === 1 ? "1 Produkt" : ` ${cart.length} Produkter`}
              <span className="font-normal">
                {new Intl.NumberFormat("da-DK", {
                  style: "currency",
                  currency: "DKK",
                }).format(totalPrice)}
              </span>
            </p>
            <CheckoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
