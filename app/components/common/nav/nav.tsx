'use client';

import Link from "next/link";
import Toggle from "../../buttons/toggle";
import Avatar from "../../avatar/avatar";

const NavBar = () => {
  
  return (
    <div className={`flex flex-1 justify-between items-center max-sm:hidden `}>
      <div>
        <p className="font-bold text-2xl">Meta Blogs</p>
      </div>
      <div className="flex flex-1 justify-center items-center gap-8">
        <Link href={"/"}>Home</Link>
        <Link href={"/blogs/1"}>Blog</Link>
        <Link href={"/blogs/new"} className="rounded bg-blue text-white p-2">Write</Link>
      </div>
      <div className="flex items-center gap-10">
        <input
          placeholder="Search"
          className=" bg-primary dark:bg-dark-secondary outline-none py-2 px-4 rounded"
        />
        <Toggle />
        <Avatar />
      </div>
    </div>
  );
};

export default NavBar;
