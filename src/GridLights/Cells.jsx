import React from "react";
import "./gridlights.css";
export default function Cells({ filled, onClick, isDisabled, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
}
