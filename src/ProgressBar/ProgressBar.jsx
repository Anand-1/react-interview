import React, { useEffect, useState } from "react";
import "./style.css";
const ProgressBar = () => {
  const [progresData, setProgress] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setProgress((prev) => prev + 2);
    }, 1000);
    if (progresData > 80) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [progresData]);
  console.log(progresData);
  return (
    <>
      <h1>Progress Bar</h1>
      <div className="progress-container">
        <div className="progress-barr">
          <div
            style={{ transform: `translate(${progresData - 100}%)` }}
            className="progress-bar-fill"
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
