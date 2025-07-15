import ScheduleDiv from "../../components/schedule";
import { useState, useEffect, useRef } from "react";
import { scheduleData } from "../../data/scheduleData";
import "./styles.css";
import { gsap } from "gsap";

export const useSchedulePageAnimation = () => {
  const titleRef = useRef<HTMLImageElement>(null);
  const starCircleRef = useRef<HTMLImageElement>(null);
  const pillarLeftRef = useRef<HTMLImageElement>(null);
  const pillarRightRef = useRef<HTMLImageElement>(null);
  const duckLeftRef = useRef<HTMLImageElement>(null);
  const duckRightRef = useRef<HTMLImageElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLImageElement>(null);
  const scheduleContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });

    gsap.set([titleRef.current, starCircleRef.current], { opacity: 0, y: -50 });
    gsap.set([duckLeftRef.current, duckRightRef.current], { opacity: 0, y: 50 });
    gsap.set(scheduleContentRef.current, { opacity: 0, y: 20 });

    tl.to([titleRef.current, starCircleRef.current], { opacity: 1, y: 0, stagger: 0.2 })
      .to(scheduleContentRef.current, { opacity: 1, y: 0, duration: 0.8 }, "<+0.4")
      .to([duckLeftRef.current, duckRightRef.current], { opacity: 1, y: 0, stagger: 0.2 }, "-=0.5");

    const cloudTween = gsap.to(cloudRef.current, {
      x: -75,
      duration: 10,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    const starCircleTween = gsap.to(starCircleRef.current, {
      scale: 1.05, // pulses between 1 and 1.2
      duration: 10,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      tl.kill();
      cloudTween.kill();
      starCircleTween.kill();
    };
  }, []);

  return { titleRef, starCircleRef, pillarLeftRef, pillarRightRef, duckLeftRef, duckRightRef, cardContainerRef, cloudRef, scheduleContentRef };
};

export default function Schedule() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { titleRef, starCircleRef, pillarLeftRef, pillarRightRef, duckLeftRef, duckRightRef, cardContainerRef, cloudRef, scheduleContentRef } = useSchedulePageAnimation();

  const currentSchedule = scheduleData[currentIndex];
  // const title =
    currentSchedule.day === "PRA-OWEEK" ? "PRA-OWEEK" : "OWEEK 2025";

  return (
    <div className="relative w-screen h-screen bg-[#B2D5F1] bg-cover bg-[url('/elements/real-background.svg')] schedule-page-container">
      <img
        ref={titleRef}
        src="/elements/schedule/title.svg"
        className="absolute w-[50%] h-auto -top-[3vh] left-1/2 -translate-x-1/2 z-[4] schedule-title-img"
        alt="schedule-title"
      />
      <img
        ref={starCircleRef}
        src="/elements/schedule/star-circle.svg"
        className="absolute w-[80%] h-auto -top-[3vh] left-1/2 -translate-x-1/2 z-[3] schedule-star-circle"
        alt="star-circle"
      />
      <img
          ref={cloudRef}
          src="/elements/schedule/cloudschedule.png"
          className="absolute w-full h-auto -top-[0vh] left-1/2 -translate-x-1/2 z-[2] schedule-sun-top opacity-50"
          alt="sun-top"
        />
         <img
          ref={duckRightRef}
          src="/elements/schedule/ccc3.png"
          className="absolute w-[50vh] bottom-0h-auto right-[5vh] z-[10] schedule-duck-right"
          width={100}
          height={100}
          alt="bebekkanan"
        />
      <div className="relative w-screen h-[125vh] flex items-center justify-center schedule-content-area">
        
        <img
          src="/elements/schedule/massive-pillar.svg"
          className="absolute w-full h-auto top-0 left-0 z-0 schedule-massive-pillar"
          alt="pillar-massive"
        />
        
        <img
          ref={pillarLeftRef}
          src="/elements/schedule/pillar-left.svg"
          className="absolute w-[10%] h-[85%] top-0 left-0 z-[5] schedule-pillar-left"
          alt="pillar-left"
        />
        <img
          ref={pillarRightRef}
          src="/elements/schedule/pillar-right.svg"
          className="absolute w-[10%] h-[85%] top-0 right-0 z-[5] schedule-pillar-right"
          alt="pillar-right"
        />

       
        <img
          ref={duckLeftRef}
          src="/elements/schedule/bebekkiri.svg"
          className="absolute w-[50vh] h-auto bottom-[23vh] left-0 z-[10] schedule-duck-left"
          width={100}
          height={100}
          alt="bebekkiri"
        />

        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full schedule-card-wrapper">
          {/* Container for the background image, positioned behind pillars */}
          <div ref={cardContainerRef} className="relative w-[65%] h-[85%] z-[4] schedule-card-container">
            <img
              src="/elements/schedule/schedulebg.png"
              className="absolute top-0 left-0 w-full h-full schedule-card-bg schedule-card-bg-desktop"
              alt="schedule-bg"
            />
            <img
              src="/elements/schedule/mobilebg.png"
              className="absolute top-0 left-0 schedule-card-bg schedule-card-bg-mobile"
              alt="schedule-bg-mobile"
            />
          </div>

          {/* Container for the interactive schedule content, positioned above pillars */}
          <div ref={scheduleContentRef} className="absolute mt-[4vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] z-10 schedule-card-content">
            <ScheduleDiv
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
