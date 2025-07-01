import "./styles.css";

export default function About() {
  return (
    <div className="relative w-screen min-h-screen bg-[#B2D5F1] bg-cover bg-[url('/elements/real-background.svg')] overflow-hidden">
      <div className="relative w-screen h-[100vh] flex flex-col items-center justify-center">
        <img
          src="/elements/about/pillar-left.svg"
          className="w-[20%] h-full absolute left-0 -top-1"
          alt="pillar-left"
        />
        <img
          src="/elements/about/pillar-right.svg"
          className="w-[20%] h-full absolute right-0 -top-1"
          alt="pillar-right"
        />

        <div className="relative w-full flex flex-col items-center justify-start pt-32 mt-10">
          <img
            src="/elements/about/about-bg.svg"
            className="absolute -top-36 w-[55%] z-10 left-1/2 -translate-x-1/2"
            alt="about-bg"
          />
          <img
            src="/elements/about/sun.svg"
            className="absolute top-28 left-1/2 -translate-x-1/2"
            alt="sun"
          />
          <img
            src="/elements/about/star-circle.svg"
            className="absolute top-48 left-1/2 -translate-x-1/2"
            alt="star-circle"
          />
          {/* <img
            src="/elements/about/cloud-top.svg"
            className="absolute top-[40vh] left-1/2 -translate-x-1/2"
            alt="cloud-top"
          /> */}

          {/* Main Content */}
          <h1 className="font-lettertype text-5xl z-20 mb-8 text-center bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text text-transparent">
            About O-Week
          </h1>
          <img
            src="/elements/about/massive-pillar.svg"
            alt="massive-pillar"
            className="w-full max-screen h-auto  mx-auto z-20"
          />
          <div className="h-32" /> 
        </div>
      </div>
    </div>
  );
}