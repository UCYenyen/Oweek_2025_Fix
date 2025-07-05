import { useState, useRef, useEffect } from "react";
import rules from "../data/rules";
import "../styles/Rules.css";

export default function Rules() {
  const datas = rules;
  const [selectedPasal, setSelectedPasal] = useState(datas[0]?.id || "");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedData = datas.find((data) => data.id === selectedPasal);

  return (
    <div className='relative w-screen bg-[#B2D5F1] bg-cover bg-[url("/elements/real-background.svg")]'>
      <div className="relative w-screen flex items-center justify-center">
        <img src="/elements/section/sun-rules.svg" className="sun w-full absolute -bottom-1/2" alt="" />
        <img
          src="/elements/section/pillar-left.svg"
          className="w-[20%] absolute left-0 -top-2"
          alt=""
        />
        <img
          src="/elements/section/pillar-right.svg"
          className="w-[20%] absolute right-0 -top-2"
          alt=""
        />

        <div className="relative w-full min-h-full flex flex-col items-center justify-start pb-10">
          <img src="/elements/section/rules-title.svg" className="rules-logo mt-[-8%] z-[100]" alt="" />

          {/* Custom Dropdown */}
          <div className="dropdown w-[80%] max-w-3xl mt-8 relative" ref={dropdownRef}>
            <button
              className="w-full h-full bg-[#A2BFE6] border-4 border-[#F7E7B6] rounded-full px-8 py-2 text-white text-2xl font-serif mb-4 flex justify-between items-center transition-all duration-300"
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              <span className="font-roboto text text-center w-full">
                {selectedData?.pasal} ({selectedData?.category})
              </span>
              <svg
                className={`ml-2 w-6 h-6 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`absolute left-0 w-full z-10 bg-[#A2BFE6] border-4 border-[#F7E7B6] rounded-2xl mt-2 overflow-hidden shadow-lg transition-all duration-300 origin-top
                ${open ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-75 opacity-0 pointer-events-none"}
              `}
              style={{ transitionProperty: "transform, opacity" }}
            >
              {datas.map((data) => (
                <div
                  key={data.id}
                  className={`px-8 py-2 text font-roboto text-white text-2xl cursor-pointer hover:bg-[#8ea7d6] transition`}
                  onClick={() => {
                    setSelectedPasal(data.id);
                    setOpen(false);
                  }}
                >
                  {data.pasal} ({data.category})
                </div>
              ))}
            </div>
          </div>

          {/* Rules Card */}
          <div className="rules-card bg-blend-screen rounded-3xl min-w-[60%] min-h-[35rem] p-4 flex items-start justify-center">
            <div className="font-roboto text-description text-[#AB6528] text-start text-2xl max-w-[60rem] max-h-[30rem] overflow-auto w-full">
              {selectedData?.description.some((desc) => desc.heading) ? (
                <ol className="list-decimal ml-6">
                  {selectedData.description.map((desc, idx) =>
                    desc.heading ? (
                      <li key={`${selectedData.id}-heading-${idx}`}>
                        <div
                          className="font-bold mb-2"
                          dangerouslySetInnerHTML={{ __html: desc.heading }}
                        />
                        <ol className="list-[lower-alpha] ml-6">
                          {desc.details.map((detail, i) => (
                            <li
                              key={i}
                              dangerouslySetInnerHTML={{ __html: detail }}
                              className="text"
                            />
                          ))}
                        </ol>
                      </li>
                    ) : (
                      desc.details.map((detail, i) => (
                        <li
                          key={`${selectedData.id}-detail-${idx}-${i}`}
                          dangerouslySetInnerHTML={{ __html: detail }}
                          className="text"
                        />
                      ))
                    )
                  )}
                </ol>
              ) : (
                selectedData?.description.map((desc, idx) => (
                  <ol className="list-decimal ml-6" key={`${selectedData.id}-noheading-${idx}`}>
                    {desc.details.map((detail, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: detail }}
                        className="text"
                      />
                    ))}
                  </ol>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
