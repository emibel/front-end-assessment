import { useAtom } from "jotai";
import { gameStore, TGameStore } from "../atoms/cards";
import { TCard } from "../types/card";

export const useCard = () => {
  const [game, setGame] = useAtom(gameStore);

  const isCardFlipped = (card: TCard): boolean =>
    game.selectedCard1?.id === card.id || game.selectedCard2?.id === card.id;

  const flipCard = (card: TCard) => {
    const newGame: TGameStore = { ...game };

    if (!game.selectedCard1 && !game.selectedCard2) {
      newGame.selectedCard1 = card;
    }

    if (game.selectedCard1 && !game.selectedCard2) {
      newGame.selectedCard2 = card;
    }

    setGame({ ...newGame });
  };

  return { isCardFlipped, flipCard };
};
