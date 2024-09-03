import { PropsWithChildren } from "react";
import classnames from "classnames";

export const Tth = (props: PropsWithChildren<{ className?: string }>) => {
  return <th className={classnames("border border-slate-600 px-4 md:px-8 py-1", props.className)}>{props.children}</th>;
};
