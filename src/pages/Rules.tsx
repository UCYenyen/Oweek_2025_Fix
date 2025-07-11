import { useState, useRef, useEffect } from "react";
import rules from "../data/rules";
import "../styles/Rules.css";

export default function Rules() {
  const datas = rules;
  const [selectedPasal, setSelectedPasal] = useState(datas[0]?.id || "");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Custom scrollbar states for rules card
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragStartScrollTop, setDragStartScrollTop] = useState(0);
  
  // Custom scrollbar states for dropdown
  const [dropdownScrollTop, setDropdownScrollTop] = useState(0);
  const [dropdownScrollHeight, setDropdownScrollHeight] = useState(0);
  const [dropdownClientHeight, setDropdownClientHeight] = useState(0);
  const [dropdownIsDragging, setDropdownIsDragging] = useState(false);
  const [dropdownDragStartY, setDropdownDragStartY] = useState(0);
  const [dropdownDragStartScrollTop, setDropdownDragStartScrollTop] = useState(0);
  
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  
  const dropdownContentRef = useRef<HTMLDivElement>(null);
  const dropdownScrollbarRef = useRef<HTMLDivElement>(null);
  const dropdownThumbRef = useRef<HTMLDivElement>(null);

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

  // Update scrollbar dimensions for rules card
  useEffect(() => {
    const updateScrollbar = () => {
      if (contentRef.current) {
        setScrollHeight(contentRef.current.scrollHeight);
        setClientHeight(contentRef.current.clientHeight);
        setScrollTop(contentRef.current.scrollTop);
      }
    };

    const content = contentRef.current;
    if (content) {
      updateScrollbar();
      content.addEventListener('scroll', updateScrollbar);
      window.addEventListener('resize', updateScrollbar);
      
      return () => {
        content.removeEventListener('scroll', updateScrollbar);
        window.removeEventListener('resize', updateScrollbar);
      };
    }
  }, [selectedData]);

  // Update scrollbar dimensions for dropdown
  useEffect(() => {
    const updateDropdownScrollbar = () => {
      if (dropdownContentRef.current) {
        setDropdownScrollHeight(dropdownContentRef.current.scrollHeight);
        setDropdownClientHeight(dropdownContentRef.current.clientHeight);
        setDropdownScrollTop(dropdownContentRef.current.scrollTop);
      }
    };

    const dropdownContent = dropdownContentRef.current;
    if (dropdownContent && open) {
      updateDropdownScrollbar();
      dropdownContent.addEventListener('scroll', updateDropdownScrollbar);
      window.addEventListener('resize', updateDropdownScrollbar);
      
      return () => {
        dropdownContent.removeEventListener('scroll', updateDropdownScrollbar);
        window.removeEventListener('resize', updateDropdownScrollbar);
      };
    }
  }, [open, datas]);

  // Calculate thumb height and position for rules card
  const thumbHeight = Math.max((clientHeight / scrollHeight) * clientHeight, 20);
  const thumbTop = (scrollTop / (scrollHeight - clientHeight)) * (clientHeight - thumbHeight);
  const showScrollbar = scrollHeight > clientHeight;

  // Calculate thumb height and position for dropdown
  const dropdownThumbHeight = Math.max((dropdownClientHeight / dropdownScrollHeight) * dropdownClientHeight, 20);
  const dropdownThumbTop = (dropdownScrollTop / (dropdownScrollHeight - dropdownClientHeight)) * (dropdownClientHeight - dropdownThumbHeight);
  const showDropdownScrollbar = dropdownScrollHeight > dropdownClientHeight;

  // Handle thumb drag for rules card
  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStartY(e.clientY);
    setDragStartScrollTop(scrollTop);
  };

  // Handle thumb drag for dropdown
  const handleDropdownThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropdownIsDragging(true);
    setDropdownDragStartY(e.clientY);
    setDropdownDragStartScrollTop(dropdownScrollTop);
  };

  // Handle mouse move during drag for rules card
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !contentRef.current) return;
      
      const deltaY = e.clientY - dragStartY;
      const deltaScrollTop = (deltaY / (clientHeight - thumbHeight)) * (scrollHeight - clientHeight);
      const newScrollTop = Math.max(0, Math.min(scrollHeight - clientHeight, dragStartScrollTop + deltaScrollTop));
      
      contentRef.current.scrollTop = newScrollTop;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStartY, dragStartScrollTop, clientHeight, thumbHeight, scrollHeight]);

  // Handle mouse move during drag for dropdown
  useEffect(() => {
    const handleDropdownMouseMove = (e: MouseEvent) => {
      if (!dropdownIsDragging || !dropdownContentRef.current) return;
      
      const deltaY = e.clientY - dropdownDragStartY;
      const deltaScrollTop = (deltaY / (dropdownClientHeight - dropdownThumbHeight)) * (dropdownScrollHeight - dropdownClientHeight);
      const newScrollTop = Math.max(0, Math.min(dropdownScrollHeight - dropdownClientHeight, dropdownDragStartScrollTop + deltaScrollTop));
      
      dropdownContentRef.current.scrollTop = newScrollTop;
    };

    const handleDropdownMouseUp = () => {
      setDropdownIsDragging(false);
    };

    if (dropdownIsDragging) {
      document.addEventListener('mousemove', handleDropdownMouseMove);
      document.addEventListener('mouseup', handleDropdownMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleDropdownMouseMove);
        document.removeEventListener('mouseup', handleDropdownMouseUp);
      };
    }
  }, [dropdownIsDragging, dropdownDragStartY, dropdownDragStartScrollTop, dropdownClientHeight, dropdownThumbHeight, dropdownScrollHeight]);

  // Handle track click for rules card
  const handleTrackClick = (e: React.MouseEvent) => {
    if (!contentRef.current || !scrollbarRef.current) return;
    
    const rect = scrollbarRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const clickRatio = clickY / clientHeight;
    const newScrollTop = clickRatio * (scrollHeight - clientHeight);
    
    contentRef.current.scrollTop = Math.max(0, Math.min(scrollHeight - clientHeight, newScrollTop));
  };

  // Handle track click for dropdown
  const handleDropdownTrackClick = (e: React.MouseEvent) => {
    if (!dropdownContentRef.current || !dropdownScrollbarRef.current) return;
    
    const rect = dropdownScrollbarRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const clickRatio = clickY / dropdownClientHeight;
    const newScrollTop = clickRatio * (dropdownScrollHeight - dropdownClientHeight);
    
    dropdownContentRef.current.scrollTop = Math.max(0, Math.min(dropdownScrollHeight - dropdownClientHeight, newScrollTop));
  };

  return (
    <div className='relative w-screen bg-[#B2D5F1] bg-cover bg-[url("/elements/real-background.svg")]'>
      <div className="relative w-screen flex items-center justify-center">
        <img src="/elements/section/sun-rules.svg" loading="lazy" className="sun-rules w-full absolute -bottom-1/2" alt="" />
        <img
          src="/elements/section/pillar-left.svg"
          className="pillar-left w-[20%] absolute left-0 -top-2"
          alt=""
        />
        <img
          src="/elements/section/pillar-right.svg"
          className="pillar-right w-[20%] absolute right-0 -top-2"
          alt=""
        />

        <div className="relative w-full min-h-full flex flex-col items-center justify-start pb-10">
          <img src="/elements/section/rules-title.svg" className="rules-logo mt-[-8%] z-[100]" alt="" />

          {/* Custom Dropdown */}
          <div className="dropdown w-[80%] max-w-3xl mt-8 relative" ref={dropdownRef}>
            <button
              className={`w-full overflow-hidden h-full border-4 border-[#F7E7B6] rounded-full px-8 text-white text-2xl font-serif flex justify-between items-center transition-all duration-300
              ${open 
                ? "bg-gradient-to-r from-[#75ABDC] to-[#B2D5F1]" 
                : "bg-gradient-to-r from-[#FFF0B8] to-[#FFD054]"
              }
              `}
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              <p
                className={`font-roboto dropdown-text flex-1 overflow-hidden whitespace-nowrap text-ellipsis font-bold text-center
                  ${open
                    ? "text-[#FFF0B8]"
                    : "text-transparent bg-gradient-to-b from-[#F5AC01] to-[#C03A00] bg-clip-text"
                  }
                `}
              >
                {selectedData?.pasal} ({selectedData?.category})
              </p>
              <svg
                className={`ml-2 w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`}
                fill="none"
                stroke={open ? "#FFF0B8" : "url(#dropdown-arrow-gradient)"}
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id="dropdown-arrow-gradient" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5AC01" />
                    <stop offset="1" stopColor="#C03A00" />
                  </linearGradient>
                </defs>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`flex flex-col sm:gap-2 absolute left-0 w-full z-10 bg-[#A2BFE6] border-4 border-[#F7E7B6] rounded-2xl mt-2 overflow-hidden shadow-lg transition-all duration-300 origin-top
                ${open ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-75 opacity-0 pointer-events-none"}
              `}
              style={{ transitionProperty: "transform, opacity" }}
            >
              {/* Scrollable container with custom scrollbar */}
              <div className="relative flex">
                <div 
                  ref={dropdownContentRef}
                  className="max-h-60 overflow-auto flex-1 pr-4"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <style>{`
                    div::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  {datas.map((data) => (
                    <div
                      key={data.id}
                      className={`p-1 sm:p-2 text-center text font-roboto text-[#FFF0B8] text-2xl cursor-pointer hover:bg-[#8ea7d6] transition`}
                      onClick={() => {
                        setSelectedPasal(data.id);
                        setOpen(false);
                      }}
                    >
                      {data.pasal} ({data.category})
                    </div>
                  ))}
                </div>

                {/* Custom Dropdown Scrollbar */}
                {showDropdownScrollbar && (
                  <div 
                    ref={dropdownScrollbarRef}
                    className="absolute right-2 top-2 bottom-2 w-2 bg-[#8ea7d6] rounded-full cursor-pointer z-10"
                    onClick={handleDropdownTrackClick}
                  >
                    {/* Dropdown Scrollbar Thumb */}
                    <div
                      ref={dropdownThumbRef}
                      className={`absolute left-0 w-full bg-[#ead99e] rounded-full cursor-grab transition-colors duration-200 ${
                        dropdownIsDragging ? 'bg-[#ead99e] cursor-grabbing' : 'hover:bg-[#ead99e]'
                      }`}
                      style={{
                        height: `${dropdownThumbHeight}px`,
                        top: `${dropdownThumbTop}px`,
                      }}
                      onMouseDown={handleDropdownThumbMouseDown}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Rules Card */}
          <div className="rules-card bg-blend-screen rounded-3xl w-[80%] min-h-[35rem] max-h-[40rem] p-4 flex items-start justify-center overflow-hidden">
            <div className="relative w-full flex">
              {/* Content */}
              <div 
                ref={contentRef}
                className="font-roboto text-description text-[#AB6528] text-start text-2xl max-h-[36rem] p-4 overflow-auto flex-1 pr-6"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <style>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {selectedData?.description.some((desc) => desc.heading) ? (
                  <ol className="list-decimal ml-4 sm:ml-10 flex flex-col gap-4">
                    {selectedData.description.map((desc, idx) =>
                      desc.heading ? (
                        <li key={`${selectedData.id}-heading-${idx}`}>
                          <div
                            className="font-bold"
                            dangerouslySetInnerHTML={{ __html: desc.heading }}
                          />
                          {/* Only render the sublist if there are non-empty details */}
                          {desc.details && desc.details.length > 0 && desc.details.some(detail => detail.trim() !== "") && (
                            <ol className="list-[lower-alpha] ml-6 flex flex-col gap-1">
                              {desc.details
                                .filter(detail => detail.trim() !== "") // Filter out empty details
                                .map((detail, i) => (
                                  <li
                                    key={i}
                                    dangerouslySetInnerHTML={{ __html: detail }}
                                    className="text"
                                  />
                                ))}
                            </ol>
                          )}
                          {/* Display notes if they exist and are not empty */}
                          {desc.notes && desc.notes.trim() !== "" && (
                            <div className="mt-2 flex flex-col gap-1">
                              <div dangerouslySetInnerHTML={{ __html: desc.notes }} className="text"/>
                            </div>
                          )}
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
                    <ol className="list-decimal ml-6 flex flex-col gap-2" key={`${selectedData.id}-noheading-${idx}`}>
                      {desc.details.map((detail, i) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{ __html: detail }}
                          className="text"
                        />
                      ))}
                      {/* Display notes for non-heading sections */}
                      {desc.notes && desc.notes.trim() !== "" && (
                        <div className="mt-2 flex flex-col gap-1">
                          <div dangerouslySetInnerHTML={{ __html: desc.notes }} className="text"/>
                        </div>
                      )}
                    </ol>
                  ))
                )}
              </div>

              {/* Custom Scrollbar */}
              {showScrollbar && (
                <div 
                  ref={scrollbarRef}
                  className="absolute overflow-hidden right-2 top-4 bottom-4 w-2 sm:w-3 bg-[#8ea7d6] rounded-full cursor-pointer z-10"
                  onClick={handleTrackClick}
                >
                  {/* Scrollbar Thumb */}
                  <div
                    ref={thumbRef}
                    className={`absolute left-0 w-full bg-[#e9cc6e] rounded-full cursor-grab transition-colors duration-200 ${
                      isDragging ? 'bg-[#e9cc6e] cursor-grabbing' : 'hover:bg-[#e9cc6e]'
                    }`}
                    style={{
                      height: `${thumbHeight}px`,
                      top: `${thumbTop}px`,
                    }}
                    onMouseDown={handleThumbMouseDown}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
