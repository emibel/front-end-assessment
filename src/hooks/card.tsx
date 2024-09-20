import { TCard } from "../types/card";
import { useGame } from "./game";

export const useCard = () => {
  const { game } = useGame();
  const isCardFlipped = (card: TCard): boolean => {
    if (game.selectedCard1?.id === card.id) {
      return true;
    }
    if (game.selectedCard2?.id === card.id) {
      return true;
    }
    return false;
  };

  return { isCardFlipped };
};
