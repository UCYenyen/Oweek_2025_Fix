import "./../styles/popUpPanel.css";

type PopUpPanelProps = {
  isHidden: boolean;
  setIsHidden: (hidden: boolean) => void;
  isDressCode: boolean;
  setIsDressCode: (dressCode: boolean) => void;
};

export default function PopUpPanel({
  isHidden,
  setIsHidden,
  isDressCode,
  setIsDressCode,
}: PopUpPanelProps) {
  if (isHidden) return null;

  const handleClose = () => {
    setIsHidden(true);
    setIsDressCode(false);
  };

  return (
    <div className="main-container fixed inset-0 flex items-center justify-center z-10 bg-[#715c20]/25">
      {isDressCode ? (
        <div className="wrapper-container relative border-y-[#FFE18B] border-x-[#FFD462] border-8 flex flex-col justify-between z-20 bg-gradient-to-b from-[#FFEFB9] to-[#FFFFFE] rounded-lg min-w-[45vw] max-w-[45vw] min-h-auto">
            <img src="/elements/schedule/border.svg" className="w-full h-auto" alt="" />
            <div className="content-wrapper p-8 w-full h-full flex gap-4 flex-col justify-start items-center">
                <h2 className="content-category-text text-6xl text-center font-bold font-lettertype text-transparent bg-gradient-to-r from-[#3F61AD] to-[#75ABDC] bg-clip-text">
                    DRESSCODE
                </h2>
                <div className="flex flex-col items-center justify-center">
                  <p className="content-title text-2xl text-[#C44401] font-bold font-roboto text-center">INDEPENDENCE DAY</p>
                  <ul className="content-description-wrapper flex gap-2 text-[#C44401] text-center">
                      <li>Kemeja Putih</li>
                      <li>Celana Panjang Hitam</li>
                      <li>Sepatu Formal</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="dont-wrapper flex flex-col gap-0.5 items-center justify-center">
                    <p className="dont-text text-2xl text-[#C44401] text-center font-bold font-roboto">DON'T</p>
                    <img src="/elements/schedule/blue-rectangle.png" className="dont-image bg-[#75ABDC] w-[25vw] h-auto"/>
                  </div>
                  <div className="do-wrapper flex flex-col gap-0.5 items-center justify-center">
                   <p className="do-text text-2xl text-[#C44401] text-center font-bold font-roboto">DO</p>
                  <img src="/elements/schedule/blue-rectangle.png" className="do-image bg-[#75ABDC] w-[25vw] h-auto"/>
                </div>
                </div>
            </div>
          <img src="/elements/schedule/border.svg" className="w-full h-auto" alt="" />
            <button
            className="button-pop-up group bg-gradient-to-r from-[#EEAA2A] via-[#F2B02B] to-[#FDCB4E] rounded-full absolute -top-[1.5rem] -right-[2.5rem] min-w-[5rem] min-h-[5rem] z-[700] transition-transform duration-300 hover:scale-105"
            onClick={handleClose}
            >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] bg-gradient-to-r from-[#FFF0BC] via-[#FFF7DC] to-[#FFFEFA] rounded-full shadow-lg relative flex justify-center items-center">
                <div className="relative rounded-full w-full h-full flex justify-center items-center">
                  <div className="absolute w-[80%] rotate-45 h-2 bg-gradient-to-r from-[#3D65BB] via-[#69B2FD] to-[#A9D1F3] rounded-full transition-colors duration-300 group-hover:from-[#C44401] group-hover:via-[#C44401] group-hover:to-[#C44401]"></div>
                  <div className="absolute w-[80%] -rotate-45 h-2 bg-gradient-to-r from-[#3D65BB] via-[#69B2FD] to-[#A9D1F3] rounded-full transition-colors duration-300 group-hover:from-[#C44401] group-hover:via-[#C44401] group-hover:to-[#C44401]"></div>
                </div>
              </div>
            </div>
            </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
          <h2 className="text-xl font-bold mb-4">Ketentuan</h2>
          <p className="mb-4">Please adhere to the following rules:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Be punctual for all events.</li>
            <li>Respect the venue and fellow participants.</li>
            <li>Follow the instructions of the organizers.</li>
          </ul>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
