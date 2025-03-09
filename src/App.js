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
import Otp from "./Otp/Otp";
import Portal from "./EmployeePortal/Portal";
import LineGraph from "./GraphGames/LineGraphs/LineGraph";
import RenderProps from "./ConceptualFolder/RenderProps/RenderProps";
import TodoList from "./ConceptualFolder/TodoList/TodoList";
import MouseTracker from "./ConceptualFolder/MouseRender/MouseTracker";
import Accordion from "./Accordion/Accordion";
import SeatBooking from "./SeatBooking/SeatBooking";
import StarRating from "./StarRating/StarRating";
import Sheet from "./GoogleSheet/Sheet";
import "./App.css";
import EmployeeInfo from "./EmployeePortal/EmployeeInfo";

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
          <Route path="otp" element={<Otp />}></Route>
          <Route path="employeeportal" element={<Portal />}></Route>
          <Route path="lineGraph" element={<LineGraph />}></Route>
          <Route path="renderProps" element={<RenderProps />}></Route>
          <Route path="todoList" element={<TodoList />}></Route>
          <Route
            path="mouseTracker"
            element={
              <MouseTracker
                render={({ x, y }) => (
                  <h1>
                    The mouse position is ({x}, {y})
                  </h1>
                )}
              />
            }
          ></Route>
          <Route path="accordion" element={<Accordion />}></Route>
          <Route path="seatBooking" element={<SeatBooking />}></Route>
          <Route path="starrating" element={<StarRating />}></Route>
          <Route path="googleSheets" element={<Sheet />}></Route>
          <Route path="employeePortal" element={<EmployeeInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
