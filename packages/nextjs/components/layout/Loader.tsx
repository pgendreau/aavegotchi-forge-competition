import { ArrowPathIcon } from "@heroicons/react/24/outline";

export const Loader = () => {
  return (
    <div className="flex flex-row gap-x-2 loader w-36 items-center py-4">
      <ArrowPathIcon className="w-8 h-8 animate-spin" />
      <div>Loading</div>
    </div>
  );
};
