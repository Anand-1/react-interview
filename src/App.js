import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DropDown from "./DropDown/DropDown";
import CheckBox from "./CheckBox/CheckBox";
import RadioGames from "./RadioGames/RadioGame";
import FileExplorer from "./FileExplorer/FileExplorer";
import Pagination from "./Pagination/Pagination";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import ProgressBar from "./ProgressBar/ProgressBar";
import RootFolder from "./RootFolder";
import Stepper from "./Stepper/Stepper";
import MultiSelectinput from "./MuiltiSelectInput/MultiSelectinput";
import GridLights from "./GridLights/GridLights";
import PasswordGenerator from "./PasswordGenerator/PasswordGenerator";
import Login from "./LoginApp/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<RootFolder />}></Route>
          <Route path="dropdowns" element={<DropDown />}></Route>
          <Route path="checkboxes" element={<CheckBox />}></Route>
          <Route path="radiogames" element={<RadioGames />}></Route>
          <Route path="fileexplorer" element={<FileExplorer />}></Route>
          <Route path="pagination" element={<Pagination />}></Route>
          <Route path="infinitescroll" element={<InfiniteScroll />}></Route>
          <Route path="progressbar" element={<ProgressBar />}></Route>
          <Route path="steppers" element={<Stepper />}></Route>
          <Route path="multiselect" element={<MultiSelectinput />}></Route>
          <Route path="gridlights" element={<GridLights />}></Route>
          <Route
            path="passwordgenerator"
            element={<PasswordGenerator />}
          ></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
