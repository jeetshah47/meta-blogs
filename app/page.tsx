import Banner from "./base/section/home/banner/banner";
import Post from "./base/section/home/post/post";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/5">
      <Banner />
      <div className="h-20" />
      <Post />
      </div>
    </div>
  );
}
