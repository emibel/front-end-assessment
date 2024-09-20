import { useAtom } from "jotai";
import { gameStore, TGameStore } from "../atoms/cards";
import { updateList } from "../utils/game";
import { useEffect } from "react";
import { playersCount } from "../constants/game";

export const usePlayGame = () => {
  const [game, setGame] = useAtom(gameStore);

  useEffect(() => {
    if (game.selectedCard1 && game.selectedCard2) {
      const newGame: TGameStore = { ...game };
      if (
        game.selectedCard1?.brotherId === game.selectedCard2?.id &&
        game.selectedCard2?.brotherId === game.selectedCard1?.id
      ) {
        newGame.list = updateList(
          [...newGame.list],
          newGame.selectedCard1,
          true
        );
        newGame.list = updateList(
          [...newGame.list],
          newGame.selectedCard2,
          true
        );
        newGame.selectedCard1 = null;
        newGame.selectedCard2 = null;
        newGame.players[newGame.iteration]++;
      }

      if (
        game.selectedCard1?.brotherId !== game.selectedCard2?.id &&
        game.selectedCard2?.brotherId !== game.selectedCard1?.id
      ) {
        newGame.list = updateList(newGame.list, newGame.selectedCard1, false);
        newGame.list = updateList(newGame.list, newGame.selectedCard2, false);
        newGame.iteration =
          newGame.iteration === playersCount - 1 ? 0 : newGame.iteration + 1;
        newGame.selectedCard1 = null;
        newGame.selectedCard2 = null;
      }

      setTimeout(() => {
        setGame({ ...newGame });
      }, 500);
    }
  }, [game, setGame]);
};
