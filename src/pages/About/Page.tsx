import "./styles.css";
import Mascots from "../../components/mascots";

export default function About() {
  return (
    <div className="relative w-screen min-h-screen bg-[#B2D5F1] bg-cover bg-[url('/elements/real-background.svg')]">
      <div className="relative w-screen h-screen">
        <img
          src="/elements/about/pillar-left.svg"
          className="w-[10%] h-full absolute left-0 -top-2"
          alt="pillar-left"
        />
        <img
          src="/elements/about/pillar-right.svg"
          className="w-[10%] h-full absolute right-0 -top-2"
          alt="pillar-right"
        />

        <img
          src="/elements/about/sun.svg"
          className="absolute top-[20vh] w-[90%] left-1/2 -translate-x-1/2"
          alt="sun"
        />
        <img
          src="/elements/about/star-circle.svg"
          className="absolute top-[0vh] w-[75%] left-1/2 -translate-x-1/2"
          alt="star-circle"
        />

        <img
          src="/elements/about/about-bg.svg"
          className="absolute top-[2vh] w-[50%] z-10 left-1/2 -translate-x-1/2"
          alt="about-bg"
        />

        <h1 className="absolute top-[24vh] left-1/2 -translate-x-1/2 font-lettertype text-[10vh] z-20 text-center bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text text-transparent">
          ABOUT
        </h1>
      </div>
      
      <div className="">
        <Mascots />
      </div>
    </div>
  );
}
