"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import HeaderLink from "./HeaderLink";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [pageHasTopImage, setPageHasTopImage] = useState(true);
  const pathname = usePathname();

  const solidHeader = isScrolled || !pageHasTopImage;

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

    handleScroll(); // initialize scroll state on mount

    window.addEventListener("scroll", handleScroll); // listen to scroll

    // checks for topImage whenever the pathname changes
    const topImgageFound = document.querySelector(".top-image");
    setPageHasTopImage(!!topImgageFound);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]); // Listen to pathname changes

  return (
    <header
      className={`z-100 fixed w-full ${solidHeader ? "bg-grey shadow" : ""} transition-all`}
    >
      <div className="section flex-center duration-250 py-4 transition-all">
        <Link href="/">
          <Image
            src={solidHeader ? "/logo-dark.svg" : "/logo.svg"}
            alt="Logo"
            width={190}
            height={60}
            className={`aspect-[190 / 60] h-[40px] w-auto ${isScrolled ? "md:h-[45px] lg:h-[50px]" : "md:h-[50px] lg:h-[60px]"} duration-250 transition-all`}
          />
        </Link>

        <nav className="flex-center hidden space-x-8 md:flex">
          <HeaderLink
            link="/om"
            link_name="Om Moons"
            submenu={[{ link: "/om/kontakt", name: "Kontakt" }]}
            solidHeader={solidHeader}
          />

          <HeaderLink
            link="/saunagus"
            link_name="Saunagus"
            solidHeader={solidHeader}
          />

          <HeaderLink
            link="/terapi"
            link_name="Terapi"
            submenu={[
              { link: "/terapi/traumeterapi", name: "Traumeterapi" },
              { link: "/terapi/naturterapi", name: "Naturterapi" },
              { link: "/terapi/breathwork", name: "Breathwork" },
            ]}
            solidHeader={solidHeader}
          />

          <HeaderLink link="/shop" link_name="Shop" solidHeader={solidHeader} />

          <Link
            href="/booking"
            className={`button px-m ${!solidHeader ? "hover:border-background hover:text-background" : ""} py-1.5`}
          >
            Booking
          </Link>
        </nav>

        {/* mobile */}
        <button
          className="z-100 relative flex h-5 w-7 items-center justify-center md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span
            className={`duration-250 absolute h-[3px] w-full transition-all ${menuOpen ? "top-1/2 -translate-y-1/2 rotate-45 transform rounded-l-none" : "top-0"} ${solidHeader | menuOpen ? "bg-dark-green" : "bg-background"} `}
          ></span>
          <span
            className={`duration-250 absolute h-[3px] w-full transition-all ${menuOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"} ${solidHeader ? "bg-dark-green" : "bg-background"}`}
          ></span>
          <span
            className={`duration-250 absolute h-[3px] w-full transition-all ${menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45 transform rounded-l-none" : "bottom-0"} ${solidHeader | menuOpen ? "bg-dark-green" : "bg-background"}`}
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
