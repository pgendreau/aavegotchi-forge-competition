import { PropsWithChildren } from "react";

export const Ttable = (props: PropsWithChildren) => {
  return <table className="text-2xl w-full">{props.children}</table>;
};
