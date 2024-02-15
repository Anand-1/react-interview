import React, { useState } from "react";
import stateData from "./data";

const DropDown = () => {
  const [localdata, setLocalData] = useState("");
  const [finalSelection, setFinalselection] = useState("");

  const updateState = (item) => {
    let data = stateData.filter((i) => i.value === item);
    setLocalData(data);
  };
  const handleInput = (i) => {
    setFinalselection(i);
  };
  return (
    <>
      <h1>Multi DropDown </h1>
      <select
        onChange={(e) => {
          updateState(e.target.value);
        }}
      >
        {stateData.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
      {localdata[0] && (
        <select onChange={(e) => handleInput(e.target.value)}>
          {localdata[0].cities.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      )}

      {finalSelection && <h3>{finalSelection}</h3>}
    </>
  );
};

export default DropDown;
