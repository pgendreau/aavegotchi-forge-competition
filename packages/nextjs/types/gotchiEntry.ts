import { Item } from "./items";
import { s1Reward } from "~~/consts/rewards";

export type GotchiEntry = {
  id: string;
  totalItemsForged: number;
  totalItemsSmelted: number;
  skillPoints: number;
  smithingLevel: number;
  name: string;
  owner: string;
  lastForged: number | undefined;
  rewards?: Item[];
  rewardsMatrix?: s1Reward;
};
