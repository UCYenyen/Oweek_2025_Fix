export default function Mascots() {
  return (
    <div className="relative w-screen h-full">
      <div className="relative w-[220%] -left-[40vh] h-auto">
        <img
          src="/elements/about/newpillar.svg"
          className="w-full h-full relative -top-[0vh] z-10"
          alt="pillar-center"
        />
      </div>

      <img
          src="/elements/about/im-yucca.svg"
          className="w-[65%] h-auto absolute top-[18vh] left-1/2 -translate-x-1/2 z-20"
          alt="im-yucca"
        />
      <img
          src="/elements/about/capcipcup.svg"
          className="w-[65%] h-auto absolute -bottom-[0vh] left-1/2 -translate-x-1/2 z-20"
          alt="capcipcup"
        />
         <img
          src="/elements/about/pot-both.svg"
          className="w-full h-auto absolute -bottom-[0vh] left-1/2 -translate-x-1/2 z-20"
          alt="pot-both"
        />
        <img
          src="/elements/about/triangle-circle.svg"
          className="w-full h-auto absolute top-[10vh] left-1/2 -translate-x-1/2  z-0"
          alt="triangle-circle"
        />
        
    </div>
  );
}
