import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./../App.css";
import "./../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 z-[10000]">
        <nav className="relative w-screen z-[10] h-[60px] sm:h-[113px] bg-[url('/elements/navbar/navbar.svg')] bg-cover bg-center flex items-center justify-between px-6 sm:px-8">
          <div className="left-logo-wrapper w-full h-full flex gap-4 items-center justify-start">
            <img
              className="uc-navbar-logo w-auto h-auto"
              src="/elements/icons/logo-uc.png"
              alt=""
            />
            <img
              src="/elements/icons/luminate.svg"
              className="luminate-logo w-1/2 sm:w-[70%]"
              draggable="false"
              alt=""
            />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex font-roboto font-extrabold items-center gap-4">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "group button-navbar-selected p-1 lg:p-2 xl:p-2 rounded-full border-solid border-2 sm:px-6"
                  : "group button-navbar p-1 lg:p-2 xl:p-2 rounded-full border-solid border-2 sm:px-6"
              }
            >
              <p
                className={
                  location.pathname === "/"
                    ? "text-[#FFF0B8]"
                    : "bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent group-hover:text-[#FFF0B8]"
                }
              >
                BERANDA
              </p>
            </Link>
            <Link
              to="/about"
              className={
                location.pathname !== "/about"
                  ? "group button-navbar p-1 lg:p-2 rounded-full border-solid border-2 sm:px-6"
                  : "group button-navbar-selected p-1 lg:p-2 rounded-full border-solid border-2 sm:px-6"
              }
            >
              <p
                className={
                  location.pathname === "/about"
                    ? "text-[#FFF0B8]"
                    : "bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent group-hover:text-[#FFF0B8]"
                }
              >
                TENTANG
              </p>
            </Link>
            <Link
              to="/schedule"
              className={
                location.pathname !== "/schedule"
                  ? "group button-navbar p-1 lg:p-2 rounded-full border-solid border-2 sm:px-6"
                  : "group button-navbar-selected p-1 lg:p-2 rounded-full border-solid border-2 sm:px-6"
              }
            >
              <p
                className={
                  location.pathname === "/schedule"
                    ? "text-[#FFF0B8]"
                    : "bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent group-hover:text-[#FFF0B8]"
                }
              >
                JADWAL
              </p>
            </Link>
            <Link
              to="/rules"
              className={
                location.pathname !== "/rules"
                  ? "group button-navbar p-1 lg:p-2 rounded-full border-solid border-2 sm:px-6"
                  : "group button-navbar-selected p-1 lg:p-2 rounded-full border-solid border-2 sm:px-6"
              }
            >
              <p
                className={
                  location.pathname === "/rules"
                    ? "text-[#FFF0B8]"
                    : "bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent group-hover:text-[#FFF0B8]"
                }
              >
                PERATURAN
              </p>
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden button-navbar flex flex-col items-center justify-center rounded-full w-10 h-10 space-y-1 z-[20]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 transition-all duration-300 ${
                isMenuOpen
                  ? "rotate-45 translate-y-1.5 bg-[#FFF0B8]"
                  : "bg-gradient-to-r from-[#F5AC01] to-[#C03A00]"
              }`}
            />
            <div
              className={`w-6 h-0.5 transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-0 bg-[#FFF0B8]"
                  : "bg-gradient-to-r from-[#F5AC01] to-[#C03A00]"
              }`}
            />
            <div
              className={`w-6 h-0.5 transition-all duration-300 ${
                isMenuOpen
                  ? "-rotate-45 -translate-y-1.5 bg-[#FFF0B8]"
                  : "bg-gradient-to-r from-[#F5AC01] to-[#C03A00]"
              }`}
            />
          </button>

          {/* Mobile Menu Overlay */}
        </nav>

        {/* Mobile Menu - Below Navbar */}
        <div
          className={`relative w-full bg-gradient-to-b from-[#F0B130] to-[#F0B130] z-[16] lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-4 p-6">
            <Link
              to="/"
              onClick={closeMenu}
              className={
                location.pathname === "/"
                  ? "group button-navbar-selected p-3 rounded-full border-solid border-2 px-8 w-full max-w-xs text-center"
                  : "group button-navbar p-3 rounded-full border-solid border-2 px-8 w-full max-w-xs text-center"
              }
            >
              <p
                className={
                  location.pathname === "/"
                    ? "text-[#FFF0B8] font-roboto font-extrabold text-lg"
                    : "bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent group-hover:text-[#FFF0B8] font-roboto font-extrabold text-lg"
                }
              >
                HOME
              </p>
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className={
                location.pathname === "/about"
                  ? "group button-navbar-selected p-3 rounded-full border-solid border-2 px-8 w-full max-w-xs text-center"
                  : "group button-navbar p-3 rounded-full border-solid border-2 px-8 w-full max-w-xs text-center"
              }
            >
              <p
                className={
                  location.pathname === "/about"
                    ? "text-[#FFF0B8] font-roboto font-extrabold text-lg"
                    : "bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent group-hover:text-[#FFF0B8] font-roboto font-extrabold text-lg"
                }
              >
                ABOUT
              </p>
            </Link>
            <Link
              to="/schedule"
              onClick={closeMenu}
              className={
                location.pathname === "/schedule"
                  ? "group button-navbar-selected p-3 rounded-full border-solid border-2 px-8 w-full max-w-xs text-center"
                  : "group button-navbar p-3 rounded-full border-solid border-2 px-8 w-full max-w-xs text-center"
              }
            >
              <p
                className={
                  location.pathname === "/schedule"
                    ? "text-[#FFF0B8] font-roboto font-extrabold text-lg"
                    : "bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent group-hover:text-[#FFF0B8] font-roboto font-extrabold text-lg"
                }
              >
                SCHEDULE
              </p>
            </Link>
            <Link
              to="/rules"
              onClick={closeMenu}
              className={
                location.pathname === "/rules"
                  ? "group button-navbar-selected p-3 rounded-full border-solid border-2 px-8 w-full max-w-xs text-center"
                  : "group button-navbar p-3 rounded-full border-solid border-2 px-8 w-full max-w-xs text-center"
              }
            >
              <p
                className={
                  location.pathname === "/rules"
                    ? "text-[#FFF0B8] font-roboto font-extrabold text-lg"
                    : "bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent group-hover:text-[#FFF0B8] font-roboto font-extrabold text-lg"
                }
              >
                RULES
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[53px] sm:h-[113px]"></div>
      <div className="relative bg-[url('/elements/navbar/navbar-below.svg')] w-screen bg-cover h-[2.5rem] sm:bg-auto sm:h-[5rem]">
        <img
          src="/elements/navbar/leaves-left.svg"
          loading="lazy"
          className="overflow-hidden leaves-left absolute z-[6] -top-5 sm:-top-[7.5rem] left-0"
          draggable="false"
          alt=""
        />
        <img
          src="/elements/navbar/leaves-right.svg"
          loading="lazy"
          className="leaves-right absolute z-[6] -top-5 sm:-top-[7.5rem] right-0"
          draggable="false"
          alt=""
        />
      </div>
    </>
  );
}
