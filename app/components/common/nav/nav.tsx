import Link from "next/link";
import Toggle from "../../buttons/toggle";

const NavBar = () => {
  return (
    <div className="flex flex-1 justify-between items-center max-sm:hidden">
      <div>
        <p className="font-bold text-2xl">Meta Blogs</p>
      </div>
      <div className="flex gap-8">
        <Link href={"/"}>Home</Link>
        <Link href={"/blogs"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className="flex items-center">
        <input
          placeholder="Search"
          className=" bg-primary outline-none py-2 px-4 rounded"
        />
        <Toggle />
      </div>
    </div>
  );
};

export default NavBar;
