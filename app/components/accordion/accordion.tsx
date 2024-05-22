import { useRef, useState } from "react";

type AccordionProps = {
  children: React.ReactNode;
  title: string;
  active: boolean;
  onClick: () => void;
};

const Accordion = ({ title, children, active, onClick }: AccordionProps) => {
  const contentRef = useRef(null);
  return (
    <div className="border-gray-200 py-2 drop-shadow">
      <button
        className="flex justify-between w-full p-2 text-left text-gray-800 bg-white 	 dark:bg-dark-secondary  focus:outline-none dark:text-dark-primary"
        onClick={onClick}
      >
        <span>{title}</span>
        <span>{active ? "-" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          active ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          maxHeight: active ? "400px" : "0px",
        }}
      >
        {active && <div className="p-2 text-gray-700 border">{children}</div>}
      </div>
    </div>
  );
};

export default Accordion;
