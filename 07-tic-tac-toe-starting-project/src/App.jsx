import { useState } from "react";
import { GameBoard } from "./components/GameBoard";
import { Player } from "./components/Player";
import { Log } from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            player={"Player 1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
          />
          <Player
            player={"Player 2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          currentPlayer={activePlayer}
          onSelectSquare={handleSelectSquare}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
