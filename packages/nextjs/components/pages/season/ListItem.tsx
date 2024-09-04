import { useState } from "react";
import { Rewards } from "./Rewards";
import classNames from "classnames";
import { GotchiEntry } from "~~/types/gotchiEntry";

export const ListItem = (props: { item: GotchiEntry; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li key={props.index} className="mx-4 text-xl odd:bg-slate-800">
      <div className="border-b-2 border-b-frame pb-2">
        <div className="grid md:grid-cols-4 grid-cols-3 items-center place-items-center">
          <div className="px-1">Rank {props.index + 1}</div>
          <div>{props.item.name}</div>
          <div>{props.item.skillPoints} Points</div>
          <div className="col-span-3 md:col-span-1 pt-1">
            <button onClick={() => setIsOpen(!isOpen)} className="mybtn">
              {isOpen ? "Hide Rewards" : "Show rewards"}
            </button>
          </div>
        </div>
        <div className={classNames(isOpen ? "" : "hidden", "px-4")}>
          <Rewards rewards={props.item.rewards} />
        </div>
      </div>
    </li>
  );
};
