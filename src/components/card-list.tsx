import { useAtom } from "jotai";
import { gameStore } from "../atoms/cards";
import { useGame } from "../hooks/game";
import { TCard } from "../types/card";
import { Card } from "./card/card";

export const CardList = () => {
  const [game] = useAtom(gameStore);
  const { list } = game;
  const { flipCard } = useGame();

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {list.map((item: TCard) => (
          <div key={item.id} className="col-2 m-3">
            <Card item={item} onFlipCard={flipCard} />
          </div>
        ))}
      </div>
    </div>
  );
};
