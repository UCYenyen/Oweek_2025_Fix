import React from "react";

export default function Mascots({ backgroundShapeRef }: { backgroundShapeRef: React.Ref<HTMLImageElement> }) {
  return (
    <div className="relative w-screen h-full mascot-container">
      <div className="relative w-[220%] -left-[40vh] h-auto mascot-pillar-container">
        {/* Desktop Pillar */}
        <img
          src="/elements/about/newpillar.svg"
          className="w-full h-full relative -top-[0vh] z-[5] mascot-pillar mascot-pillar-desktop"
          alt="pillar-center-desktop"
        />
        {/* Mobile Pillar */}
        <img
          src="/elements/about/pillartall.svg"
          className="w-full h-full relative -top-[0vh] z-[5] mascot-pillar mascot-pillar-mobile"
          alt="pillar-center-mobile"
        />
      </div>

      <img
        src="/elements/about/sunbot.svg"
        className="absolute -top-[0vh] w-full h-auto left-1/2 -translate-x-1/2 mascot-sun-bottom"
        alt="sun"
      />

      <div className="absolute top-[18vh] left-1/2 -translate-x-1/2 w-[50%] z-[6] mascot-yucca-section">
        <img
          src="/elements/about/iyc2.png"
          className="w-full h-auto mascot-yucca-title"
          alt="im-yucca"
        />

        {/* <p className="absolute top-[65%] left-1/2 -translate-x-1/2 text-center text-[2vh] text-[#AB6528] font-roboto w-[70%] px-4 z-[10] mascot-yucca-description">
          Yucca adalah seekor unicorn lucu yang berpendirian teguh. Ia tidak
          mudah menyerah, bahkan mudah beradaptasi ketika menghadapi situasi
          yang sulit.
        </p> */}
      </div>

      <div className="absolute -bottom-[0vh] left-1/2 -translate-x-1/2 w-[50%] h-auto z-[6] mascot-chickens-section">
        <img
          src="/elements/about/ccc3.png"
          className="w-full h-auto mascot-chickens-title"
          alt="capcipcup"
        />

        {/* <p className="absolute top-[50%] left-1/2 -translate-x-1/2 text-center text-[2vh] text-[#AB6528] font-roboto w-[70%] px-4 z-[10] mascot-chickens-description">
          Chap, Chip, dan Chup, adalah tiga anak ayam bersaudara yang tumbuh
          bersama Yucca, Karakter Chap, Chip, dan Chup masing-masing
          melambangkan nilai-nilai Universitas Ciputra, yaitu Integrity,
          Professionalism, dan Entrepreneurship. Ciri khas mereka adalah jumlah
          jambul mereka yang sesuai dengan hand sign I, P, dan E.
        </p> */}
      </div>

      <img
        src="/elements/about/pot-both.svg"
        className="w-full h-auto absolute -bottom-[2vh] left-1/2 -translate-x-1/2 z-[6] mascot-pot"
        alt="pot-both"
      />
      <img
        ref={backgroundShapeRef}
        src="/elements/about/triangle-circle.svg"
        className="w-full h-auto absolute top-[10vh] left-1/2 -translate-x-1/2 z-[1] mascot-background-shape"
        alt="triangle-circle"
      />
    </div>
  );
}
