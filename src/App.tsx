import "./App.css";
import Countdown from "./components/countdown";
function App() {
  return (
    <div className='relative w-screen bg-[#B2D5F1] bg-cover bg-[url("/elements/real-background.svg")] overflow-hidden'>
      <div className="relative w-screen h-[95vh] flex items-center justify-center">
        <img src="/elements/section/pillar-left.svg" className="w-[20%] absolute left-0 -top-1" alt="" />
        <img src="/elements/section/pillar-right.svg" className="w-[20%] absolute right-0 -top-1" alt="" />
        
        
        <div className="relative w-full h-full flex items-center justify-center">
          <img src="/elements/section/building-center-home-page.svg" className="top-36 w-[45%] absolute z-10" alt="" />
          <img src="/elements/icons/welcoming-logo.svg" className="absolute top-2 z-10" alt="" />
          <img src="/elements/section/sun.svg" className="absolute w-[80%] top-56" alt="" />
          <img src="/elements/section/left-yuca.svg" className="absolute -bottom-[3.5rem] w-[20%] left-0 z-10" alt="" />
          <img src="/elements/section/cloud.svg" className="absolute -bottom-[8.5rem] left-0 z-[5]" alt="" />
          <img src="/elements/section/chiken-on-top-of-yuca.svg" className="absolute bottom-[14.5rem] left-0 z-[4]" alt="" />
          <img src="/elements/section/gladiator-chiken.svg" className="absolute -bottom-[7.5rem] right-0 z-[5]" alt="" />
          <img src="/elements/section/plant-right.svg" className="absolute w-[15%] -bottom-4 right-0 z-[4]" alt="" />
          <img src="/elements/section/nerd-chiken.svg" className="absolute bottom-[11.5rem] right-0 z-[3]" alt="" />
          <Countdown/>
        </div>
      </div>
    </div>
  );
}

export default App;
