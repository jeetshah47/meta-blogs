"use client";

import { useState } from "react";
import ElementSection from "../components/elements/element-section";
import Input from "../components/elements/input";

const NewBlog = () => {
  const [elements, setElements] = useState<string[]>([]);

  const mapElements: { [index: string]: React.ReactNode } = {
    "text-label": <Input />,
    "text-para": <textarea />,
    "media-image": (
      <picture>
        <img alt="sd" src="/imgs/dummer.png" />
      </picture>
    ),
    "section-code": <div></div>
  };

  const generateElement = (element: string, index: number) => {
    return (
      <div key={index}>
        {mapElements[element]}
      </div>
    )
  }

  const handleAddElement = (name: string) => {
    const clone = [...elements];
    clone.push(name);
    setElements([...clone]);
  };

  return (
    <div className="flex gap-4 h-full px-6">
      <div className="w-1/5 flex-auto border-r dark:border-dark-secondary flex flex-col relative">
        <div className="relative flex-auto w-full">
          <p className="font-bold text-2xl">Elements</p>
          <div className="overflow-auto h-full absolute w-full">
            <ElementSection addElement={handleAddElement} />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        {!elements.length && (
          <p className="text-secondary font-semibold text-3xl">
            Add Elements From Section{" "}
          </p>
        )}
        {elements.map((element, index) => generateElement(element, index))}
      </div>
    </div>
  );
};

export default NewBlog;
