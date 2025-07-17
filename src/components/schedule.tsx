import { useState } from "react";
import { scheduleData } from "../data/scheduleData";

export default function Schedule() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % scheduleData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + scheduleData.length) % scheduleData.length
    );
  };

  const currentSchedule = scheduleData[currentIndex];

  return (
    <div className="schedule-wrapper relative z-[1000] flex flex-col items-center justify-center w-full gap-4">
      {/* container untuk schedule card dan button */}
      <div className="flex items-center justify-center w-full gap-4">
        <button onClick={handlePrev} className="">
          <img src="/elements/schedule/buttonleft.svg" alt="Previous" className="w-12 h-12 button-left" />
        </button>

        <div className="flex flex-col items-center text-center schedule-card rounded-3xl">
          <h2 className="text-2xl font-bold text-[#D45A0A] font-serif schedule-item-title">
            {currentSchedule.title}
          </h2>
          <p className="mt-2 text-lg schedule-item-desc">
            {currentSchedule.date}
          </p>
          <p className="text-lg schedule-item-desc">
            {currentSchedule.location}
          </p>
          <div className="mt-4 text-center schedule-sessions-list">
            {currentSchedule.sessions.map((session, index) => (
              <p key={index} className="text-md">
                {session}
              </p>
            ))}
          </div>
        </div>

        <button onClick={handleNext} className="">
          <img src="/elements/schedule/buttonright.svg" alt="Next" className="w-12 h-12 button-right" />
        </button>
      </div>

      {/* Button dresscode bawah penugasan dan ketentuan*/}
      <div className="flex items-center justify-between w-[78%] gap-4 schedule-button-group">
        <button className="penugasan button-schedule rounded-full font-lettertype text-white">PENUGASAN</button>
        <button className="">
          <img src="/elements/schedule/shirt.svg" alt="Dress Code" className="button-dresscode" />
        </button>
        <button className="ketentuan button-schedule rounded-full font-lettertype text-white">KETENTUAN</button>
      </div>
    </div>
  );
}