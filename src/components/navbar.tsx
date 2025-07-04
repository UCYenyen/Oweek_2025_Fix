import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <>
         <nav className="relative w-screen z-[10] h-[60px] sm:h-[113px] bg-[url('/elements/navbar/navbar.svg')] bg-cover bg-center flex items-center justify-between px-6 sm:px-8">
          <a href="/"><img src="/elements/icons/luminate.svg" className="w-1/2 sm:w-[70%]" alt="" /></a>
          <div className='items-center gap-4 flex'>
            <Link to="/" className="button-navbar p-1 lg:p-2 xl:p-2 text-[12px] xl:text-xl rounded-full border-solid border-2 sm:px-6">Home</Link>
            <Link to="/about" className="button-navbar p-1 lg:p-2 text-[12px] xl:text-xl rounded-full border-solid border-2 sm:px-6">About</Link>
            <Link to="/schedule" className="button-navbar p-1 lg:p-2 text-[12px] xl:text-xl rounded-full border-solid border-2 sm:px-6">Schedule</Link>
            <Link to="/rules" className="button-navbar p-1 lg:p-2 text-[12px] xl:text-xl rounded-full border-solid border-2 sm:px-6">Rules</Link>
          </div>
        </nav>
          <div className="relative bg-[url('/elements/navbar/navbar-below.svg')] w-screen bg-cover h-[2.5rem] sm:bg-auto sm:h-[5rem]">
            <img src="/elements/navbar/leaves-left.svg" loading="lazy" className="absolute z-[6] -top-5 sm:-top-[7.5rem] left-0 w-[7.5rem] sm:w-fit" alt="" />
            <img src="/elements/navbar/leaves-right.svg" loading="lazy"className="absolute z-[6] -top-5 sm:-top-[7.5rem] right-0 w-[7.5rem] sm:w-fit" alt="" />
          </div>
        </>
    )
}