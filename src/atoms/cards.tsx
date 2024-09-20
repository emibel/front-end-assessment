import { atom } from "jotai";
import { TCard } from "../types/card";

const list: TCard[] = [
  { id: `0`, value: 0, isFlipped: false, brotherId: "10" },
  { id: `1`, value: 1, isFlipped: false, brotherId: "11" },
  { id: `2`, value: 2, isFlipped: false, brotherId: "12" },
  { id: `3`, value: 3, isFlipped: false, brotherId: "13" },
  { id: `4`, value: 4, isFlipped: false, brotherId: "14" },
  { id: `5`, value: 5, isFlipped: false, brotherId: "15" },
  { id: `6`, value: 6, isFlipped: false, brotherId: "16" },
  { id: `7`, value: 7, isFlipped: false, brotherId: "17" },
  { id: `8`, value: 8, isFlipped: false, brotherId: "18" },
  { id: `9`, value: 9, isFlipped: false, brotherId: "19" },
  { id: `10`, value: 10, isFlipped: false, brotherId: "0" },
  { id: `11`, value: 1, isFlipped: false, brotherId: "1" },
  { id: `12`, value: 2, isFlipped: false, brotherId: "2" },
  { id: `13`, value: 3, isFlipped: false, brotherId: "3" },
  { id: `14`, value: 4, isFlipped: false, brotherId: "4" },
  { id: `15`, value: 5, isFlipped: false, brotherId: "5" },
  { id: `16`, value: 6, isFlipped: false, brotherId: "6" },
  { id: `17`, value: 7, isFlipped: false, brotherId: "7" },
  { id: `18`, value: 8, isFlipped: false, brotherId: "8" },
  { id: `19`, value: 9, isFlipped: false, brotherId: "9" },
];

export type TGameStore = {
  list: TCard[];
  selectedCard1: TCard | null;
  selectedCard2: TCard | null;
};
const gameAtom: TGameStore = {
  list,
  selectedCard1: null,
  selectedCard2: null,
};

export const gameStore = atom(gameAtom);
