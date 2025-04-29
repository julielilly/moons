import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const HeaderLink = ({
  link,
  link_name,
  submenu = [],
  isScrolled,
  menuOpen,
  isOpen,
  onToggle,
  handleNavigate,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const currentPage = pathname === link; // checks the parent link
  const currentPageParent = submenu.some((item) => item.link === pathname); // checks if the submenu array contains the current pathname

  const sharedClasses = `${isScrolled || menuOpen ? "text-foreground" : "text-background"} 
  text-body-lg md:after:bg-dark-green after:mt-2xs after:ml-[-4px] after:mr-[-6px] 
  after:h-[1.5px] after:w-0 after:transition-all after:duration-300 after:ease-out 
  ${menuOpen ? "px-m py-2xs block border-b border-gray-200 after:hidden" : "md:after:block group-hover:after:w-[120%]"}
  ${currentPage || currentPageParent ? "after:w-[120%] bg-green/30 md:bg-transparent" : ""}`;

  const sharedClassSubMenu = `
  ${menuOpen ? "px-8 border-t border-gray-200" : "md:pr-8 md:pl-4"}
  py-2 text-body-lg text-foreground relative block whitespace-nowrap
  before:absolute before:bottom-0 before:left-0 before:top-0 before:w-full
  before:bg-green before:opacity-10 md:before:opacity-20 before:transition-all
  before:duration-300 before:ease-out md:before:w-0 md:hover:before:w-full
`;

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkWindowSize(); // initial check
    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  return (
    <div className="group relative bottom-[-5px]">
      {(!isMobile || (isMobile && !submenu.length)) && (
        <Link href={link} className={sharedClasses} onClick={handleNavigate}>
          {link_name}
        </Link>
      )}

      {submenu.length > 0 && isMobile && (
        <button
          onClick={onToggle}
          className={`${sharedClasses} flex w-full cursor-pointer text-left ${isOpen ? "before:w-full" : ""} before:bg-green relative block before:absolute before:bottom-0 before:left-0 before:top-0 before:w-0 before:opacity-20 before:transition-all before:duration-300 before:ease-out`}
        >
          {link_name}
          <Image
            src="/icons/chevron-right.svg"
            alt="Logo"
            width={20}
            height={20}
            className={`ml-2xs ${isOpen ? "" : "-rotate-90"} transition-all`}
          />
        </button>
      )}

      {/* Submenu, only if submenu items exist */}
      {submenu.length > 0 && (
        <div
          className={`md:-left-xs bg-grey min-w-[135px] overflow-hidden ${
            isOpen && isMobile ? "block" : "hidden md:group-hover:block"
          } ${!menuOpen ? "absolute shadow" : "border-b border-gray-200"}`}
        >
          {isMobile && menuOpen && (
            <Link
              href={link}
              className={sharedClassSubMenu}
              onClick={handleNavigate}
            >
              {link_name}
            </Link>
          )}
          {submenu.map((item, index) => {
            const currentSubPage = pathname === item.link; // checks the child link

            return (
              <Link
                key={index}
                href={item.link}
                className={`${sharedClassSubMenu} ${currentSubPage ? "bg-green/20 md:bg-transparent md:before:w-full md:before:opacity-30" : ""}`}
                onClick={handleNavigate}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
