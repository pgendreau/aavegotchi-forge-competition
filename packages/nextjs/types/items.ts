export enum Rarities {
  common = "common",
  uncommon = "uncommon",
  rare = "rare",
  legendary = "legendary",
  mythical = "mythical",
  godlike = "godlike",
}

export enum Positions {
  head = "Head",
  body = "Body",
  hand = "Hand",
  pet = "Pet",
  face = "Face",
  eye = "Eye",
}

export type Item = {
  id: number;
  rarity: Rarities;
  position: Positions;
  name: string;
  details: string;
};
