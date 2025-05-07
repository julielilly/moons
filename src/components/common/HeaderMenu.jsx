import Link from "next/link";
import Image from "next/image";
import HeaderLink from "./HeaderLink";

const HeaderMenu = ({
  menuOpen,
  handleNavigate,
  openSubmenuIndex,
  setOpenSubmenuIndex,
}) => {
  return (
    <div
      className={`bg-foreground/60 fixed bottom-0 right-0 top-0 transition-all duration-300 ease-out ${menuOpen ? "left-0" : ""}`}
      onClick={handleNavigate}
    >
      <div
        className={`bg-grey fixed bottom-0 right-0 top-0 ml-auto flex h-full w-[70vw] min-w-[360px] flex-col transition-all duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Link href="/" className="m-auto" onClick={handleNavigate}>
          <Image
            src="/logo-dark.svg"
            alt="Logo"
            width={190}
            height={60}
            className="aspect-[190 / 60] flex-center mt-m h-[40px] transition-all md:h-[50px]"
          />
        </Link>

        <nav className="my-l flex h-full flex-col border-t border-gray-200 md:hidden">
          <HeaderLink
            link="/om"
            link_name="Om Moons"
            submenu={[{ link: "/om/kontakt", name: "Kontakt" }]}
            menuOpen={menuOpen}
            isOpen={openSubmenuIndex === 0}
            onToggle={() =>
              setOpenSubmenuIndex(openSubmenuIndex === 0 ? null : 0)
            }
            handleNavigate={handleNavigate}
          />

          <HeaderLink
            link="/saunagus"
            link_name="Saunagus"
            menuOpen={menuOpen}
            handleNavigate={handleNavigate}
          />

          <HeaderLink
            link="/terapi"
            link_name="Terapi"
            submenu={[
              { link: "/terapi/traumeterapi", name: "Traumeterapi" },
              { link: "/terapi/naturterapi", name: "Naturterapi" },
              { link: "/terapi/breathwork", name: "Breathwork" },
            ]}
            menuOpen={menuOpen}
            isOpen={openSubmenuIndex === 1}
            onToggle={() =>
              setOpenSubmenuIndex(openSubmenuIndex === 1 ? null : 1)
            }
            handleNavigate={handleNavigate}
          />

          <HeaderLink
            link="/shop"
            link_name="Shop"
            menuOpen={menuOpen}
            handleNavigate={handleNavigate}
          />

          <Link
            href="/booking"
            className="button px-m mx-auto mt-auto w-[90%] py-1.5 text-center shadow"
          >
            Booking
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;
