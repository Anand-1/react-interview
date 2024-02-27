import React, { useState } from "react";
import "./checkbox.css";
const arr = ["Item 1", "Item 2", "Item 3", "Item 4"];

const CheckBox = () => {
  const [data, setData] = useState(arr);
  const handleDelete = (e) => {
    let newData = data.filter((item) => item !== e);
    setData(newData);
  };

  const handleClick = (el) => {
    console.log(el);
  };
  return (
    <>
      <ul className="unonderlist">
        {data.map((el, index) => {
          return (
            <ul key={index} value={el}>
              <input type="checkbox" onClick={() => handleClick(el)}></input>
              {el}
              <button className="hiddenNow" onClick={() => handleDelete(el)}>
                X
              </button>
            </ul>
          );
        })}
      </ul>
    </>
  );
};
export default CheckBox;
