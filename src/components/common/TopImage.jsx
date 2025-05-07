"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import useLayoutStore from "@/lib/store/layoutStore";

const TopImage = ({
  linkSection,
  copy,
  header,
  imageName,
  imageAlt,
  children,
}) => {
  const pathname = usePathname();
  const isFrontPage = pathname === "/";
  const headerHeight = useLayoutStore((state) => state.headerHeight);

  const scrollDown = () => {
    const linkSectionTop = linkSection.current.offsetTop;
    console.log("linkSectionTop", linkSectionTop);
    window.scrollTo({
      top: linkSectionTop - headerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-image relative grid overflow-hidden">
      <div className="col-span-full row-span-full">
        <Image
          src={imageName}
          alt={imageAlt}
          className={`${isFrontPage ? "h-[80svh]" : "h-[50svh]"} min-h-full w-full object-cover`}
        />
      </div>

      <div className="gradient-left-right absolute h-full w-full"></div>
      <div className="gradient-top-bottom absolute h-full w-full"></div>

      <div
        className={`section py-3xl pt-15 sm:pt-3xl relative col-span-full row-span-full flex flex-col justify-center ${!isFrontPage ? "pb-xl" : ""}`}
      >
        <h1
          className={`text-background pt-m ${isFrontPage ? "text-display max-w-180" : ""}`}
        >
          {/* splits the sentence if it contains a dash */}
          {header.includes("–") ? (
            <>
              {header.split("–")[0].trim()}
              <br />–{header.split("–")[1]}
            </>
          ) : (
            header
          )}
        </h1>
        <p
          className={`text-background text-body-lg ${isFrontPage ? "max-w-120" : "max-w-150"} my-s`}
        >
          {copy}
        </p>

        {children && (
          <p
            className={`text-background text-body-lg ${isFrontPage ? "max-w-120" : "max-w-150"} -mt-2xs my-s`}
          >
            {children}
          </p>
        )}

        {isFrontPage && (
          <Link
            href="booking"
            className="button hover:border-background hover:text-background self-start"
          >
            Book din tid i dag
          </Link>
        )}
      </div>

      {/* scroll-button */}
      {isFrontPage && (
        <button
          className="group absolute bottom-0 left-1/2 hidden h-[85px] w-[150px] -translate-x-1/2 translate-y-1/2 cursor-pointer items-start justify-center rounded-t-full md:flex"
          onClick={() => scrollDown()}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-50 ml-1 mt-1"
          >
            <path
              d="M21.1834 25.8999L30.6 16.4666C30.7562 16.3116 30.8802 16.1273 30.9648 15.9242C31.0495 15.7211 31.093 15.5032 31.093 15.2832C31.093 15.0632 31.0495 14.8454 30.9648 14.6423C30.8802 14.4392 30.7562 14.2548 30.6 14.0999C30.2877 13.7895 29.8653 13.6152 29.425 13.6152C28.9847 13.6152 28.5623 13.7895 28.25 14.0999L19.9167 22.3499L11.6667 14.0999C11.3544 13.7895 10.932 13.6152 10.4917 13.6152C10.0514 13.6152 9.62896 13.7895 9.31669 14.0999C9.15921 14.2542 9.03392 14.4383 8.94809 14.6414C8.86227 14.8446 8.8176 15.0627 8.81669 15.2832C8.8176 15.5037 8.86227 15.7219 8.94809 15.925C9.03392 16.1281 9.15921 16.3122 9.31669 16.4666L18.7334 25.8999C18.8894 26.0691 19.0788 26.2041 19.2897 26.2964C19.5005 26.3888 19.7282 26.4364 19.9584 26.4364C20.1885 26.4364 20.4162 26.3888 20.627 26.2964C20.8379 26.2041 21.0273 26.0691 21.1834 25.8999V25.8999Z"
              fill="#7C8340"
              className="fill-background group-hover:fill-dark-green duration-400 transition-all ease-out"
            />
          </svg>
          <Image
            src="/icons/ellipse.svg"
            alt="pil"
            width={85}
            height={150}
            className="duration-400 absolute bottom-0 h-0 w-full transition-all ease-out group-hover:h-full"
          />
        </button>
      )}
    </div>
  );
};

export default TopImage;
