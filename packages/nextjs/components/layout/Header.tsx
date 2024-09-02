import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex flex-row gap-x-10 items-center pb-10">
      <Image src="/images/forge-competition-header.png" width={200} height={200} alt="" />
      <div className="items-center">
        <h1 className="text-6xl">Forge Leaderboard</h1>
      </div>
    </div>
  );
};
