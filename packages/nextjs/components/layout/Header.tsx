import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex flex-row gap-x-10 items-center pb-10">
      <div className="w-1/4">
        <Image src="/images/forge-competition-header.png" width={200} height={200} alt="" />
      </div>
      <div className="w-3/4 items-center">
        <h1 className="text-3xl md:text-6xl">Forge Leaderboard</h1>
      </div>
    </div>
  );
};
