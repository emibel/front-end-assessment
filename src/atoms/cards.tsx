import { atom } from "jotai";
import { TCard } from "../types/card";
import { playersCount } from "../constants/game";

const list: TCard[] = [
  { id: `0`, brotherId: "10", value: 0, isFlipped: false },
  { id: `1`, brotherId: "11", value: 1, isFlipped: false },
  { id: `2`, brotherId: "12", value: 2, isFlipped: false },
  { id: `3`, brotherId: "13", value: 3, isFlipped: false },
  { id: `4`, brotherId: "14", value: 4, isFlipped: false },
  { id: `5`, brotherId: "15", value: 5, isFlipped: false },
  { id: `6`, brotherId: "16", value: 6, isFlipped: false },
  { id: `7`, brotherId: "17", value: 7, isFlipped: false },
  { id: `8`, brotherId: "18", value: 8, isFlipped: false },
  { id: `9`, brotherId: "19", value: 9, isFlipped: false },
  { id: `10`, brotherId: "0", value: 10, isFlipped: false },
  { id: `11`, brotherId: "1", value: 1, isFlipped: false },
  { id: `12`, brotherId: "2", value: 2, isFlipped: false },
  { id: `13`, brotherId: "3", value: 3, isFlipped: false },
  { id: `14`, brotherId: "4", value: 4, isFlipped: false },
  { id: `15`, brotherId: "5", value: 5, isFlipped: false },
  { id: `16`, brotherId: "6", value: 6, isFlipped: false },
  { id: `17`, brotherId: "7", value: 7, isFlipped: false },
  { id: `18`, brotherId: "8", value: 8, isFlipped: false },
  { id: `19`, brotherId: "9", value: 9, isFlipped: false },
];

export type TGameStore = {
  list: TCard[];
  selectedCard1: TCard | null;
  selectedCard2: TCard | null;
  players: number[];
  iteration: number;
};
export const gameAtom: TGameStore = {
  list,
  selectedCard1: null,
  selectedCard2: null,
  players: Array(playersCount).fill(0),
  iteration: 0,
};

export const gameStore = atom(gameAtom);
