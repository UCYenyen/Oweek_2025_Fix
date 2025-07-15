import { useState } from "react";
import { scheduleData } from "../data/scheduleData";

interface ScheduleProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export default function Schedule({
  currentIndex,
  setCurrentIndex,
}: ScheduleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % scheduleData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + scheduleData.length) % scheduleData.length
    );
  };

  const currentSchedule = scheduleData[currentIndex];
  const hasDressCode = currentSchedule.baju || currentSchedule.baju2;

  return (
    <div className="relative w-full flex items-center justify-center flex-col pt-[2vh] z-[21]">
      <div className="schedule-card relative rounded-3xl p-6 sm:p-8 flex items-center justify-center w-[90%] h-auto min-h-[260px]">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="button-left p-2 absolute -left-4 sm:-left-20"
        >
          <img src="/elements/schedule/buttonleft.svg" alt="Previous" />
        </button>

        {/* Schedule Content */}
        <div className="flex flex-col items-center text-center text-[#AB6528] font-roboto space-y-2 sm:space-y-4 schedule-inner-content">
          <div>
            <h2 className="text-title sm:text-4xl font-bold schedule-item-title">
              {currentSchedule.title}
            </h2>
            <p className="text-desc sm:text-xl schedule-item-desc">
              {currentSchedule.date}
            </p>
            <p className="text-desc sm:text-xl schedule-item-desc">
              {currentSchedule.location}
            </p>
          </div>
          <div className="pt-7 text-lg sm:text-2xl font-bold schedule-sessions-list">
            {currentSchedule.sessions.map((session, index) => (
              <p key={index}>{session}</p>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="button-right p-2 absolute -right-4 sm:-right-20"
        >
          <img src="/elements/schedule/buttonright.svg" alt="Next" />
        </button>
      </div>

      {/* Bottom Buttons */}
      <div className="flex items-center justify-center gap-4 pt-2 schedule-button-group">
        <button className="button-font button-schedule px-6 py-2 text-lg rounded-full">
          PENUGASAN
        </button>
        {hasDressCode && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="button-dresscode flex items-center justify-center"
          >
            <img
              src="/elements/schedule/shirt.svg"
              alt="Ketentuan Pakaian"
              className="h-16 w-16 sm:h-24 sm:w-24"
            />
          </button>
        )}
        <button className="button-font button-schedule px-6 py-2 text-lg rounded-full">
          KETENTUAN
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center z-50 p-4 dresscode-popup">
          <div className="relative w-full h-auto dresscode-popup-inner">
            <img
              src="/elements/schedule/dresscodepopup.png"
              alt="Dresscode Background"
              className="w-full h-auto hidden md:block dresscode-bg-desktop"
            />
            <img
              src="/elements/schedule/dresscodemobile.png"
              alt="Dresscode Background Mobile"
              className="w-full h-auto md:hidden dresscode-bg-mobile"
            />

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 dresscode-close-button"
            >
              <img
                src="/elements/schedule/xbutton.png"
                alt="Close"
                className="w-8 h-8 sm:w-10 sm:h-10 xbutton"
              />
            </button>

            <div className="absolute inset-0 flex flex-col items-center text-center pt-[12%] md:pt-[8%] dresscode-content">
                <h1 className="font-bold text-[#3F61AD] font-serif mt-4 md:mt-[7rem] dresscode-title">DRESSCODE</h1>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D45A0A] font-serif mt-4 md:mt-[7rem]">
                {currentSchedule.title}
              </h3>
              {/* <p className="text-sm sm:text-base md:text-lg text-[#AB6528] font-roboto mt-2 px-4 dresscode-description">
                {currentSchedule.baju}, {currentSchedule.celana},{" "}
                {currentSchedule.sepatu}
              </p>

              <div className="flex flex-col md:flex-row justify-around items-center w-full mt-4 sm:mt-8 px-[10%] space-y-4 md:space-y-0 do-dont-container">
                <div className="flex flex-col items-center w-full md:w-[45%] dont-section">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#D45A0A] font-serif dont-title">
                    DON'T
                  </h4>
                  <div className="w-full h-32 sm:h-48 bg-[#A2BFE6] mt-2 rounded-lg dont-box"></div>
                </div>

                <div className="flex flex-col items-center w-full md:w-[45%] do-section">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#3F61AD] font-serif do-title">
                    DO
                  </h4>
                  <div className="w-full h-32 sm:h-48 bg-[#D1E7DD] mt-2 rounded-lg do-box"></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
