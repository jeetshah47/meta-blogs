"use client";

import { useState } from "react";
import ElementSection from "../components/elements/element-section";
import Input from "../components/elements/input";
import Editor from "../components/rich-text/editor";
import { FollowerPointerCard } from "@/app/components/motion/following-pointer/following-pointer";

const NewBlog = () => {
  const [elements, setElements] = useState<string[]>([]);

  const generateElement = (element: string, index: number) => {
    const mapElements: { [index: string]: React.ReactNode } = {
      "text-label": <Editor />,
      "text-para": <Editor height={"200px"} />,
      "media-image": (
        <picture>
          <img className="border w-full" alt="sd" src="/imgs/dummer.png" />
        </picture>
      ),
      "section-code": <div></div>,
    };

    return <div key={index}>{mapElements[element]}</div>;
  };

  const handleAddElement = (name: string) => {
    const clone = [...elements];
    clone.push(name);
    setElements([...clone]);
  };
  // {!elements.length && (
  //   <p className="text-secondary font-semibold text-2xl text-center">
  //     Add Elements From Section{" "}
  //   </p>
  // )}
  return (
    <div className="flex gap-4 flex-auto px-6 ">
      <div className="w-1/5 flex-auto border-r dark:border-dark-secondary flex flex-col relative">
        <div className="relative flex-auto w-full">
          {/* <p className="font-bold text-2xl">Elements</p> */}
          <div className="overflow-auto h-full top-0 absolute w-full">
            <ElementSection addElement={handleAddElement} />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center ">
        <div className="w-3/5 h-full border">
          <FollowerPointerCard title="Me">
            {elements.map((element, index) => generateElement(element, index))}
          </FollowerPointerCard>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
