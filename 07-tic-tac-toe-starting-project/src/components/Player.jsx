import { useState } from "react";

export const Player = ({ player, symbol }) => {
  const [playerName, setPlayerName] = useState(player);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };
  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing((prevValue) => !prevValue)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};
