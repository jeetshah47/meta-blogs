import Banner from "./base/section/home/banner/banner";
import Post from "./base/section/home/post/post";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="h-20" />
      <Post />
    </div>
  );
}
