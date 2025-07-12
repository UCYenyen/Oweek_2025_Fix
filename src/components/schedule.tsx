import { useState } from "react";
import { scheduleData } from "../data/scheduleData";

interface ScheduleProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export default function Schedule({ currentIndex, setCurrentIndex }: ScheduleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % scheduleData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + scheduleData.length) % scheduleData.length);
  };

  const currentSchedule = scheduleData[currentIndex];
  const hasDressCode = currentSchedule.baju || currentSchedule.baju2;

  return (
    <div className="relative w-full flex items-center justify-center flex-col pt-[2vh] z-[21]">
      <div className="schedule-card relative rounded-3xl p-6 sm:p-8 flex items-center justify-center w-[90%] h-auto min-h-[260px]">
        {/* Left Arrow Button */}
        <button onClick={handlePrev} className="button-left p-2 absolute -left-4 sm:-left-20">
          <img src="/elements/schedule/buttonleft.svg" alt="Previous" />
        </button>

        {/* Schedule Content */}
        <div className="flex flex-col items-center text-center text-[#AB6528] font-roboto space-y-2 sm:space-y-4 schedule-inner-content">
          <div>
            <h2 className="text-title sm:text-4xl font-bold schedule-item-title">{currentSchedule.title}</h2>
            <p className="text-desc sm:text-xl schedule-item-desc">{currentSchedule.date}</p>
            <p className="text-desc sm:text-xl schedule-item-desc">{currentSchedule.location}</p>
          </div>
          <div className="pt-7 text-lg sm:text-2xl font-bold schedule-sessions-list">
            {currentSchedule.sessions.map((session, index) => (
              <p key={index}>{session}</p>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button onClick={handleNext} className="button-right p-2 absolute -right-4 sm:-right-20">
          <img src="/elements/schedule/buttonright.svg" alt="Next" />
        </button>
      </div>

      {/* Bottom Buttons */}
      <div className="flex items-center justify-center gap-4 pt-4 schedule-button-group">
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

      {/* Dress Code Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center z-50">
          <div className="schedule-card relative rounded-3xl p-8 w-[90%] max-w-lg text-[#AB6528] font-roboto flex flex-col items-center">
            {/* Title */}
            <h2 className="text-4xl font-bold mb-6">Dress Code</h2>

            {/* Details */}
            <div className="text-lg space-y-4 w-full text-center">
              {currentSchedule.baju && (
                <div>
                  <p className="font-bold">Baju:</p>
                  <p>{currentSchedule.baju}</p>
                </div>
              )}
              {currentSchedule.baju2 && (
                <div>
                  <p className="font-bold">Baju 2:</p>
                  <p>{currentSchedule.baju2}</p>
                </div>
              )}
              {currentSchedule.celana && (
                <div>
                  <p className="font-bold">Celana:</p>
                  <p>{currentSchedule.celana}</p>
                </div>
              )}
              {currentSchedule.sepatu && (
                <div>
                  <p className="font-bold">Sepatu:</p>
                  <p>{currentSchedule.sepatu}</p>
                </div>
              )}
            </div>

            {/* Close Button */}
            <button onClick={() => setIsModalOpen(false)} className="button-schedule mt-8 w-full py-2 rounded-full">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
