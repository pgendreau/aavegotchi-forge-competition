import { PropsWithChildren } from "react";

export const Tth = (props: PropsWithChildren) => {
  return <th className="border border-slate-600 px-8 py-1">{props.children}</th>;
};
