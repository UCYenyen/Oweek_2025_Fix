import "./App.css";
function App() {
  return (
    <div className='relative w-screen bg-[#B2D5F1] bg-cover bg-[url("/elements/real-background.svg")] overflow-hidden'>
      <div className="relative w-screen h-screen flex items-center justify-center">
        <img src="/elements/section/pillar-left.svg" className="w-[20%] absolute left-0 -top-1" alt="" />
        <img src="/elements/section/pillar-right.svg" className="w-[20%] absolute right-0 -top-1" alt="" />
        <div className="relative w-full h-1/2 flex items-center justify-center">
          <img src="/elements/section/building-center-home-page.svg" className="top-0 w-[50%] absolute z-0" alt="" />
          <img src="/elements/icons/welcoming-logo.svg" className="absolute -top-40 z-10" alt="" />
          <div className="z-10 w-full h-full grid grid-cols-4 gap-4">
          {/* Days */}
            <div className=" bg-white flex flex-col gap-4">
              <h1 className="font-lettertype text-9xl text-[#3F61AD]">10</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
