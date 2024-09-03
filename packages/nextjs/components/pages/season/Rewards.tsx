import { Item } from "~~/types/items";

export const Rewards = (props: { rewards: Item[]|undefined }) => {
  // return <ul>
  //   {props?.rewards?.map((reward, i) => <li key={i} className={`text-${reward.rarity}`}>{reward.name}</li>)}
  // </ul>
  return <>
    {props?.rewards?.toReversed().map((reward, i) => <span key={i} className={`text-${reward.rarity}`}>1x {reward.name}, </span>)}
  </>
}