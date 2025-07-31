import "./styles.css";
import Mascots from "../../components/mascots";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useAboutPageAnimation = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const sunTopRef = useRef<HTMLImageElement>(null);
  const starCircleRef = useRef<HTMLImageElement>(null); // For desktop
  const starCircleMobileRef = useRef<HTMLImageElement>(null); // For mobile
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const backgroundShapeRef = useRef<HTMLImageElement>(null); // Ref for mascot background

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1.2 },
      onComplete: () => setIsAnimationComplete(true), 
    });

    // Set initial states for both star circles
    gsap.set(backgroundRef.current, { backgroundColor: "#3F61AD" });
    gsap.set([sunTopRef.current, starCircleRef.current, starCircleMobileRef.current], { opacity: 0, y: 100 });
    gsap.set(aboutContentRef.current, { opacity: 0, y: 50 });

    // Animate background color and other elements
    tl.to(backgroundRef.current, { backgroundColor: "#B2D5F1", duration: 2.5, ease: "power2.out" })
      // Animate both star circles
      .to([sunTopRef.current, starCircleRef.current, starCircleMobileRef.current], { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 }, "-=2.0")
      .to(aboutContentRef.current, { opacity: 1, y: 0 }, "-=0.5");

    // Add infinite rotation animation to all rotating elements
    gsap.to([starCircleRef.current, starCircleMobileRef.current, backgroundShapeRef.current], {
      rotation: 360,
      duration: 80,
      ease: "none",
      repeat: -1,
    });

  }, []);

  // Return all refs
  return { sunTopRef, starCircleRef, starCircleMobileRef, aboutContentRef, backgroundRef, backgroundShapeRef, isAnimationComplete };
};

export default function About() {
  // Destructure the new ref
  const { sunTopRef, starCircleRef, starCircleMobileRef, backgroundRef, backgroundShapeRef } = useAboutPageAnimation();

  return (
    <>
      <div ref={backgroundRef} className="relative w-screen bg-cover bg-[url('/elements/real-background.svg')] about-container">
        <div className="relative w-screen h-screen about-main-content">
          <img
            src="/elements/about/pillar-left.svg"
            className="w-auto h-full absolute -left-[0vh] -top-0 pillar-left"
            alt="pillar-left"
          />
          <img
            src="/elements/about/pillar-right.svg"
            className="w-auto h-full absolute right-[0vh] -top-0 pillar-right"
            alt="pillar-right"
          />

          <img
            ref={sunTopRef}
            src="/elements/about/suntop.svg"
            className="absolute -bottom-[4vh] w-full h-auto left-1/2 -translate-x-1/2"
            alt="sun"
          />
          {/* Assign the correct ref to each image */}
          <img
            ref={starCircleRef}
            src="/elements/about/star-circle.svg"
            className="absolute top-[5vh] w-[85%] left-1/2 -translate-x-1/2 star-circle"
            alt="star-circle"
          />
          <img
            ref={starCircleMobileRef}
            src="/elements/about/star-circle.svg"
            className="absolute w-[100%] left-1/2 -translate-x-1/2 star-circle-mobile"
            alt="star-circle"
          />

          <div className="absolute top-[2vh] w-full h-full z-10 left-1/2 -translate-x-1/2">
            <img
              src="/elements/about/tentangbgpc.png"
              className="w-[60%] h-auto absolute left-1/2 -translate-x-1/2 about-bg desktop-about-bg"
              alt="about-bg"
            />
            <img
              src="/elements/about/tentangbgmobile.png"
              className="w-[90%] h-auto absolute left-1/2 -translate-x-1/2 about-bg mobile-about-bg"
              alt="mobile-about-bg"
            />
            {/* <div
              ref={aboutContentRef}
              className="absolute top-[24vh] left-1/2 -translate-x-1/2 w-full flex flex-col items-center z-20 about-content"
            >
              <ShinyText speed={3}>
                <h1 className="font-lettertype text-[17vh] text-center bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text text-transparent about-title">
                  ABOUT
                </h1>
              </ShinyText>
              <p className="text-center text-[2vh] text-[#AB6528] font-roboto w-[45%] mt-3 px-4 about-description">
                Orientation Week Universitas Ciputra Surabaya merupakan wadah
                untuk mempersiapkan dan mendorong mahasiswa menjadi pribadi yang
                mandiri, pekerja keras, bertanggungjawab, menghargai, disiplin,
                aktif, dan kreatif dengan tujuan agar mahasiswa baru mampu
                menemukan jati dirinya dan siap menghadapi dunia perkuliahan.
                Orientation Week juga memegang nilai Integrity, Professionalism,
                dan Entrepreneurship (IPE) serta 7 Entrepreneurial Competencies
                yang ditanamkan dengan integrasi dalam kegiatan pembelajaran
                yang diterima oleh mahasiswa-mahasiswi.
              </p>
            </div> */}
          </div>
        </div>

        <div className="w-full">
          <Mascots backgroundShapeRef={backgroundShapeRef} />
        </div>
      </div>
    </>
  );
}
