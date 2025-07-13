import "./../styles/Footer.css";
// deploy jason
export default function Footer(){
    return(
        <>
        <div className="relative z-[10]">
            <img src="/elements/footer/footer-group.svg" className="object-contain w-screen" alt="" />
        </div>
        <footer className="footer-container relative z-10 px-2 h-[10vh] sm:px-12 w-screen flex items-center sm:h-[20vh] bg-gradient-to-b from-[#3A5FB5] to-[#93C0E7]">
            <div className="flex items-center justify-between w-screen">
                <div className="flex gap-2 sm:gap-4">
                    <img className="uc-logo w-[2.5rem] sm:w-fit" src="/elements/icons/uc-logo.png" alt="" />
                    <img className="oweek-logo w-[2rem] sm:w-fit" src="/elements/icons/Oweek-Logo.png" alt="" />
                </div>
                <img className="luminate-footer-logo flex w-[5rem] sm:w-fit" src="/elements/icons/luminate-logo-text.png" alt="" />
                <div className="overflow-hidden">
                    <h1 className="text-footer text-white text-[12px] sm:text-2xl font-bold">Contact person: </h1>
                    <h1 className="text-footer text-white text-[12px] sm:text-2xl font-bold">@oweekucs </h1>
                </div>
            </div>
        </footer>
        </>
    )
}