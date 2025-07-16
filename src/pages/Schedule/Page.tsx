import "./styles.css";
import ScheduleDiv from "../../components/schedule";

export default function Schedule() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen bg-[#B2D5F1] bg-cover bg-[url('/elements/real-background.svg')] schedule-page-container">
      {/* absolute images here */}
      <img className="absolute left-0 top-0 h-full w-auto" src="/elements/schedule/pillar-left.svg" alt="" />
      <img className="absolute right-0 top-0 h-full w-auto" src="/elements/schedule/pillar-right.svg" alt="" />
      <img src="/elements/schedule/schedulebg.png" className="w-[50%] absolute -bottom-[8rem] z-0" alt="" />

      {/* non absolute  */}
      <div className="flex flex-col justify-center items-center">
        <img className="mt-[-8%] z-10" src="/elements/schedule/title.svg" alt="" />
        <h1 className="relative z-10 mt-[20%] font-lettertype text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3F61AD] to-[#75ABDC]"> PRA OWEEK </h1>
        <ScheduleDiv/>
      </div>
    </div>
  );
}
