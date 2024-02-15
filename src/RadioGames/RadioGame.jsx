import React, { useState } from "react";

const games = ["Football", "Cricket", "Volley Ball", "Tennis"];

const RadioGames = () => {
  const [data, setData] = useState(games);
  const handleClick = (e) => {
    setGame(e);
  };
  const [selectedGame, setGame] = useState("");
  return (
    <>
      <div>Radio Games</div>
      {data.map((item, index) => {
        return (
          <>
            <input key={index} type="radio" onClick={() => handleClick(item)} />
            {item}
          </>
        );
      })}
      {selectedGame && <div>{selectedGame}</div>}
    </>
  );
};

export default RadioGames;
