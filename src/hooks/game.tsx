import { useAtom } from "jotai";
import { gameStore, TGameStore } from "../atoms/cards";
import { TCard } from "../types/card";
import { updateList } from "../utils/game";
import { useEffect } from "react";

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

    console.log("newGame: ", newGame);
    setGame({ ...newGame });
  };

  useEffect(() => {
    if (game.selectedCard1 && game.selectedCard2) {
      const newGame: TGameStore = { ...game };
      if (
        game.selectedCard1?.brotherId === game.selectedCard2?.id &&
        game.selectedCard2?.brotherId === game.selectedCard1?.id
      ) {
        newGame.list = updateList(newGame.list, newGame.selectedCard1, true);
        newGame.list = updateList(newGame.list, newGame.selectedCard2, true);
        newGame.selectedCard1 = null;
        newGame.selectedCard2 = null;
      }

      if (
        game.selectedCard1?.brotherId !== game.selectedCard2?.id &&
        game.selectedCard2?.brotherId !== game.selectedCard1?.id
      ) {
        newGame.list = updateList(newGame.list, newGame.selectedCard1, false);
        newGame.list = updateList(newGame.list, newGame.selectedCard2, false);
        newGame.selectedCard1 = null;
        newGame.selectedCard2 = null;
      }

      setTimeout(() => {
        setGame({ ...newGame });
      }, 2000);
    }
  }, [game, setGame]);

  return {
    game,
    flipCard,
  };
};
