import { useState } from "react";
import "./Sheet.css";
import SectionHeader from "../Common/SectionHeader/SectionHeader";

const Sheet = () => {
  // State to store the sheet data
  const [sheetData, setSheetData] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  // Adds a new row at the bottom of the grid
  const addSheetRow = () => {
    setSheetData([...sheetData, Array(sheetData[0].length).fill("")]);
  };

  // Adds a new column at the end of each row
  const addSheetColumn = () => {
    setSheetData(sheetData.map((row) => [...row, ""]));
  };

  // Updates the value of a specific cell
  const updateSheetCell = (rowIndex, colIndex, value) => {
    const updatedSheetData = sheetData.map((row, rIdx) =>
      row.map((cell, cIdx) =>
        rIdx === rowIndex && cIdx === colIndex ? value : cell
      )
    );
    setSheetData(updatedSheetData);
  };

  return (
    <>
      <SectionHeader data={"File Explorer"} />
      {/* Render the grid */}
      <div className="grid">
        {sheetData.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                value={cell}
                onChange={(e) =>
                  updateSheetCell(rowIndex, colIndex, e.target.value)
                }
                className="cell"
              />
            ))}
          </div>
        ))}
      </div>
      {/* Buttons to add rows and columns */}
      <div className="controls">
        <button onClick={addSheetRow}>Add Row</button>
        <button onClick={addSheetColumn}>Add Column</button>
      </div>
    </>
  );
};

export default Sheet;
