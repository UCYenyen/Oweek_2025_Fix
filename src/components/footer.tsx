export default function Footer(){
    return(
        <>
        <div className="sm:h-[7rem] relative z-[10]">
            <div className="absolute z-10 w-screen h-[1rem] sm:h-[3.5rem] bg-contain sm:bg-cover bg-[url('/elements/footer/footer-top.svg')]"></div>
            <div className="absolute top-[0.8rem] h-[1.5rem] bg-contain sm:top-10 z-5 w-screen sm:h-[5rem] sm:bg-cover bg-[url('/elements/footer/footer-waves.svg')]"></div>
        </div>
        <footer className="relative z-10 px-6 sm:px-12 w-screen flex items-center h-[20vh] bg-gradient-to-b from-[#3A5FB5] to-[#93C0E7]">
            <div className=" flex items-center justify-between w-screen">
                <div className="flex gap-4">
                    <img className="w-[2.5rem] sm:w-fit" src="/elements/icons/uc-logo.svg" alt="" />
                    <img className="w-[2rem] sm:w-fit" src="/elements/icons/oweek-logo.svg" alt="" />
                </div>
                <img className="flex w-[5rem] sm:w-fit" src="/elements/icons/luminate-logo-text.svg" alt="" />
                <div className="overflow-hidden">
                    <h1 className="text-white text-[12px] sm:text-2xl font-bold">Contact person: </h1>
                    <h1 className="text-white text-[12px] sm:text-2xl font-bold">@Banana </h1>
                </div>
            </div>
        </footer>
        </>
    )
}