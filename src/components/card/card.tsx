import { TCard } from "../../types/card";
import { Button } from "reactstrap";
import { useCard } from "../../hooks/card";
import "./card.css";

type Props = {
  item: TCard;
  onFlipCard: (item: TCard) => void;
};

export const Card = ({ item, onFlipCard }: Props) => {
  const { isCardFlipped } = useCard();

  return (
    <Button
      onClick={() => onFlipCard(item)}
      color={
        isCardFlipped(item)
          ? "success"
          : item.isFlipped
          ? "primary"
          : "secondary"
      }
      className="card-button"
    >
      {isCardFlipped(item) || item.isFlipped
        ? `${item.id} - ${item.brotherId}`
        : "X"}
    </Button>
  );
};
