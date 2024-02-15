import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DropDown from "./DropDown/DropDown";
import CheckBox from "./CheckBox/CheckBox";
import RadioGames from "./RadioGames/RadioGame";
import FileExplorer from "./FileExplorer/FileExplorer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="dropdowns" element={<DropDown />}></Route>
          <Route path="checkboxes" element={<CheckBox />}></Route>
          <Route path="radiogames" element={<RadioGames />}></Route>
          <Route path="fileexplorer" element={<FileExplorer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
