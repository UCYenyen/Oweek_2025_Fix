export default function Rules() {
  return (
    <div className='relative w-screen bg-[#B2D5F1] bg-cover bg-[url("/elements/real-background.svg")] overflow-hidden'>
      <div className="relative w-screen min-h-[95vh] flex items-center justify-center">
        <img src="/elements/section/sun-rules.svg" className="w-full absolute -bottom-1/3" alt="" />
        <img
          src="/elements/section/pillar-left.svg"
          className="w-[25%] absolute left-0 -top-2"
          alt=""
          loading="lazy"
        />
        <img
          src="/elements/section/pillar-right.svg"
          className="w-[25%] absolute right-0 -top-2"
          alt=""
          loading="lazy"
        />

        <div className="relative w-full min-h-full flex flex-col items-center justify-center">
          <img src="/elements/section/rules-title.svg" alt="" />
          
          <div className="w-[80%] max-w-3xl mt-8">
            <details className="group" style={{ position: "relative" }}>
              <summary className="flex items-center justify-between cursor-pointer bg-[#A2BFE6] border-4 border-[#F7E7B6] rounded-full px-8 py-2 text-white text-3xl font-serif transition-colors duration-200 group-open:bg-[#B2D5F1]">
                Pasal 1 (Ruang Lingkup)
                <span className="ml-4 transition-transform duration-200 group-open:rotate-180">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              {/* Absolutely position the dropdown content */}
              <div
                className="bg-[#B2D5F1]/80 border-t-2 border-[#F7E7B6] rounded-b-2xl px-8 py-4 text-lg text-white font-serif"
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  zIndex: 10,
                  width: "100%",
                  top: "100%",
                }}
              >
                {/* Dropdown content goes here */}
                Ini adalah isi dari Pasal 1 (Ruang Lingkup).
              </div>
            </details>
            {/* Reserve space to prevent layout shift */}
            <div className="invisible pointer-events-none bg-[#B2D5F1]/80 border-t-2 border-[#F7E7B6] rounded-b-2xl px-8 py-4 text-lg font-serif">
              Ini adalah isi dari Pasal 1 (Ruang Lingkup).
            </div>
          </div>
          <div className="rules-card bg-blend-screen rounded-xl min-w-[50%] min-h-[30rem] p-4 flex items-start justify-center">
            <h1 className="font-roboto text-[#AB6528] text-start text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ratione!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
