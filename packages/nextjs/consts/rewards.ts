import { Item, Positions, Rarities } from "~~/types/items";

export const season1Items: Item[] = [
  { id: 1, rarity: Rarities.common, position: Positions.eye, name: "Granny Glasses", details: "-1 NRG" },
  { id: 2, rarity: Rarities.common, position: Positions.face, name: "Freckles", details: "-1 AGG" },
  { id: 3, rarity: Rarities.common, position: Positions.pet, name: "Stohn", details: "+1 BRN" },
  { id: 4, rarity: Rarities.uncommon, position: Positions.eye, name: "Based Shades", details: "+2 AGG" },
  { id: 5, rarity: Rarities.uncommon, position: Positions.eye, name: "Rasta Glasses", details: "-2 AGG" },
  { id: 6, rarity: Rarities.uncommon, position: Positions.face, name: "Braces", details: "-1 NRG /+1 AGG" },
  { id: 7, rarity: Rarities.uncommon, position: Positions.pet, name: "Stohn", details: "+1 SPK / +1 BRN" },
  { id: 8, rarity: Rarities.rare, position: Positions.face, name: "Baable Gum", details: "+3 NRG" },
  { id: 9, rarity: Rarities.rare, position: Positions.face, name: "Aloha Flowers", details: "-3 NRG" },
  { id: 10, rarity: Rarities.rare, position: Positions.pet, name: "Stohn", details: "+2 SPK / +1 BRN" },
  { id: 11, rarity: Rarities.legendary, position: Positions.face, name: "Face Mask", details: "+2 NRG / +2 AGG" },
  { id: 12, rarity: Rarities.legendary, position: Positions.pet, name: "Wild Fungi", details: "-2 AGG / -2 SPK" },
  { id: 13, rarity: Rarities.mythical, position: Positions.face, name: "Kawaii Mouth", details: "-5 BRN" },
  { id: 14, rarity: Rarities.mythical, position: Positions.pet, name: "Licky", details: "+2 NRG / -3 BRN" },
];

export type s1Reward = [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
];

export const getS1RewardsMatrix = (): s1Reward[] => {
  const response: s1Reward[] = [];
  // First 5 takes all rewards
  for (let i = 0; i < 5; i++) response.push(generateReward(0));
  // Next 5 takes 2 less reward
  for (let i = 5; i < 10; i++) response.push(generateReward(2));
  // Next 15 takes 4 less reward
  for (let i = 10; i < 25; i++) response.push(generateReward(4));
  // next 25 takes 7 less reward
  for (let i = 25; i < 50; i++) response.push(generateReward(7));
  // next 50 takes 11 less reward
  for (let i = 50; i < 100; i++) response.push(generateReward(3));
  return response;
};

const generateReward = (nbReward: number): s1Reward => {
  const reward: s1Reward = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  for (let i = nbReward; i < 14; i++) reward[i] = true;
  return reward;
};

export const getRewardsFromMatrix = (matrix: s1Reward): Item[] => {
  const rewards: Item[] = [];
  for (let i = 0; i < 14; i++) if (matrix[i]) rewards.push(season1Items[i]);
  return rewards;
};
