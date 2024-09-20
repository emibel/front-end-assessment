import { useAtom } from "jotai";
import { gameStore } from "../atoms/cards";

export const Footer = () => {
  const [game] = useAtom(gameStore);
  const { players } = game;
  return (
    <footer>
      <div className="logo">
        {players.map((player, index) => (
          <h3 key={index}>
            Player {index + 1}: {player}
          </h3>
        ))}
      </div>
    </footer>
  );
};
