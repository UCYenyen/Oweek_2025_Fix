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
    <div className="relative w-full flex items-center justify-center flex-col pt-[2vh]">
      <div className="schedule-card relative rounded-3xl p-6 sm:p-8 flex items-center justify-center w-[90%] h-auto">
        {/* Left Arrow Button */}
        <button onClick={handlePrev} className="button-left p-2 absolute -left-4 sm:-left-20">
          <img src="/elements/schedule/buttonleft.svg" alt="Previous" />
        </button>

        {/* Schedule Content */}
        <div className="flex flex-col items-center text-center text-[#AB6528] font-roboto space-y-2 sm:space-y-4">
          <div>
            <h2 className="text-title sm:text-4xl font-bold">{currentSchedule.title}</h2>
            <p className="text-desc sm:text-xl">{currentSchedule.date}</p>
            <p className="text-desc sm:text-xl">{currentSchedule.location}</p>
          </div>
          <div className="pt-7 text-lg sm:text-2xl font-bold">
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
      <div className="flex items-center justify-center gap-4 pt-4">
        <button className="button-font button-schedule px-6 py-2 text-lg rounded-full">
          PENUGASAN
        </button>
        {hasDressCode && (
          <button
            onClick={() => setIsModalOpen(true)}
            className=" flex items-center justify-center"
          >
            <img
              src="/elements/schedule/shirt.svg"
              alt="Ketentuan Pakaian"
              className="h-24 w-24"
            />
          </button>
        )}
        <button className="button-font button-schedule px-6 py-2 text-lg rounded-full">
          KETENTUAN
        </button>
      </div>

      {/* Dress Code Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50">
          <div className="schedule-card p-8 rounded-3xl max-w-md w-[90%]">
            <h3 className="text-3xl font-bold text-center text-[#AB6528] mb-4">Dress Code</h3>
            <div className="text-[#AB6528] space-y-2">
              <p>{currentSchedule.baju}</p>
              <p>{currentSchedule.celana}</p>
              <p>{currentSchedule.sepatu}</p>
              {currentSchedule.extra && <p className="font-bold">{currentSchedule.extra}</p>}
              {currentSchedule.baju2 && <hr className="my-4 border-[#AB6528]" />}
              {currentSchedule.baju2 && <p>{currentSchedule.baju2}</p>}
              {currentSchedule.celana2 && <p>{currentSchedule.celana2}</p>}
              {currentSchedule.sepatu2 && <p>{currentSchedule.sepatu2}</p>}
            </div>
            <button onClick={() => setIsModalOpen(false)} className="button-schedule mt-6 w-full py-2 rounded-full">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
