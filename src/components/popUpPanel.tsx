import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import penugasanData from "../data/penugasanData";
import ketentuanData from "../data/ketentuanData";
import { dataDresscode } from "../data/dresscodeData";
import { linkData } from "../data/linksData";

import "./../styles/popUpPanel.css";

type LinkItem = {
  text: string;
  linkId: string;
};

type PopUpPanelProps = {
  isHidden: boolean;
  setIsHidden: (hidden: boolean) => void;
  popupType: "dresscode" | "penugasan" | "ketentuan";
  setPopupType: (type: "dresscode" | "penugasan" | "ketentuan") => void;
  currentDayIndex: number;
};

export default function PopUpPanel({
  isHidden,
  setIsHidden,
  popupType,
  setPopupType,
  currentDayIndex,
}: PopUpPanelProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHidden && wrapperRef.current && overlayRef.current) {
      // Set initial state for overlay
      gsap.set(overlayRef.current, {
        autoAlpha: 0,
      });

      // Set initial state for wrapper
      gsap.set(wrapperRef.current, {
        scale: 0.3,
        rotation: 0,
        y: -50,
        autoAlpha: 0,
      });

      // Create the pop animation
      const tl = gsap.timeline();

      // Animate overlay first
      tl.to(overlayRef.current, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.out",
      })
        // Then animate the wrapper with pop effect
        .to(
          wrapperRef.current,
          {
            scale: 1,
            rotation: 0,
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          },
          "<0.1"
        );
    }
  }, [isHidden, popupType]);

  if (isHidden) return null;

  const handleClose = () => {
    if (wrapperRef.current && overlayRef.current) {
      // Animate out before closing
      const tl = gsap.timeline({
        onComplete: () => {
          setIsHidden(true);
          setPopupType("dresscode");
        },
      });

      tl.to(wrapperRef.current, {
        scale: 0.8,
        rotation: 0,
        y: -20,
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.in",
      }).to(
        overlayRef.current,
        {
          autoAlpha: 0,
          duration: 0.2,
          ease: "power2.in",
        },
        "<0.1"
      );
    } else {
      setIsHidden(true);
      setPopupType("dresscode");
    }
  };

  return (
    <div className="main-container fixed inset-0 flex items-center justify-center z-10">
      {/* Animated overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-[#715c20]/25" />

      {popupType === "dresscode" ? (
        <div
          ref={wrapperRef}
          className="wrapper-container relative border-y-[#FFE18B] border-x-[#FFD462] border-8 flex flex-col justify-between z-20 bg-gradient-to-b from-[#FFEFB9] to-[#FFFFFE] rounded-lg min-w-[45vw] max-w-[45vw] min-h-auto"
        >
          <img
            src="/elements/schedule/border.svg"
            className="w-full h-auto"
            alt=""
          />
          <div className="content-wrapper p-8 w-full h-full flex gap-4 flex-col justify-start items-center">
            <h2 className="content-category-text text-6xl text-center font-bold font-lettertype text-transparent bg-gradient-to-r from-[#3F61AD] to-[#75ABDC] bg-clip-text">
              DRESSCODE
            </h2>
            {dataDresscode
              .filter((day) => day.dayId === currentDayIndex)
              .map((day) => (
                <div
                  key={day.dayId}
                  className="flex flex-col items-center justify-center w-full"
                >
                  <p className="content-title text-2xl text-[#C44401] font-bold font-roboto text-center">
                    {day.title}
                  </p>
                  <div className="content-description-wrapper flex flex-row justify-center gap-8 text-[#C44401] text-center mt-2">
                    {day.pakaian.map((p, pIdx) => (
                      <div key={pIdx}>
                        <h1 className="font-bold text-lg">{p.title}</h1>
                        <ul className="list-none">
                          {p.items.map((item, iIdx) => (
                            <li key={iIdx} className="content-description">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  {/* Only show DO/DON'T images if not PRA-OWEEK */}
                  {![0, 2, 3, 4, 6, 9].includes(currentDayIndex) && (
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                      <div className="dont-wrapper flex flex-col gap-0.5 items-center justify-center">
                        <p className="dont-text text-2xl text-[#C44401] text-center font-bold font-roboto">
                          DON'T
                        </p>
                        <img
                          src={day.images.dont}
                          className="dont-image bg-[#75ABDC] w-[25vw] h-auto"
                          alt="Don't"
                        />
                      </div>
                      <div className="do-wrapper flex flex-col gap-0.5 items-center justify-center">
                        <p className="do-text text-2xl text-[#C44401] text-center font-bold font-roboto">
                          DO
                        </p>
                        <img
                          src={day.images.do}
                          className="do-image bg-[#75ABDC] w-[25vw] h-auto"
                          alt="Do"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
          <img
            src="/elements/schedule/border.svg"
            className="w-full h-auto"
            alt=""
          />
          <button
            className="button-pop-up group bg-gradient-to-r from-[#EEAA2A] via-[#F2B02B] to-[#FDCB4E] rounded-full absolute -top-[1.5rem] -right-[2.5rem] min-w-[5rem] min-h-[5rem] z-[700] transition-transform duration-300 hover:scale-105"
            onClick={handleClose}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] bg-gradient-to-r from-[#FFF0BC] via-[#FFF7DC] to-[#FFFEFA] rounded-full shadow-lg relative flex justify-center items-center">
                <div className="relative rounded-full w-full h-full flex justify-center items-center">
                  <div className="absolute w-[80%] rotate-45 h-2 bg-gradient-to-r from-[#3D65BB] via-[#69B2FD] to-[#A9D1F3] rounded-full transition-colors duration-300 group-hover:from-[#C44401] group-hover:via-[#C44401] group-hover:to-[#C44401]"></div>
                  <div className="absolute w-[80%] -rotate-45 h-2 bg-gradient-to-r from-[#3D65BB] via-[#69B2FD] to-[#A9D1F3] rounded-full transition-colors duration-300 group-hover:from-[#C44401] group_hover:via-[#C44401] group-hover:to-[#C44401]"></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      ) : popupType === "penugasan" ? (
        <div
          ref={wrapperRef}
          className="wrapper-container relative border-y-[#FFE18B] border-x-[#FFD462] border-8 flex flex-col justify-between z-20 bg-gradient-to-b from-[#FFEFB9] to-[#FFFFFE] rounded-lg min-w-[45vw] max-w-[45vw] min-h-auto"
        >
          <img
            src="/elements/schedule/border.svg"
            className="w-full h-auto"
            alt=""
          />
          <div className="content-wrapper p-8 w-full h-full flex gap-4 flex-col justify-start items-center">
            <h2 className="content-category-text text-6xl text-center font-bold font-lettertype text-transparent bg-gradient-to-r from-[#3F61AD] to-[#75ABDC] bg-clip-text">
              PENUGASAN
            </h2>
            <div className="w-[90%] flex flex-col gap-4 justify-start items-start">
              {penugasanData
                .filter((day) => day.dayId === currentDayIndex)
                .map((day) =>
                  day.events.map((event, eventIdx) => (
                    <div key={eventIdx}>
                      <h3 className="font-bold text-lg text-[#C44401]">
                        {event.title}
                      </h3>
                      <ul className="list-disc list-inside ml-4">
                        {event.tasks?.map(
                          (task: string | LinkItem, taskIdx) => {
                            const shouldHideListStyle = (
                              event as { liststyle?: number[] }
                            ).liststyle?.includes(taskIdx);

                            if (typeof task === "string") {
                              return (
                                <li
                                  key={taskIdx}
                                  className={`content-description text-[#C44401] break-words ${
                                    shouldHideListStyle ? "list-none" : ""
                                  }`}
                                  style={{
                                    ...(shouldHideListStyle ? { listStyle: "none", marginLeft: "2rem" } : {}),
                                  }}
                                >
                                  {task}
                                </li>
                              );
                            }
                            if (
                              typeof task === "object" &&
                              task.linkId &&
                              linkData[task.linkId]
                            ) {
                              return (
                                <li
                                  key={taskIdx}
                                  className={`content-description text-[#C44401] break-words ${
                                    shouldHideListStyle ? "list-none" : ""
                                  }`}
                                  style={
                                    shouldHideListStyle
                                      ? { listStyle: "none" }
                                      : {}
                                  }
                                >
                                  <a
                                    href={linkData[task.linkId]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-[#3F61AD] hover:text-[#75ABDC]"
                                  >
                                    {task.text}
                                  </a>
                                </li>
                              );
                            }
                            return null;
                          }
                        )}
                      </ul>
                    </div>
                  ))
                )}
            </div>
          </div>
          <img
            src="/elements/schedule/border.svg"
            className="w-full h-auto"
            alt=""
          />
          <button
            className="button-pop-up group bg-gradient-to-r from-[#EEAA2A] via-[#F2B02B] to-[#FDCB4E] rounded-full absolute -top-[1.5rem] -right-[2.5rem] min-w-[5rem] min-h-[5rem] z-[700] transition-transform duration-300 hover:scale-105"
            onClick={handleClose}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] bg-gradient-to-r from-[#FFF0BC] via-[#FFF7DC] to-[#FFFEFA] rounded-full shadow-lg relative flex justify-center items-center">
                <div className="relative rounded-full w-full h-full flex justify-center items-center">
                  <div className="absolute w-[80%] rotate-45 h-2 bg-gradient-to-r from-[#3D65BB] via-[#69B2FD] to-[#A9D1F3] rounded-full transition-colors duration-300 group-hover:from-[#C44401] group_hover:via-[#C44401] group-hover:to-[#C44401]"></div>
                  <div className="absolute w-[80%] -rotate-45 h-2 bg-gradient-to-r from-[#3D65BB] via-[#69B2FD] to-[#A9D1F3] rounded-full transition-colors duration-300 group-hover:from-[#C44401] group_hover:via-[#C44401] group-hover:to-[#C44401]"></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      ) : (
        <div
          ref={wrapperRef}
          className="wrapper-container relative border-y-[#FFE18B] border-x-[#FFD462] border-8 flex flex-col justify-between z-20 bg-gradient-to-b from-[#FFEFB9] to-[#FFFFFE] rounded-lg min-w-[45vw] max-w-[45vw] min-h-auto"
        >
          <img
            src="/elements/schedule/border.svg"
            className="w-full h-auto"
            alt=""
          />
          <div className="content-wrapper p-8 w-full h-full flex gap-4 flex-col justify-start items-center">
            <h2 className="content-category-text text-6xl text-center font-bold font-lettertype text-transparent bg-gradient-to-r from-[#3F61AD] to-[#75ABDC] bg-clip-text">
              KETENTUAN
            </h2>
            <div className="w-[90%] flex flex-col gap-4 justify-start items-start">
              {ketentuanData
                .filter((day) => day.dayId === currentDayIndex)
                .map((day) =>
                  day.events.map((event, eventIdx) => (
                    <div key={eventIdx}>
                      <h3 className="font-bold text-lg text-[#C44401]">
                        {event.title}
                      </h3>
                      <ul className="list-disc list-inside ml-4">
                        {event.rules.map((rule: string | string[] | LinkItem, ruleIdx) => {
                          // Check if the rule is an array
                          if (Array.isArray(rule)) {
                            return (
                              <div key={ruleIdx} className="ml-4">
                                <ul className="list-disc list-inside">
                                  {rule.map((subRule, subIdx) => {
                                    // Check if this sub-rule should have no list style
                                    const shouldHideListStyle = event.liststyle?.[ruleIdx]?.includes(subIdx);
                                    
                                    return (
                                      <li
                                        key={subIdx}
                                        className={`content-description text-[#C44401] break-words ${
                                          shouldHideListStyle ? "list-none" : ""
                                        }${subIdx === 0 ? " mt-2" : ""}`}
                                        style={shouldHideListStyle ? { listStyle: "none" } : {}}
                                        dangerouslySetInnerHTML={{ __html: subRule }}
                                      />
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          } else if (typeof rule === "string") {
                            // For string rules, check if this rule index should have no list style
                            const shouldHideListStyle = event.liststyle?.[ruleIdx]?.includes(0);
                            
                            return (
                              <li
                                key={ruleIdx}
                                className={`content-description text-[#C44401] break-words ${
                                  shouldHideListStyle ? "list-none" : ""
                                }`}
                                style={{
                                  ...(shouldHideListStyle ? { listStyle: "none", marginLeft: "2rem" } : {}),
                                }}
                                dangerouslySetInnerHTML={{ __html: rule }}
                              />
                            );
                          } else if (
                            typeof rule === "object" &&
                            rule.linkId &&
                            linkData[rule.linkId]
                          ) {
                            // For link rules, check if this rule index should have no list style
                            const shouldHideListStyle = event.liststyle?.[ruleIdx]?.includes(0);
                            
                            return (
                              <li
                                key={ruleIdx}
                                className={`content-description text-[#C44401] break-words ${
                                  shouldHideListStyle ? "list-none" : ""
                                }`}
                                style={shouldHideListStyle ? { listStyle: "none" } : {}}
                              >
                                <a
                                  href={linkData[rule.linkId]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline text-[#3F61AD] hover:text-[#75ABDC]"
                                >
                                  {rule.text}
                                </a>
                              </li>
                            );
                          }
                          return null;
                        })}
                      </ul>
                    </div>
                  ))
                )}
            </div>
          </div>
          <img
            src="/elements/schedule/border.svg"
            className="w-full h-auto"
            alt=""
          />
          <button
            className="button-pop-up group bg-gradient-to-r from-[#EEAA2A] via-[#F2B02B] to-[#FDCB4E] rounded-full absolute -top-[1.5rem] -right-[2.5rem] min-w-[5rem] min-h-[5rem] z-[700] transition-transform duration-300 hover:scale-105"
            onClick={handleClose}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] bg-gradient-to-r from-[#FFF0BC] via-[#FFF7DC] to-[#FFFEFA] rounded-full shadow-lg relative flex justify-center items-center">
                <div className="relative rounded-full w-full h-full flex justify-center items-center">
                  <div className="absolute w-[80%] rotate-45 h-2 bg-gradient-to-r from-[#3D65BB] via-[#69B2FD] to-[#A9D1F3] rounded-full transition-colors duration-300 group-hover:from-[#C44401] group_hover:via-[#C44401] group-hover:to-[#C44401]"></div>
                  <div className="absolute w-[80%] -rotate-45 h-2 bg-gradient-to-r from-[#3D65BB] via-[#69B2FD] to-[#A9D1F3] rounded-full transition-colors duration-300 group-hover:from-[#C44401] group_hover:via-[#C44401] group-hover:to-[#C44401]"></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
