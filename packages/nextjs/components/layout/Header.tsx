import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex flex-row gap-x-10 items-center pb-5">
      <div className="w-1/4">
        <Image src="/images/header.png" width={300} height={300} alt="" />
      </div>
      <div className="w-3/4 text-center">
        <h1 className="text-3xl md:text-6xl lg:text-7xl">Forge Leaderboard</h1>
      </div>
    </div>
  );
};
