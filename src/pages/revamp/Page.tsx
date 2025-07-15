// import ScheduleDiv from "../../components/schedule";
// import { useState, useEffect, useRef } from "react";
// import { scheduleData } from "../../data/scheduleData";
// import "./styles.css";
// import { gsap } from "gsap";

// export const useSchedulePageAnimation = () => {

// };

// export default function Schedule() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const {
//     titleRef,
//     starCircleRef,
//     pillarLeftRef,
//     pillarRightRef,
//     duckLeftRef,
//     duckRightRef,
//     cardContainerRef,
//     cloudRef,
//     scheduleContentRef,
//   } = useSchedulePageAnimation();

//   const currentSchedule = scheduleData[currentIndex];
//   // const title =
//   currentSchedule.day === "PRA-OWEEK" ? "PRA-OWEEK" : "OWEEK 2025";

//   return (
//     <div className="relative w-screen bg-[#B2D5F1] bg-cover bg-[url('/elements/real-background.svg')] schedule-page-container">
//       <img
//         className="wall-left absolute left-0 -top-1"
//         src="/elements/schedule/pillar-left.svg"
//         alt=""
//         draggable="false"
//       />
//       <img
//         className="wall-right absolute right-0 -top-1"
//         src="/elements/schedule/pillar-right.svg"
//         alt=""
//         draggable="false"
//       />
//        <img
//           src="/elements/schedule/massive-pillar.svg"
//           className="absolute z-0 schedule-massive-pillar"
//           alt="pillar-massive"
//         />
//         <div
//           ref={scheduleContentRef}
//           className="absolute z-10 schedule-card-content"
//         >
//           <ScheduleDiv
//             currentIndex={currentIndex}
//             setCurrentIndex={setCurrentIndex}
//           />
//         </div>
//       <div className="flex flex-col items-center justify-center overflow-hidden -z-[10]">
//         <img
//         ref={titleRef}
//         src="/elements/schedule/title.svg"
//         className="absolute z-[4] schedule-title-img"
//         alt="schedule-title"
//       />
//       <img
//         ref={starCircleRef}
//         src="/elements/schedule/star-circle.svg"
//         className="absolute z-[3] schedule-star-circle"
//         alt="star-circle"
//       />
//       <img
//           ref={cloudRef}
//           src="/elements/schedule/cloudschedule.png"
//           className="absolute schedule-sun-top"
//           alt="sun-top"
//         />
//          <img
//           ref={duckRightRef}
//           src="/elements/schedule/ccc3.png"
//           className="absolute z-[10] schedule-duck-right"
//           width={100}
//           height={100}
//           alt="bebekkanan"
//         />
//         <img
//           ref={duckLeftRef}
//           src="/elements/schedule/bebekkiri.svg"
//           className="absolute w-[50vh] h-auto bottom-[23vh] left-0 z-[10] schedule-duck-left"
//           width={100}
//           height={100}
//           alt="bebekkiri"
//         />
//       </div>
//     </div>
//   );
// }
