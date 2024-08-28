import { useState } from "react";

export const Player = ({ player, symbol, isActive, onSave }) => {
  const [playerName, setPlayerName] = useState(player);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleSave = (symbol, name) => {
    setIsEditing((prevValue) => !prevValue);

    isEditing && onSave(symbol, name);
  };
  return (
    <li className={isActive ? "active" : undefined}>
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
      <button onClick={() => handleSave(symbol, playerName)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};
