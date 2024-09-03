import { PropsWithChildren } from "react";
import classnames from "classnames";

export const Ttd = (props: PropsWithChildren<{ className?: string }>) => {
  return <td className={classnames("px-4 md:px-8 py-1 text-center", props.className)}>{props.children}</td>;
};
