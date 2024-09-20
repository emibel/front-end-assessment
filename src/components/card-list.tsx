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
      <div className="row m-3">
        {list.map((item: TCard) => (
          <div key={item.id} className="col">
            <Card item={item} onFlipCard={flipCard} />
          </div>
        ))}
      </div>
    </div>
  );
};
