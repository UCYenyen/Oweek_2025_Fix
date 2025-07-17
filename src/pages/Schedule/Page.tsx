// import "./styles.css";
import "./style.css";
import ScheduleDiv from "../../components/schedule";

export default function Schedule() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen bg-[#B2D5F1] bg-cover bg-[url('/elements/real-background.svg')] schedule-page-container">
      {/* absolute images here */}
      <img className="pillar-left absolute left-0 top-0 h-full w-auto z-[5] " src="/elements/schedule/pillar-left.svg" alt="" />
      <img className="pillar-right absolute right-0 top-0 h-full w-auto z-[5]" src="/elements/schedule/pillar-right.svg" alt="" />
      <img src="/elements/schedule/pcbg.png " className="schedule-title-img w-[50%] absolute -bottom-[0rem] z-[6]" alt="" />
      <img src="/elements/schedule/mbbg.png " className="schedule-title-img-mb w-[50%] absolute -bottom-[0rem] z-[4]" alt="" />
      <img className="absolute top-0 h-auto w-full z-[2]" src="/elements/schedule/mpillar.png" alt="" />
      <img className="bebekanan absolute -bottom-2 h-auto w-[30rem] z-[5] right-0" src="/elements/schedule/ccc3.png" alt="" />
      <img className="bebekiri absolute -bottom-2 h-auto w-[30rem] z-[5] left-0" src="/elements/schedule/bebekiri.png" alt="" />
      <img className="star absolute -top-2 h-auto w-[70rem] z-[3] " src="/elements/schedule/star-circle.svg" alt="" />

      {/* non absolute  */}
      <div className="title-wrapper flex flex-col justify-center items-center">
        <img className="title-img mt-[-8%] z-10" src="/elements/schedule/title.svg" alt="" />
        <h1 className="title-owik relative z-10 mt-[20%] mb-[2rem] font-lettertype text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3F61AD] to-[#75ABDC]"> PRA OWEEK </h1>
        <ScheduleDiv/>
      </div>
    </div>
  );
}
