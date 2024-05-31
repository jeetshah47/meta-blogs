"use client";

import Link from "next/link";
import Toggle from "../../buttons/toggle";
import Avatar from "../../avatar/avatar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { URLSearchParams } from "url";

const NavBar = () => {
  const path = usePathname();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (path.includes("login")) setShow(false);
    else setShow(true);
  }, [path]);

  return (
    <div className={`flex-initial  w-3/5 py-4 ${!show && "hidden"}`}>
      <div className={`flex flex-1 justify-between items-center max-sm:hidden`}>
        <div>
          <p className="font-bold text-2xl">Meta Blogs</p>
        </div>
        <div className="flex flex-1 justify-center items-center gap-8">
          <Link href={"/"}>Home</Link>
          <Link href={"/blogs/1"}>Blog</Link>
          <Link href={"/blogs/new"} className="rounded bg-blue text-white p-2">
            Write
          </Link>
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
    </div>
  );
};

export default NavBar;
