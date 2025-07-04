import "./App.css";
import "./styles/Home.css";
import Countdown from "./components/countdown";
function App() {
  return (
    <>
    <div className='all-container relative w-screen bg-[#B2D5F1] bg-cover bg-[url("/elements/real-background.svg")]'>
      <img className="wall-left absolute left-0 -top-1 w-[20%]" src="/elements/section/pillar-left.svg" alt="" />
      <img className="wall-right absolute right-0 -top-1 w-[20%]" src="/elements/section/pillar-right.svg" alt="" />
      <div className="flex flex-col justify-center items-center">
        <img src="/elements/icons/welcoming-logo.svg" className="welcoming-logo z-[5] -mt-[2.5%]" alt="" />
        <Countdown/>
      </div>
      <div className="flex flex-col items-center justify-center overflow-hidden -z-[10]">
        <img src="/elements/section/building-center-home-page.svg" className="building-center z-[2] w-[60%] absolute -bottom-[40vh]" alt="" />
        <img src="/elements/section/sun.svg" className="sun absolute w-full z-[0] -bottom-[80%]" alt="" />
        <img src="/elements/section/left-yuca.svg" className="left-yuca absolute left-0 -bottom-[3.5rem] z-[2]" alt="" />
        <img src="/elements/section/cloud.svg" className="cloud absolute left-0 -bottom-[10.5rem]" alt="" />
        <img src="/elements/section/chiken-on-top-of-yuca.svg" className="chiken-yuca absolute left-0 bottom-[15.5rem]" alt="" />
        <img src="/elements/section/plant-right.svg" className="plant-right absolute right-0 -bottom-[1rem] z-[1]" alt="" />
        <img src="/elements/section/gladiator-chiken.svg" className="gladiator absolute right-0 -bottom-[7.5rem] z-[2]" alt="" />
        <img src="/elements/section/nerd-chiken.svg" className="nerd absolute right-0 bottom-[7.5rem] z-[0]" alt="" />
      </div>
    </div>
    </>
  );
}

export default App;


