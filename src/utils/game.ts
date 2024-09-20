import { TCard } from "../types/card";

export const updateList = (
  list: TCard[],
  card: TCard | null,
  flipped: boolean
): TCard[] =>
  [...list].map((item) =>
    card && item.id === card.id ? { ...item, isFlipped: flipped } : item
  );
