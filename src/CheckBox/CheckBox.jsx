import React, { useState } from "react";
import "./checkbox.css";
const arr = ["Anand", "Raj", "Singh", "Chauhan"];

const CheckBox = () => {
  const [data, setData] = useState(arr);
  const handleDelete = (e) => {
    let newData = data.filter((item) => item !== e);
    setData(newData);
  };

  const handleClick = (el) => {};
  return (
    <>
      <ul className="unonderlist">
        {data.map((el, index) => {
          return (
            <li key={index} value={el}>
              <input type="checkbox" onClick={() => handleClick(el)}></input>
              {el}
              <button className="hiddenNow" onClick={() => handleDelete(el)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default CheckBox;
