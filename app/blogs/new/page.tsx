"use client";
import Cover from "../components/cover/Cover";
import TitleInput from "../components/Input/title-input";

const NewBlog = () => {
  return (
    <div className="flex flex-col items-center">
      <Cover />
      <TitleInput />
    </div>
  );
};

export default NewBlog;
