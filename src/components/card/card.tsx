import { TCard } from "../../types/card";
import { useCard } from "../../hooks/card";
import "./card.css";

type Props = {
  item: TCard;
};

export const Card = ({ item }: Props) => {
  const { isCardFlipped, flipCard } = useCard();
  return (
    <button
      className={`btn btn-${
        isCardFlipped(item)
          ? "success"
          : item.isFlipped
          ? "primary"
          : "secondary"
      } card-button`}
      onClick={() => flipCard(item)}
    >
      {isCardFlipped(item) || item.isFlipped ? `${item.value}` : "X"}
    </button>
  );
};
