import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader/SectionHeader";

const games = ["Football", "Cricket", "Volley Ball", "Tennis"];

const RadioGames = () => {
  const [data, setData] = useState(games);
  const handleClick = (e) => {
    setGame(e);
  };
  const [selectedGame, setGame] = useState("");
  return (
    <>
      <SectionHeader data={"Radio Game"} />
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
