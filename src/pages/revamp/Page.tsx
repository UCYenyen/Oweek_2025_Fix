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
  // const { titleRef, starCircleRef, pillarLeftRef, pillarRightRef, duckLeftRef, duckRightRef, cardContainerRef, cloudRef, scheduleContentRef } = useSchedulePageAnimation();

  const currentSchedule = scheduleData[currentIndex];
  // const title =
    currentSchedule.day === "PRA-OWEEK" ? "PRA-OWEEK" : "OWEEK 2025";

  return (
    <div className="relative w-screen h-screen bg-[#B2D5F1] bg-cover bg-[url('/elements/real-background.svg')] schedule-page-container">
      <h1>hello world</h1>
    </div>
  );
}
