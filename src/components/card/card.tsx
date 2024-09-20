import { TCard } from "../../types/card";
import { useCard } from "../../hooks/card";
import "./card.css";

type Props = {
  item: TCard;
  onFlipCard: (item: TCard) => void;
};

export const Card = ({ item, onFlipCard }: Props) => {
  const { isCardFlipped } = useCard();

  return (
    <button
      className={`btn btn-${
        isCardFlipped(item)
          ? "success"
          : item.isFlipped
          ? "primary"
          : "secondary"
      } card-button`}
      onClick={() => onFlipCard(item)}
    >
      {isCardFlipped(item) || item.isFlipped ? `${item.value}` : "X"}
    </button>
  );
};
