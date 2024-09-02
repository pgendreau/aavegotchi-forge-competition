export type GotchiEntry = {
  id: string;
  totalItemsForged: number;
  totalItemsSmelted: number;
  skillPoints: number;
  smithingLevel: number;
  name: string;
  owner: string;
  lastForged: number | undefined;
};
