import "./App.css";
function App() {
  return (
    <div className='relative w-screen  bg-[#B2D5F1] bg-cover bg-[url("/elements/background.svg")] overflow-hidden'>
      <div className="absolute w-screen h-screen">
        <img
          src="/elements/section/pillar-left.svg"
          className="absolute -left-16 sm:left-0 -top-1 w-[10rem] sm:w-fit z-[5]"
          alt=""
        />
        <img
          src="/elements/section/pillar-right.svg"
          className="absolute -right-16 sm:right-0 -top-1 w-[10rem] sm:w-fit z-[5]"
          alt=""
        />
        <div className="relative w-full min-h-screen flex justify-center items-start">
          <div className="mt-[10rem] relative flex justify-center items-center overflow-visible w-full h-[60rem]">
            <img
              src="/elements/icons/welcoming-logo.svg"
              className="w-[20rem] sm:w-fit top-[12.5rem] sm:top-0 absolute z-10"
              alt=""
            />
            <img
              src="/elements/section/building-center-home-page.svg"
              className="z-[2] w-[20rem] sm:w-fit top-[27.5%] sm:top-40 absolute"
              alt=""
            />
            <img src="/elements/section/sun.svg" className="scale-[0.9] sm:scale-[0.95] absolute z-[0] top-[22rem] sm:top-1/2" alt="" />
            <img src="/elements/section/stars.svg" className="absolute scale-[0.9] sm:scale-[1] z-[1] top-[22.5rem] sm:top-1/2" alt="" />
            <img
              src="/elements/section/cloud.svg"
              className="z-[6] absolute scale-[0.35] -left-1/3 bottom-[9rem] sm:scale-100 sm:-bottom-[15rem] sm:left-0"
              alt=""
            />
            <img src="/elements/section/left-yuca.svg" className="absolute scale-[0.35] sm:scale-100 z-[7] bottom-[9rem] sm:-bottom-[14rem] -left-1/3 sm:left-0" alt="" />
            <img src="/elements/section/plant-right.svg" className="absolute z-[20] scale-[0.35] sm:scale-100 bottom-[15rem] -right-[22.5%] sm:-bottom-[14rem] sm:right-0" alt="" />
            <img src="/elements/section/gladiator-chiken.svg" className="absolute scale-[0.35] sm:scale-100 z-[100] -right-[30%] bottom-[13.25rem] sm:-bottom-[17.5rem] sm:right-[5rem]" alt="" />
            <img src="/elements/section/nerd-chiken.svg" className="absolute z-[9] scale-[0.35] sm:scale-100 -right-[35%] bottom-[16.25rem] sm:-bottom-[2rem] sm:right-0" alt="" />
          </div>
        </div>
      </div>
<div className="flex w-screen h-[78vh] sm:hidden"></div>
      <div className="hidden relative sm:flex w-screen sm:min-h-[80rem] flex-col items-center justify-center">
        <div className="relative mt-[40rem] z-[15] gap-8 grid grid-cols-2 sm:grid-cols-4">
          {/* days */}
          <div className="flex flex-col gap-4">
            <div className="bg-[white]/85 border-4 border-[#75ABDC] h-[10rem] sm:h-[15rem] flex justify-center items-center p-8 rounded-2xl">
              <h1 className="font-lettertype text-[2.5rem] sm:text-[10rem] font-bold text-transparent bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text">
                00
              </h1>
            </div>
            <div className="bg-white/85 border-4 border-[#75ABDC] flex justify-center items-center p-2 rounded-2xl">
              <h1 className="text-[1rem] sm:text-2xl font-bold text-transparent bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text">
                Days
              </h1>
            </div>
          </div>
          {/* hours */}
          <div className="flex flex-col gap-4">
            <div className="bg-white/85 border-4 border-[#75ABDC] h-[10rem] sm:h-[15rem] flex justify-center items-center p-8 rounded-2xl">
              <h1 className="font-lettertype text-[2.5rem] sm:text-[10rem] font-bold text-transparent bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text">
                12
              </h1>
            </div>
            <div className="bg-white/85 border-4 border-[#75ABDC] flex justify-center items-center p-2 rounded-2xl">
              <h1 className="text-[1rem] sm:text-2xl font-bold text-transparent bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text">
                Hours
              </h1>
            </div>
          </div>
          {/* minutes */}
          <div className="flex flex-col gap-4">
            <div className="font-lettertype bg-white/85 border-4 border-[#75ABDC] h-[10rem] sm:h-[15rem] flex justify-center items-center p-8 rounded-2xl">
              <h1 className="text-[2.5rem] sm:text-[10rem] font-bold text-transparent bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text">
                23
              </h1>
            </div>
            <div className="bg-white/85 border-4 border-[#75ABDC] flex justify-center items-center p-2 rounded-2xl">
              <h1 className="text-[1rem] sm:text-2xl font-bold text-transparent bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text">
                Minutes
              </h1>
            </div>
          </div>
          {/* seconds */}
          <div className="flex flex-col gap-4">
            <div className="font-lettertype bg-white/85 border-4 border-[#75ABDC] h-[10rem] sm:h-[15rem] flex justify-center items-center p-8 rounded-2xl">
              <h1 className="text-[2.5rem] sm:text-[10rem] font-bold text-transparent bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text">
                59
              </h1>
            </div>
            <div className="bg-white/85 border-4 border-[#75ABDC] flex justify-center items-center p-2 rounded-2xl">
              <h1 className="text-[1rem] sm:text-2xl font-bold text-transparent bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text">
                Seconds
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
