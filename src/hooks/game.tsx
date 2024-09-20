import { useAtom } from "jotai";
import { gameStore, TGameStore } from "../atoms/cards";
import { TCard } from "../types/card";

export const useGame = () => {
  const [game, setGame] = useAtom(gameStore);

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

  return {
    flipCard,
  };
};
