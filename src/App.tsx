import "./App.css";
import "./styles/Home.css";
import Countdown from "./components/countdown";
import { useHomeAnimations } from "./hooks/useHomeAnimation";

function App() {
  // 
  const {
    leftYucaRef,
    chikenYucaRef,
    gladiatorRef,
    nerdRef,
    cloudRef,
    sunRef,
    luminateTitleRef,
    backgroundRef // Added backgroundRef
  } = useHomeAnimations();

  return (
    <>
      <div 
        ref={backgroundRef} // Added ref to the container
        className='all-container relative w-screen bg-[#B2D5F1] bg-cover bg-[url("/elements/real-background.svg")]'
      >
        <img className="wall-left absolute left-0 -top-1 w-[20%]" src="/elements/section/pillar-left.svg" alt="" draggable="false"/>
        <img className="wall-right absolute right-0 -top-1 w-[20%]" src="/elements/section/pillar-right.svg" alt="" draggable="false"/>
        <div className="flex flex-col justify-center items-center">
          <img ref={luminateTitleRef} src="/elements/icons/welcoming-logo.png" className="welcoming-logo z-[5] -mt-[2.5%]" alt="" draggable="false" />
          <Countdown/>
        </div>
        <div className="flex flex-col items-center justify-center overflow-hidden -z-[10]">
          <img src="/elements/section/building-center-home-page.svg" className="building-center z-[2] w-[60%] absolute -bottom-[40vh]" alt="" draggable="false"/>
          <img ref={sunRef} src="/elements/section/sun.png" loading="lazy" className="sun-home absolute min-w-auto min-h-auto z-[0]" alt="" draggable="false"/>
          {/* <img src="/elements/section/stars.svg" loading="lazy aaa" className="stars absolute w-full z-[0] -bottom-[80%]" alt="" draggable="false"/> */}
          {/* Animated Characters */}
          <img 
            ref={leftYucaRef}
            src="/elements/section/Yucca.png" 
            className="left-yuca absolute left-0 -bottom-[3.5rem] z-[2]" 
            alt="" 
            draggable="false"
          />
          <img 
            ref={cloudRef}
            src="/elements/section/cloud.svg" 
            loading="lazy" 
            className="cloud absolute left-0 -bottom-[10.5rem]" 
            alt="" 
            draggable="false"
          />
          <img 
            ref={chikenYucaRef}
            src="/elements/section/ChikenYucaTop.png" 
            className="chiken-yuca absolute left-0 bottom-[15.5rem]" 
            alt="" 
            draggable="false"
          />
          <img src="/elements/section/plant-right.svg" className="plant-right absolute right-0 -bottom-[1rem] z-[1]" alt="" draggable="false"/>
          <img 
            ref={gladiatorRef}
            src="/elements/section/gladiator.png" 
            className="gladiator absolute right-0 -bottom-[7.5rem] z-[2]" 
            alt="" 
            draggable="false"
          />
          <img 
            ref={nerdRef}
            src="/elements/section/nerd.png" 
            className="nerd absolute right-0 bottom-[7.5rem] z-[0]" 
            alt="" 
            draggable="false"
          />
        </div>
      </div>
    </>
  );
}

export default App;


