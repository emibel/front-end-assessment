import { useAtom } from "jotai";
import { gameStore } from "../atoms/cards";
import { TCard } from "../types/card";

export const useCard = () => {
  const [game] = useAtom(gameStore);
  const isCardFlipped = (card: TCard): boolean =>
    game.selectedCard1?.id === card.id || game.selectedCard2?.id === card.id;

  return { isCardFlipped };
};
