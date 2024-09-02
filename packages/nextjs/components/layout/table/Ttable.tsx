import { PropsWithChildren } from "react";

export const Ttable = (props: PropsWithChildren) => {
  return <table className="text-xl">{props.children}</table>;
};
