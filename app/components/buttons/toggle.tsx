"use client"
import { useState } from "react";

const Toggle = () => {
  const [darked, setDarked] = useState(false)
 
  return (
    <div className={`bg-secondary w-14 rounded-full p-0.5 flex duration-300 ${!darked ? "justify-start" : "justify-end"}`}>
      <picture>
        <img onClick={() => setDarked(!darked)} className="cursor-pointer" alt="sun" src="/icons/sunny.svg" />
      </picture>
    </div>
  );
};

export default Toggle;
