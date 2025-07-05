export default function Footer(){
    return(
        <>
        <div className="relative z-[10]">
            <img src="/elements/footer/footer-group.svg" className="object-contain w-screen" alt="" />
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