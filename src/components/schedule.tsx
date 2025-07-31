import { useState, useEffect, useRef } from "react";
import { scheduleData } from "../data/scheduleData";
import PopUpPanel from "./popUpPanel";
import { gsap } from "gsap";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Schedule() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(true);
  const [popupType, setPopupType] = useState<
    "dresscode" | "penugasan" | "ketentuan"
  >("dresscode");
  const scheduleContentRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef(1); // 1 for next, -1 for prev

  const handleNext = () => {
    directionRef.current = 1;
    gsap.to(scheduleContentRef.current, {
      xPercent: -100,
      autoAlpha: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % scheduleData.length);
      },
    });
  };

  const handlePrev = () => {
    directionRef.current = -1;
    gsap.to(scheduleContentRef.current, {
      xPercent: 100,
      autoAlpha: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex - 1 + scheduleData.length) % scheduleData.length
        );
      },
    });
  };

  useEffect(() => {
    // Animate in when currentIndex changes
    if (scheduleContentRef.current) {
      gsap.fromTo(
        scheduleContentRef.current,
        { xPercent: 100 * directionRef.current, autoAlpha: 0 },
        { xPercent: 0, autoAlpha: 1, duration: 0.2, ease: "power2.out" }
      );
    }
  }, [currentIndex]);

  function openPopUpPanel(type: "dresscode" | "penugasan" | "ketentuan") {
    setIsHidden(!isHidden);
    setPopupType(type);
  }

  const currentSchedule = scheduleData[currentIndex];

  return (
    <div className="schedule-wrapper relative z-[1000] flex flex-col items-center justify-center w-full gap-4">
      {/* container untuk schedule card dan button */}
      <div className="flex items-center justify-center w-full gap-4">
        <button onClick={handlePrev} className="">
          <img
            src="/elements/schedule/buttonleft.svg"
            alt="Previous"
            className="w-12 h-12 button-left"
          />
        </button>

        <div className="flex flex-col justify-center items-center schedule-card rounded-3xl overflow-hidden">
          <div className="parent-description-container w-[80%]">
            <div
              ref={scheduleContentRef}
              className="w-full flex gap-4 flex-col items-center justify-center"
            >
              <div className="flex flex-col gap-2">
                {currentSchedule.title === "PARENTS GATHERING" ? (
                  <>
                    <a href="https://oweek.uc.ac.id/parents/" target="_blank">
                      <h2 className="text-2xl w-full font-bold text-center text-[#D45A0A] font-serif schedule-item-title">
                        {currentSchedule.title}
                      </h2>
                    </a>
                    <a
                      href="https://oweek.uc.ac.id/parents/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center schedule-subtitle text-xl w-full font-bold text-center text-[#AB6528] font-roboto underline"
                    >
                      <i className="bi bi-link-45deg text-2xl text-[#D45A0A]"></i>{" "}
                      Click here for more info
                    </a>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl w-full font-bold text-center text-[#D45A0A] font-serif schedule-item-title">
                      {currentSchedule.title}
                    </h2>
                    <h2 className="schedule-subtitle text-xl w-full font-bold text-center text-[#AB6528] font-roboto">
                      {currentSchedule.day_ke}
                    </h2>
                  </>
                )}
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full">
                  {/* Date with aligned icon */}
                  <div className="text-icon-container flex items-center schedule-item-desc font-roboto text-[#AB6528]">
                    <div className="w-8 flex justify-center">
                      <i className="icon text-2xl text-[#D45A0A] bi bi-calendar-check-fill"></i>
                    </div>
                    <span className="schedule-text-description text-xl">
                      {currentSchedule.day}, {currentSchedule.date}
                    </span>
                  </div>

                  {/* Location with aligned icon */}
                  <div className="text-icon-container flex items-center schedule-item-desc font-roboto text-[#AB6528]">
                    <div className="w-8 flex justify-center">
                      <i className="icon text-2xl text-[#D45A0A] bi bi-geo-alt-fill"></i>
                    </div>
                    <span className="schedule-text-description text-xl">
                      {currentSchedule.location}
                    </span>
                  </div>

                  {/* Sessions with aligned icons */}
                  {currentSchedule.sessions &&
                    currentSchedule.sessions.length > 0 && (
                      <div className="font-roboto text-[#AB6528]">
                        {currentSchedule.sessions.map((session, index) => (
                          <div
                            key={index}
                            className="text-icon-container flex items-start font-roboto"
                          >
                            <div className="text-icon-container w-8 flex text-2xl justify-center">
                              <i className="icon text-[#D45A0A] bi bi-alarm-fill"></i>
                            </div>
                            <p className="schedule-text-description text-xl">
                              {session}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button onClick={handleNext} className="">
          <img
            src="/elements/schedule/buttonright.svg"
            alt="Next"
            className="w-12 h-12 button-right"
          />
        </button>
      </div>

      {/* Button dresscode bawah penugasan dan ketentuan*/}
      <div className="flex items-center justify-between w-[50%] gap-4 schedule-button-group">
        <button
          className="penugasan button-schedule rounded-full font-lettertype text-white"
          onClick={() => openPopUpPanel("penugasan")}
        >
          PENUGASAN
        </button>
        <button className="" onClick={() => openPopUpPanel("dresscode")}>
          <img
            src="/elements/schedule/shirt.svg"
            alt="Dress Code"
            className="button-dresscode"
          />
        </button>
        <button
          className="ketentuan button-schedule rounded-full font-lettertype text-white"
          onClick={() => openPopUpPanel("ketentuan")}
        >
          KETENTUAN
        </button>
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
