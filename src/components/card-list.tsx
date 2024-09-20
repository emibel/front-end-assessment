import { useGame } from "../hooks/game";
import { Card } from "./card";

export const CardList = () => {
  const {
    game: { list },
    flipCard,
  } = useGame();

  return (
    <div className="container">
      <div className="row m-3">
        {list.map((item) => (
          <div key={item.id} className="col">
            <Card item={item} onFlipCard={flipCard} />
          </div>
        ))}
      </div>
    </div>
  );
};
