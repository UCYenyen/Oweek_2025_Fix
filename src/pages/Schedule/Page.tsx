export default function Schedule() {
  return (
    // Set a relative container with full screen height
    <div className="relative w-screen h-screen bg-[#B2D5F1] bg-cover bg-[url('/elements/real-background.svg')]">
      {/* Massive pillar is the background (z-0) */}
      <img
        src="/elements/schedule/title.svg"
        className="absolute w-[50%] h-auto -top-[3vh] left-1/2 -translate-x-1/2 z-20"
        alt="schedule-title"
      />
      <img
        src="/elements/schedule/star-circle.svg"
        className="absolute w-[80%] h-auto -top-[3vh] left-1/2 -translate-x-1/2 z-20"
        alt="star-circle"
      />
      <div className="relative w-screen h-[125vh] flex items-center justify-center">
        <img
          src="/elements/schedule/massive-pillar.svg"
          className="absolute w-full h-full top-0 left-0 z-0"
          alt="pillar-massive"
        />
        {/* Side pillars are in the foreground (z-10) */}
        <img
          src="/elements/schedule/pillar-left.svg"
          className="absolute w-[10%] h-[85%] top-0 left-0 z-0"
          alt="pillar-left"
        />
        <img
          src="/elements/schedule/pillar-right.svg"
          className="absolute w-[10%] h-[85%] top-0 right-0 z-0"
          alt="pillar-right"
        />

        <img
          src="/elements/schedule/schedule-bg.svg"
          className="absolute w-full h-[85%] top-[5vh] z-10"
          alt="schedule-bg"
        />
      </div>
    </div>
  );
}
