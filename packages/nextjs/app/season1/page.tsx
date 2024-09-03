import { Loader } from "~~/components/layout/Loader";

const Season1 = () => {
  return (
    <div className="flex flex-col gap-y-1">
      <p>Hello</p>
      <div className="flex flex-row justify-center">
        <Loader />
      </div>
    </div>
  );
};

export default Season1;
