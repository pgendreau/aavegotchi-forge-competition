import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex flex-col gap-y-5 mb-4">
      <div className="flex flex-row gap-x-10 items-center pb-5">
        <div className="w-1/4">
          <Image src="/images/header.png" width={300} height={300} alt="" />
        </div>
        <div className="w-3/4 text-center">
          <h1 className="text-3xl md:text-6xl lg:text-7xl">Forge Leaderboard</h1>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-1">
        <p className="my-0 disclaimer">
          Disclaimer: The block number that will be used for the snapshot is going to be announced soon.
        </p>
        <p className="my-0 disclaimer">
          Keep in mind, all items in the forge queue when the snapshot happens will not be taken into account.
        </p>
      </div>
    </div>
  );
};
