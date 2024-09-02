import { PropsWithChildren } from "react";

export const Ttd = (props: PropsWithChildren) => {
  return <td className="px-8 py-1 text-center">{props.children}</td>;
};
