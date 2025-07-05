"use client";

import { useState, useEffect } from "react";
import { useCountdownAnimation } from "../hooks/useCountdownAnimation";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { countdownRef } = useCountdownAnimation();

  useEffect(() => {
    const targetDate = new Date("August 25, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Countdown */}
      <div
        ref={countdownRef}
        className="countdown mt-6 relative h-full z-20 grid grid-cols-2 sm:grid-cols-4 gap-4 items-end mb-12 justify-center"
      >
        {/* Days */}
        <div className="countdown-card-container flex flex-col gap-4">
          <div className="count-down-card bg-blend-screen rounded-xl h-[240px] w-[170px] 3xl:w-[240px] 3xl:h-[310px] flex items-center justify-center">
            <h1 className="countdown-number font-lettertype bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text text-transparent text-9xl">
              {timeLeft.days.toString().padStart(2, "0")}
            </h1>
          </div>
          <div className="count-down-text-card bg-blend-screen rounded-full w-[170px] 3xl:w-[240px]">
            <h1 className="bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent font-bold text-center">
              Days
            </h1>
          </div>
        </div>

        {/* Hours */}
        <div className="countdown-card-container flex flex-col gap-4">
          <div className="count-down-card bg-blend-screen rounded-xl h-[240px] w-[170px] 3xl:w-[240px] 3xl:h-[310px] flex items-center justify-center">
            <h1 className="countdown-number font-lettertype bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text text-transparent text-9xl">
              {timeLeft.hours.toString().padStart(2, "0")}
            </h1>
          </div>
          <div className="count-down-text-card bg-blend-screen rounded-full w-[170px] 3xl:w-[240px]">
            <h1 className="bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent font-bold text-center">
              Hours
            </h1>
          </div>
        </div>

        {/* Minutes */}
        <div className="countdown-card-container flex flex-col gap-4">
          <div className="count-down-card bg-blend-screen rounded-xl h-[240px] w-[170px] 3xl:w-[240px] 3xl:h-[310px] flex items-center justify-center">
            <h1 className="countdown-number font-lettertype bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text text-transparent text-9xl">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </h1>
          </div>
          <div className="count-down-text-card bg-blend-screen rounded-full w-[170px] 3xl:w-[240px]">
            <h1 className="bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent font-bold text-center">
              Minutes
            </h1>
          </div>
        </div>

        {/* Seconds */}
        <div className="countdown-card-container flex flex-col gap-4">
          <div className="count-down-card bg-blend-screen rounded-xl h-[240px] w-[170px] 3xl:w-[240px] 3xl:h-[310px] flex items-center justify-center">
            <h1 className="countdown-number font-lettertype bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text text-transparent text-9xl">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </h1>
          </div>
          <div className="count-down-text-card bg-blend-screen rounded-full w-[170px] 3xl:w-[240px]">
            <h1 className="bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent font-bold text-center">
              Seconds
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
