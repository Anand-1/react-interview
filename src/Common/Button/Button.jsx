import React from "react";
import "./Button.css";
const ButtonComponent = ({ color, label, onClick }) => {
  return (
    <button
      className="buttonDesign"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  );
};
export default ButtonComponent;
