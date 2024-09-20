import { TCard } from "../types/card";
import { useGame } from "./game";

export const useCard = () => {
  const { game } = useGame();
  const isCardFlipped = (card: TCard): boolean =>
    game.selectedCard1?.id === card.id || game.selectedCard2?.id === card.id;

  return { isCardFlipped };
};
