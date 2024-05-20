import Banner from "./section/home/banner/banner";
import Post from "./section/home/post/post";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="h-20" />
      <Post />
    </div>
  );
}
