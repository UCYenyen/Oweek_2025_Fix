export default function Mascots() {
  return (
    <div className="relative w-screen h-full">
      <div className="relative w-[220%] -left-[40vh] h-auto">
        <img
          src="/elements/about/newpillar.svg"
          className="w-full h-full relative -top-[0vh] z-[5]"
          alt="pillar-center"
        />
        
      </div>
      <img
            src="/elements/about/sunbot.svg"
            className="absolute -top-[0vh] w-full h-auto left-1/2 -translate-x-1/2"
            alt="sun"
          />
      <img
          src="/elements/about/im-yucca.svg"
          className="w-[65%] h-auto absolute top-[18vh] left-1/2 -translate-x-1/2 z-[6]"
          alt="im-yucca"
        />
        <p className="absolute text-center text-[2vh] text-[#AB6528] font-roboto w-[45%] mt-3 px-4 z-[10]">
          Yucca adalah seekor unicorn lucu yang berpendirian teguh. Ia tidak mudah menyerah, 
          bahkan mudah beradaptasi ketika menghadapi situasi yang sulit.
        </p>
      <img
          src="/elements/about/capcipcup.svg"
          className="w-[65%] h-auto absolute -bottom-[0vh] left-1/2 -translate-x-1/2 z-[6]"
          alt="capcipcup"
        />
         <img
          src="/elements/about/pot-both.svg"
          className="w-full h-auto absolute -bottom-[2vh] left-1/2 -translate-x-1/2 z-[6]"
          alt="pot-both"
        />
        <img
          src="/elements/about/triangle-circle.svg"
          className="w-full h-auto absolute top-[10vh] left-1/2 -translate-x-1/2 z-[1]"
          alt="triangle-circle"
        />
    </div>
  );
}
