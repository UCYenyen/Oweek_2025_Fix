import "./styles.css";
import Mascots from "../../components/mascots";

export default function About() {
  return (
    <>
      <div className="relative w-screen min-h-screen bg-[#B2D5F1] bg-cover bg-[url('/elements/real-background.svg')]">
        <div className="relative w-screen h-screen">
          <img
            src="/elements/about/pillar-left.svg"
            className="w-auto h-full absolute -left-[0vh] -top-0"
            alt="pillar-left"
          />
          <img
            src="/elements/about/pillar-right.svg"
            className="w-auto h-full absolute right-[0vh] -top-0"
            alt="pillar-right"
          />

          <img
            src="/elements/about/suntop.svg"
            className="absolute -bottom-[4vh] w-full h-auto left-1/2 -translate-x-1/2"
            alt="sun"
          />
          <img
            src="/elements/about/star-circle.svg"
            className="absolute top-[5vh] w-[85%] left-1/2 -translate-x-1/2"
            alt="star-circle"
          />

          <div className="absolute top-[2vh] w-full h-full z-10 left-1/2 -translate-x-1/2">
            <img
              src="/elements/about/about-bg.svg"
              className="w-[60%] h-auto absolute left-1/2 -translate-x-1/2"
              alt="about-bg"
            />
            <div className="absolute top-[24vh] left-1/2 -translate-x-1/2 w-full flex flex-col items-center z-20">
              <h1 className="font-lettertype text-[17vh] text-center bg-gradient-to-b from-[#3F61AD] to-[#75ABDC] bg-clip-text text-transparent">
                ABOUT
              </h1>
              <p className="text-center text-[2vh] text-[#AB6528] font-roboto w-[45%] mt-3 px-4">
                Orientation Week Universitas Ciputra Surabaya merupakan wadah
                untuk mempersiapkan dan mendorong mahasiswa menjadi pribadi yang
                mandiri, pekerja keras, bertanggungjawab, menghargai, disiplin,
                aktif, dan kreatif dengan tujuan agar mahasiswa baru mampu
                menemukan jati dirinya dan siap menghadapi dunia perkuliahan.
                Orientation Week juga memegang nilai Integrity, Professionalism,
                dan Entrepreneurship (IPE) serta 7 Entrepreneurial Competencies
                yang ditanamkan dengan integrasi dalam kegiatan pembelajaran
                yang diterima oleh mahasiswa-mahasiswi.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-full ">
          <Mascots />
        </div>
      </div>
    </>
  );
}
