import "./App.css";
function App() {
  return (
    <div className='relative w-screen bg-[#B2D5F1] bg-cover bg-[url("/elements/real-background.svg")] overflow-hidden'>
      <div className="relative w-screen h-screen flex items-center justify-center">
        <img src="/elements/section/pillar-left.svg" className="w-[20%] absolute left-0 -top-1" alt="" />
        <img src="/elements/section/pillar-right.svg" className="w-[20%] absolute right-0 -top-1" alt="" />
        
        
        <div className="relative w-full h-1/2 flex items-center justify-center">
          <img src="/elements/section/building-center-home-page.svg" className="-top-36 w-[55%] absolute z-10" alt="" />
          <img src="/elements/icons/welcoming-logo.svg" className="absolute -top-56 z-10" alt="" />
          <img src="/elements/section/sun.svg" className="absolute top-28" alt="" />
          {/* Countdown */}
          <div className="relative h-full z-20 grid grid-cols-4 gap-4 items-end justify-center">
            {/* Days */}
            <div className="flex flex-col gap-4">
                <div className="count-down-card bg-blend-screen rounded-xl h-[240px] w-[170px] flex items-center justify-center">
                  <h1 className="font-lettertype bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text text-transparent text-9xl">60</h1>
                </div>
                <div className="count-down-text-card bg-blend-screen rounded-full text-2xl w-[170px]">
                  <h1 className="bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent font-bold text-center">Days</h1>
                </div>
            </div>

            {/* Hours */}
            <div className="flex flex-col gap-4">
                <div className="count-down-card bg-blend-screen rounded-xl h-[240px] w-[170px] flex items-center justify-center">
                  <h1 className="font-lettertype bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text text-transparent text-9xl">60</h1>
                </div>
                <div className="count-down-text-card bg-blend-screen rounded-full text-2xl w-[170px]">
                <h1 className="bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent font-bold text-center">Hours</h1>
                </div>
            </div>
            {/* Minutes */}
            <div className="flex flex-col gap-4">
                <div className="count-down-card bg-blend-screen rounded-xl h-[240px] w-[170px] flex items-center justify-center">
                  <h1 className="font-lettertype bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text text-transparent text-9xl">60</h1>
                </div>
                <div className="count-down-text-card bg-blend-screen rounded-full text-2xl w-[170px]">
                  <h1 className="bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent font-bold text-center">Days</h1>
                </div>
            </div>

            {/* Seconds */}
            <div className="flex flex-col gap-4">
                <div className="count-down-card bg-blend-screen rounded-xl h-[240px] w-[170px] flex items-center justify-center">
                  <h1 className="font-lettertype bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text text-transparent text-9xl">60</h1>
                </div>
                <div className="count-down-text-card bg-blend-screen rounded-full text-2xl w-[170px]">
                <h1 className="bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text text-transparent font-bold text-center">Hours</h1>
                </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
