export default function Schedule() {
  return(
    <div className="relative z-[1000] pb-10 flex flex-col items-center justify-center gap-4">
      {/* container untuk schedule card dan button */}
      <div className="flex items-center justify-center gap-4">
        <button className="bg-black rounded-full w-[50px] h-[50px]"></button>
        <div className="schedule-card rounded-xl">

        </div>
        <button className="bg-black rounded-full w-[50px] h-[50px]"></button>
      </div>

      {/* Button dresscode bawah penugasan dan ketentuan*/}
      <div className="flex items-center justify-between w-[78%] gap-4">
        <button>PENUGASAN</button>
        <button className="bg-black rounded-full w-[50px] h-[50px]"></button>
        <button>KETENTUAN</button>
      </div>
    </div>
  )
}