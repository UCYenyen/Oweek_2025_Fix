import ScheduleDiv from "../../components/schedule";
import { useState } from "react";
import { scheduleData } from "../../data/scheduleData";
import "./styles.css";

export default function Schedule() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSchedule = scheduleData[currentIndex];
  const title =
    currentSchedule.day === "PRA-OWEEK" ? "PRA-OWEEK" : "OWEEK 2025";

  return (
    <div className="relative w-screen h-screen bg-[#B2D5F1] bg-cover bg-[url('/elements/real-background.svg')]">
      <img
        src="/elements/schedule/title.svg"
        className="absolute w-[50%] h-auto -top-[3vh] left-1/2 -translate-x-1/2 z-20"
        alt="schedule-title"
      />
      <img
        src="/elements/schedule/star-circle.svg"
        className="absolute w-[80%] h-auto -top-[3vh] left-1/2 -translate-x-1/2 z-10"
        alt="star-circle"
      />
      <div className="relative w-screen h-[125vh] flex items-center justify-center">
        <img
          src="/elements/schedule/massive-pillar.svg"
          className="absolute w-full h-full top-0 left-0 z-0"
          alt="pillar-massive"
        />

        <img
          src="/elements/schedule/pillar-left.svg"
          className="absolute w-[10%] h-[85%] top-0 left-0 z-0"
          alt="pillar-left"
        />
        <img
          src="/elements/schedule/pillar-right.svg"
          className="absolute w-[10%] h-[85%] top-0 right-0 z-0"
          alt="pillar-right"
        />

        <img
          src="/elements/schedule/bebekkanan.svg"
          className="absolute w-[50vh] h-auto bottom-[10vh] right-[5vh] z-10"
          width={100}
          height={100}
          alt="bebekkanan"
        />
        <img
          src="/elements/schedule/bebekkiri.svg"
          className="absolute w-[50vh] h-auto bottom-[23vh] left-0 z-10"
          width={100}
          height={100}
          alt="bebekkiri"
        />

        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <div className="relative w-[65%] h-[85%] z-10">
            <img
              src="/elements/schedule/schedule-bg.svg"
              className="absolute top-0 left-0 w-full h-full"
              alt="schedule-bg"
            />
            <div className="relative z-20 flex flex-col items-center justify-start w-full h-full pt-[10vh]">
              <h1 className="title-font mb-4">{title}</h1>
              <ScheduleDiv
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
