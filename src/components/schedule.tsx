import { useState, useEffect, useRef } from "react";
import { scheduleData } from "../data/scheduleData";
import PopUpPanel from "./popUpPanel";
import { gsap } from "gsap";

export default function Schedule() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(true);
  const [popupType, setPopupType] = useState<'dresscode' | 'penugasan' | 'ketentuan'>('dresscode');
  const scheduleContentRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef(1); // 1 for next, -1 for prev

  const handleNext = () => {
    directionRef.current = 1;
    gsap.to(scheduleContentRef.current, {
      xPercent: -100,
      autoAlpha: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % scheduleData.length);
      }
    });
  };

  const handlePrev = () => {
    directionRef.current = -1;
    gsap.to(scheduleContentRef.current, {
      xPercent: 100,
      autoAlpha: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + scheduleData.length) % scheduleData.length
        );
      }
    });
  };

  useEffect(() => {
    // Animate in when currentIndex changes
    if (scheduleContentRef.current) {
      gsap.fromTo(scheduleContentRef.current, 
        { xPercent: 100 * directionRef.current, autoAlpha: 0 },
        { xPercent: 0, autoAlpha: 1, duration: 0.2, ease: 'power2.out' }
      );
    }
  }, [currentIndex]);

  function openPopUpPanel(type: 'dresscode' | 'penugasan' | 'ketentuan'){
    setIsHidden(!isHidden);
    setPopupType(type);
  }

  const currentSchedule = scheduleData[currentIndex];

  return (
    <div className="schedule-wrapper relative z-[1000] flex flex-col items-center justify-center w-full gap-4">
      {/* container untuk schedule card dan button */}
      <div className="flex items-center justify-center w-full gap-4">
        <button onClick={handlePrev} className="">
          <img src="/elements/schedule/buttonleft.svg" alt="Previous" className="w-12 h-12 button-left" />
        </button>

        <div className="flex flex-col items-center text-center schedule-card rounded-3xl overflow-hidden">
          <div ref={scheduleContentRef}>
            <h2 className="text-2xl font-bold text-[#D45A0A] font-serif schedule-item-title">
              {currentSchedule.title}
            </h2>
            <p className="mt-2 text-lg schedule-item-desc font-serif text-[#F2B028]"> 
              {currentSchedule.date}
            </p>
            <p className="text-lg schedule-item-desc font-serif text-[#F2B028]">
              {currentSchedule.location}
            </p>
            <div className="mt-4 text-center schedule-sessions-list font-serif text-[#F2B028]">
              {currentSchedule.sessions.map((session, index) => (
                <p key={index} className="text-md">
                  {session}
                </p>
              ))}
            </div>
          </div>
        </div>

        <button onClick={handleNext} className="">
          <img src="/elements/schedule/buttonright.svg" alt="Next" className="w-12 h-12 button-right" />
        </button>
      </div>

      {/* Button dresscode bawah penugasan dan ketentuan*/}
      <div className="flex items-center justify-between w-[50%] gap-4 schedule-button-group">
        <button className="penugasan button-schedule rounded-full font-lettertype text-white" onClick={() => openPopUpPanel('penugasan')}>PENUGASAN</button>
        <button className="" onClick={() => openPopUpPanel('dresscode')}>
          <img src="/elements/schedule/shirt.svg" alt="Dress Code" className="button-dresscode" />
        </button>
        <button className="ketentuan button-schedule rounded-full font-lettertype text-white" onClick={() => openPopUpPanel('ketentuan')}>KETENTUAN</button>
      </div>

      {/* Add PopUpPanel component */}
      <PopUpPanel 
        currentDayIndex={currentIndex}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        popupType={popupType}
        setPopupType={setPopupType}
      />
    </div>
  );
}