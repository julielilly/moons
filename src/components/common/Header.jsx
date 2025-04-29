"use client";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import HeaderLink from "./HeaderLink";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const buttonRef = useRef(null); // Ref for the hamburger button

  const handleNavigate = () => {
    setMenuOpen(false); // close menu on navigation change
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
    openSubmenuIndex >= 0 && setOpenSubmenuIndex(!openSubmenuIndex); //closes submenu id open (if has index)
  };

  useEffect(() => {
    // Detect the scroll event to toggle the background
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll(); // Initialize scroll state on mount

    window.addEventListener("scroll", handleScroll); // Listen to scroll

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // React to menu state

  return (
    <header
      className={`z-100 fixed w-full ${isScrolled ? "bg-grey shadow" : ""} transition-all`}
    >
      <div className="section flex-center py-4 transition-all">
        <Link href="/">
          <Image
            src={isScrolled ? "/logo-dark.svg" : "/logo.svg"}
            alt="Logo"
            width={190}
            height={60}
            className={`aspect-[190 / 60] h-[40px] w-auto ${isScrolled ? "md:h-[45px] lg:h-[50px]" : "md:h-[50px] lg:h-[60px]"} transition-all`}
          />
        </Link>

        <nav className="flex-center hidden space-x-8 md:flex">
          <HeaderLink
            link="/om-moons"
            link_name="Om Moons"
            submenu={[{ link: "/kontakt", name: "Kontakt" }]}
            isScrolled={isScrolled}
          />

          <HeaderLink
            link="/saunagus"
            link_name="Saunagus"
            isScrolled={isScrolled}
          />

          <HeaderLink
            link="/terapi"
            link_name="Terapi"
            submenu={[
              { link: "/traumeterapi", name: "Traumeterapi" },
              { link: "/naturterapi", name: "Naturterapi" },
              { link: "/breathwork", name: "Breathwork" },
            ]}
            isScrolled={isScrolled}
          />

          <HeaderLink link="/shop" link_name="Shop" isScrolled={isScrolled} />

          <Link
            href="/booking"
            className={`button px-m ${!isScrolled ? "hover:border-background hover:text-background" : ""} py-1.5`}
          >
            Booking
          </Link>
        </nav>

        {/* mobile */}
        <button
          ref={buttonRef}
          className="z-100 relative flex h-5 w-7 items-center justify-center md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span
            className={`duration-250 absolute h-[3px] w-full transition-all ${menuOpen ? "top-1/2 -translate-y-1/2 rotate-45 transform rounded-l-none" : "top-0"} ${isScrolled | menuOpen ? "bg-dark-green" : "bg-background"} `}
          ></span>
          <span
            className={`duration-250 absolute h-[3px] w-full transition-all ${menuOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"} ${isScrolled ? "bg-dark-green" : "bg-background"}`}
          ></span>
          <span
            className={`duration-250 absolute h-[3px] w-full transition-all ${menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45 transform rounded-l-none" : "bottom-0"} ${isScrolled | menuOpen ? "bg-dark-green" : "bg-background"}`}
          ></span>
        </button>

        <HeaderMenu
          menuOpen={menuOpen}
          handleNavigate={handleNavigate}
          openSubmenuIndex={openSubmenuIndex}
          setOpenSubmenuIndex={setOpenSubmenuIndex}
        />
      </div>
    </header>
  );
};

export default Header;
