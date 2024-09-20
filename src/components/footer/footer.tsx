import { useAtom } from "jotai";
import { getGameAtom, gameStore } from "../../atoms/cards";

import "./footer.css";

export const Footer = () => {
  const [game, setGame] = useAtom(gameStore);
  const { players, iteration } = game;
  return (
    <footer>
      <div className={"container"}>
        <div className="d-flex justify-content-center">
          {players.map((player, index) => (
            <span
              className={`m-4 player ${index === iteration ? "selected" : ""} `}
              key={index}
            >
              Player {index + 1}: {player}
            </span>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => {
              console.log("gameAtom: ", getGameAtom());
              console.log("game: ", game);
              setGame(getGameAtom());
            }}
            className="btn btn-danger"
          >
            Reset Game
          </button>
        </div>
      </div>
    </footer>
  );
};
