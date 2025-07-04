import { Link, useLocation } from "react-router-dom";
import "./../styles/Navbar.css";
export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <nav className="relative w-screen z-[10] h-[60px] sm:h-[113px] bg-[url('/elements/navbar/navbar.svg')] bg-cover bg-center flex items-center justify-between px-6 sm:px-8">
        <a href="/">
          <img
            src="/elements/icons/luminate.svg"
            className="luminate-logo w-1/2 sm:w-[70%]"
            alt=""
          />
        </a>
        <div className="font-roboto font-extrabold items-center gap-4 flex">
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
              HOME
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
              ABOUT
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
              SCHEDULE
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
              RULES
            </p>
          </Link>
        </div>
      </nav>
      <div className="relative bg-[url('/elements/navbar/navbar-below.svg')] w-screen bg-cover h-[2.5rem] sm:bg-auto sm:h-[5rem]">
        <img
          src="/elements/navbar/leaves-left.svg"
          loading="lazy"
          className="leaves-left absolute z-[6] -top-5 sm:-top-[7.5rem] left-0"
          alt=""
        />
        <img
          src="/elements/navbar/leaves-right.svg"
          loading="lazy"
          className="leaves-right absolute z-[6] -top-5 sm:-top-[7.5rem] right-0"
          alt=""
        />
      </div>
    </>
  );
}
