export default function Schedule() {
  return (
    <div className="relative w-full flex items-center justify-center flex-col pt-[2vh]">
      <div className="schedule-card relative rounded-3xl p-6 sm:p-8 flex items-center justify-center w-[90%] h-auto">
        {/* Schedule Content */}
        <div className="flex flex-col items-center text-center text-[#AB6528] font-roboto space-y-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">PRA-OWEEK</h2>
            <p className="text-lg sm:text-xl">16 Agustus 2025</p>
            <p className="text-lg sm:text-xl">Zoom Meeting</p>
          </div>
          <div className="text-xl sm:text-2xl font-bold">
            <p>Kloter 1 (7:15 - 10:00)</p>
            <p>Kloter 2 (10:45 - 13:00)</p>
          </div>
          {/* Bottom Buttons */}
        </div>

        {/* Left Arrow Button */}
        <button className="button-left p-2 absolute -left-20">
          <img src="/elements/schedule/buttonleft.svg" alt="Previous" />
        </button>

        
        {/* Right Arrow Button */}
        <button className="button-right p-2 absolute -right-20">
          <img src="/elements/schedule/buttonright.svg" alt="Next" />
        </button>
        
      </div>
      <div className="flex items-center justify-center gap-4 pt-4">
            <button className="button-schedule px-6 py-2 text-lg rounded-full">
              PENUGASAN
            </button>
            <button className="p-2 rounded-full">
              <img
                src="/elements/schedule/shirt.svg"
                alt="Ketentuan Pakaian"
                width={32}
                height={32}
                className="h-full w-full"
              />
            </button>
            <button className="button-schedule px-6 py-2 text-lg rounded-full">
              KETENTUAN
            </button>
          </div>
    </div>
  );
}
