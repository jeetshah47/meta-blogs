"use client";

import ElementSection from "../components/elements/element-section";

const NewBlog = () => {
  return (
    <div className="flex gap-4 h-full px-6">
      <div className="border-r border-l w-1/5 flex-auto  flex flex-col relative">
        <div className="relative flex-auto w-full">
        <p className="font-bold text-2xl">Meta Elements</p>
        <div className="overflow-auto h-full absolute w-full">
          <ElementSection />
        </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-secondary font-semibold text-3xl">Drag n Drop Elements Here </p>
      </div>
    </div>
  );
};

export default NewBlog;
