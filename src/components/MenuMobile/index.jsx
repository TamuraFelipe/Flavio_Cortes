import { useState } from "react";
import {
  ImageIcon,
  HomeIcon,
  ScissorsIcon,
  XIcon,
  UserIcon,
  PhoneIcon,
  MenuIcon,
} from "lucide-react";
import ButtonAgendar from "../ButtonAgendar";
import logo from "../../assets/logo_dark.png";

const MenuMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  return (
    <>
      <button className="lg:hidden" onClick={toggleMenu}>
        {openMenu ? <XIcon /> : <MenuIcon />}
      </button>
      <div
        className="
            fixed
            inset-0
            z-50
            lg:hidden
            pointer-events-none
          "
      >
        {/* Overlay */}
        <div
          onClick={closeMenu}
          className={`
              absolute
              inset-0
              top-16.20
              md:top-18
              lg:top-[17.5]
              bg-black/70
              transition-opacity
              duration-300

              ${openMenu ? "opacity-100 pointer-events-auto" : "opacity-0"}

            `}
        />

        {/* Menu */}

        <aside
          className={`
              absolute
              right-0
              top-16.20
              md:top-18 
              lg:top-17.5
              h-full
              w-80
              bg-[#1F1F1F]
              p-6

              transition-transform
              duration-300

              ${
                openMenu
                  ? "translate-x-0 pointer-events-auto"
                  : "translate-x-full"
              }

            `}
        >
          <div className="flex items-center justify-between mb-10">
            <img
              src={logo}
              alt="Description"
              width={80}
              height={20}
              alt="Flavio Cortes"
            />
            <button onClick={closeMenu}>
              <XIcon />
            </button>
          </div>

          <nav className="mb-10">
            <ul className="flex flex-col text-white text-lg">
              <li className="border-b border-gray-700 py-4">
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="flex items-center gap-4"
                >
                  <HomeIcon className="text-brand" />
                  Home
                </a>
              </li>

              <li className="border-b border-gray-700 py-4">
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="flex items-center gap-4"
                >
                  <ScissorsIcon />
                  Serviços
                </a>
              </li>

              <li className="border-b border-gray-700 py-4">
                <a
                  href="#gallery"
                  onClick={closeMenu}
                  className="flex items-center gap-4"
                >
                  <ImageIcon />
                  Galeria
                </a>
              </li>

              <li className="border-b border-gray-700 py-4">
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="flex items-center gap-4"
                >
                  <UserIcon />
                  Sobre
                </a>
              </li>

              <li className="border-b border-gray-700 py-4">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex items-center gap-4"
                >
                  <PhoneIcon />
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <ButtonAgendar variant="menu" />
        </aside>
      </div>
    </>
  );
};

export default MenuMobile;
