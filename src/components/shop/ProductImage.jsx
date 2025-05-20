"use client";
import { useState } from "react";
import useLayoutStore from "@/lib/store/layoutStore";
import Image from "next/image";

const ProductImage = ({ imageUrl, alt }) => {
  const headerHeight = useLayoutStore((state) => state.headerHeight);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Image
        src={imageUrl}
        alt={alt}
        width={700}
        height={700}
        onClick={openModal}
        className="h-full w-full cursor-pointer rounded-2xl object-cover sm:h-auto sm:object-contain"
      />

      {isModalOpen && (
        <div
          className="gradient-full fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* e.stopPropagation() stops click from reaching parent ie triggering the close */}
          {/*header-height top-7 */}
          <div
            className="relative"
            style={{ marginTop: headerHeight }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="bg-foreground text-background absolute right-2 top-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full"
              aria-label="Luk billede"
            >
              ✕
            </button>
            <img
              src={imageUrl}
              alt={alt}
              className="max-h-[70vh] max-w-[90vw] rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductImage;
