import { useAtom } from "jotai";
import { gameStore, TGameStore } from "../atoms/cards";
import { TCard } from "../types/card";
import { useCallback, useEffect } from "react";

export const useGame = () => {
  const [game, setGame] = useAtom(gameStore);

  const updatelist = useCallback(
    (list: TCard[], card: TCard | null, flipped: boolean) =>
      [...list].map((item) =>
        card && item.id === card.id ? { ...item, isFlipped: flipped } : item
      ),
    []
  );

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
        newGame.list = updatelist(newGame.list, newGame.selectedCard1, true);
        newGame.list = updatelist(newGame.list, newGame.selectedCard2, true);
        newGame.selectedCard1 = null;
        newGame.selectedCard2 = null;
      }

      if (
        game.selectedCard1?.brotherId !== game.selectedCard2?.id &&
        game.selectedCard2?.brotherId !== game.selectedCard1?.id
      ) {
        newGame.list = updatelist(newGame.list, newGame.selectedCard1, false);
        newGame.list = updatelist(newGame.list, newGame.selectedCard2, false);
        newGame.selectedCard1 = null;
        newGame.selectedCard2 = null;
      }

      setTimeout(() => {
        setGame({ ...newGame });
      }, 2000);
    }
  }, [game, setGame, updatelist]);

  return {
    game,
    flipCard,
  };
};
