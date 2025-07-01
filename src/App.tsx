import "./App.css";
import "./styles/Home.css";
import Countdown from "./components/countdown";
function App() {
  return (
    <div className='relative w-screen bg-[#B2D5F1] bg-cover bg-[url("/elements/real-background.svg")] overflow-hidden'>
      <div className="relative w-screen h-[95vh] flex items-center justify-center">
        <img src="/elements/section/pillar-left.svg" className="w-[25%] absolute left-0 -top-2" alt="" loading="lazy"/>
        <img src="/elements/section/pillar-right.svg" className="w-[25%] absolute right-0 -top-2" alt="" loading="lazy"/>
        
        
        <div className="relative w-full h-full flex items-center justify-center">
          <img src="/elements/section/building-center-home-page.svg" className="building-center top-36 w-[45%] xl:w-[50%] absolute z-10" alt="" loading="lazy"/>
          <img src="/elements/icons/welcoming-logo.svg" className="welcoming-logo absolute w-fit top-2 z-10 lg:w-[42.5%]" alt="" loading="lazy"/>
          <img src="/elements/section/sun.svg" className="absolute w-[80%] top-56" alt="" loading="lazy"/>
          <img src="/elements/section/left-yuca.svg" className="yuca absolute -bottom-[3.5rem] lg:-bottom-[2.25rem] 2xl:-bottom-[3.25rem] w-[20%] left-0 z-10" alt="" loading="lazy"/>
          <img src="/elements/section/cloud.svg" className="cloud absolute -bottom-[8.5rem] left-0 z-[5]" alt="" loading="lazy"/>
          <img src="/elements/section/chiken-on-top-of-yuca.svg" className="yuca-chiken absolute bottom-[14.5rem] w-[15%] left-0 z-[4]" alt="" loading="lazy"/>
          <img src="/elements/section/gladiator-chiken.svg" className="gladiator-chiken absolute -bottom-[7.5rem] right-0 z-[5]" alt="" loading="lazy"/>
          <img src="/elements/section/plant-right.svg" className="absolute w-[15%] -bottom-4 right-0 z-[4]" alt="" loading="lazy"/>
          <img src="/elements/section/nerd-chiken.svg" className="nerd-chiken absolute bottom-[11.5rem] lg:bottom-[4.5rem] right-0 z-[3]" alt="" loading="lazy"/>
          <Countdown/>
        </div>
      </div>
    </div>
  );
}

export default App;
