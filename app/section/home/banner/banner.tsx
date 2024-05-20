import Card from "@/app/components/card/card";

const Banner = () => {
  return (
    <div className="w-full relative">
      <picture>
        <img src="/imgs/banner.png" alt="banner" />
      </picture>
      <div className="absolute bottom-[-40px] left-10 drop-shadow-lg w-[500px]">
        <Card padding="p-10">
          <div >
            <div className="bg-blue px-2.5 py-1 w-fit rounded text-white text-sm">
              <p>Technology</p>
            </div>
            <div>
              <p className="font-bold text-3xl leading-10">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Banner;
