import { GameBoard } from "./components/GameBoard";
import { Player } from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player player={"Player 1"} symbol={"X"} />
          <Player player={"Player 2"} symbol={"O"} />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
