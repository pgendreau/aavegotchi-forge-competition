import { useState } from "react";
import { Rewards } from "./Rewards";
import classNames from "classnames";
import Button from "~~/components/layout/Button";
import { GotchiEntry } from "~~/types/gotchiEntry";

export const ListItem = (props: { item: GotchiEntry; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li key={props.index} className="px-4 py-1 text-xl">
      <div className="border-b-2 border-b-frame pb-2">
        <div className="grid md:grid-cols-4 grid-cols-3 items-center place-items-center">
          <div className="px-1">Rank {props.index + 1}</div>
          <div>{props.item.name}</div>
          <div>{props.item.skillPoints} Points</div>
          <div className="col-span-3 md:col-span-1">
            <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Hide Rewards" : "Show rewards"}</Button>
          </div>
        </div>
        <div className={classNames(isOpen ? "" : "hidden")}>
          <Rewards rewards={props.item.rewards} />
        </div>
      </div>
    </li>
  );
};
