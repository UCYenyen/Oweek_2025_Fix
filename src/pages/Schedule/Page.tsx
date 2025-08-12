// import "./styles.css";
import "./styles.css";
import { useState, useEffect, useRef } from "react";
import { scheduleData } from "./../../data/scheduleData";
import PopUpPanel from "./../../components/popUpPanel";
import { gsap } from "gsap";
import "bootstrap-icons/font/bootstrap-icons.css";


export const useSchedulePageAnimation = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const duckLeftRef = useRef<HTMLImageElement>(null);
  const duckRightRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Set initial states
    gsap.set(backgroundRef.current, { backgroundColor: "#3F61AD" });
    gsap.set(duckLeftRef.current, { xPercent: -100, autoAlpha: 0 });
    gsap.set(duckRightRef.current, { xPercent: 100, autoAlpha: 0 });

    // Animate background and ducks sliding in
    tl.to(backgroundRef.current, {
      backgroundColor: "#B2D5F1",
      duration: 2.5,
    }).to(
      [duckLeftRef.current, duckRightRef.current],
      {
        xPercent: 0,
        autoAlpha: 1,
        duration: 1.5,
        stagger: 0.2,
      },
      "-=2.0"
    );
  }, []);

  return { backgroundRef, duckLeftRef, duckRightRef };
};

export default function Schedule() {
  const { backgroundRef, duckLeftRef, duckRightRef } =
    useSchedulePageAnimation();

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
    <div
      ref={backgroundRef}
      className="relative flex flex-col items-center justify-center w-screen bg-cover bg-[url('/elements/real-background.svg')] schedule-page-container"
    >
      {/* absolute images here */}
      <img
        className="pillar-left-schedule absolute left-0 top-0 h-full w-auto z-[5] "
        src="/elements/schedule/pillar-left.svg"
        alt=""
      />
      <img
        className="pillar-right-schedule absolute right-0 top-0 h-full w-auto z-[5]"
        src="/elements/schedule/pillar-right.svg"
        alt=""
      />
      <img
        src="/elements/schedule/pcbg.png "
        className="schedule-title-img w-[50%] absolute -bottom-[0rem] z-[6]"
        alt=""
      />
      <img
        src="/elements/schedule/mobg.png "
        className="schedule-title-img-mb w-[50%] absolute -bottom-[0rem] z-[4]"
        alt=""
      />
      <img
        className="absolute top-0 h-auto w-full z-[2]"
        src="/elements/schedule/mpillar.png"
        alt=""
      />
      <img
        ref={duckRightRef}
        className="bebekanan absolute -bottom-2 h-auto w-[30rem] z-[5] right-0"
        src="/elements/schedule/ccc3.png"
        alt=""
      />
      <img
        ref={duckLeftRef}
        className="bebekiri absolute -bottom-2 h-auto w-[30rem] z-[5] left-0"
        src="/elements/schedule/bebekiri.png"
        alt=""
      />
      <img
        className="star absolute -top-2 h-auto w-[70rem] z-[3] "
        src="/elements/schedule/star-circle.svg"
        alt=""
      />

      {/* non absolute  */}
      <div className="title-wrapper flex flex-col justify-center items-center">
        <img
          className="title-img mt-[-8%] z-10"
          src="/elements/schedule/jadwal.svg"
          alt=""
        />
        <h1 className="title-owik relative z-10 mt-[20%] mb-[2rem] font-lettertype text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3F61AD] to-[#75ABDC]">
          OWEEK 2025
        </h1>
        <div className="schedule-wrapper relative z-[100] flex flex-col items-center justify-center w-full gap-4">
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
                        <a
                          href="https://oweek.uc.ac.id/parents/"
                          target="_blank"
                        >
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
                      {Array.isArray(currentSchedule.date) ? (
                        currentSchedule.date.map(
                          (dateItem: string, idx: number) => (
                            <div
                              key={idx}
                              className="text-icon-container flex items-center schedule-item-desc font-roboto text-[#AB6528]"
                            >
                              <div className="w-8 flex justify-center">
                                <i className="icon text-2xl text-[#D45A0A] bi bi-calendar-check-fill"></i>
                              </div>
                              <span className="schedule-text-description text-xl">
                                {Array.isArray(currentSchedule.day)
                                  ? `${currentSchedule.day[idx]}, ${dateItem}`
                                  : `${currentSchedule.day}, ${dateItem}`}
                              </span>
                            </div>
                          )
                        )
                      ) : (
                        <div className="text-icon-container flex items-center schedule-item-desc font-roboto text-[#AB6528]">
                          <div className="w-8 flex justify-center">
                            <i className="icon text-2xl text-[#D45A0A] bi bi-calendar-check-fill"></i>
                          </div>
                          <span className="schedule-text-description text-xl">
                            {currentSchedule.day}, {currentSchedule.date}
                          </span>
                        </div>
                      )}

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
        </div>
      </div>
       {/* Add PopUpPanel component */}
          <div className="relative z-[1000]">
            <PopUpPanel
              currentDayIndex={currentIndex}
              isHidden={isHidden}
              setIsHidden={setIsHidden}
              popupType={popupType}
              setPopupType={setPopupType}
            />
          </div>
    </div>
  );
}
