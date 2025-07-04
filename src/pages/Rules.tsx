import { useState, useRef, useEffect } from "react";
import rules from "../data/rules";

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

          {/* Custom Dropdown */}
          <div className="w-[80%] max-w-3xl mt-8 relative" ref={dropdownRef}>
            <button
              className="w-full bg-[#A2BFE6] border-4 border-[#F7E7B6] rounded-full px-8 py-2 text-white text-2xl font-serif mb-4 flex justify-between items-center transition-all duration-300"
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              <span>
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
                  className={`px-8 py-2 text-white text-2xl font-serif cursor-pointer hover:bg-[#8ea7d6] transition`}
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
          <div className="rules-card bg-blend-screen rounded-xl min-w-[50%] min-h-[30rem] p-4 flex items-start justify-center">
            <div className="font-roboto text-[#AB6528] text-start text-2xl max-w-3xl max-h-[30rem] overflow-auto w-full">
              {selectedData?.description.map((desc, idx) => (
                <div key={`${selectedData.id}-${idx}`} className="mb-4">
                  {desc.heading ? (
                    // When heading exists: heading gets decimal numbering, details get lower-alpha
                    <ol className="list-decimal ml-6">
                      <li>
                        <div
                          className="font-bold mb-2"
                          dangerouslySetInnerHTML={{ __html: desc.heading }}
                        />
                        <ol className="list-[lower-alpha] ml-6">
                          {desc.details.map((detail, i) => (
                            <li
                              key={i}
                              dangerouslySetInnerHTML={{ __html: detail }}
                            />
                          ))}
                        </ol>
                      </li>
                    </ol>
                  ) : (
                    // When no heading: details get decimal numbering
                    <ol className="list-decimal ml-6">
                      {desc.details.map((detail, i) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{ __html: detail }}
                        />
                      ))}
                    </ol>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
