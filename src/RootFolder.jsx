import React from "react";
import ButtonComponent from "./Common/Button/Button";
import SectionHeader from "./Common/SectionHeader/SectionHeader";
import { useNavigate } from "react-router-dom";

const RootFolder = () => {
  const navigate = useNavigate();
  const links = [
    { name: "Progress Bar", value: "progressbar" },
    { name: "Drop Down", value: "dropdowns" },
    { name: "Check Box", value: "checkboxes" },
    { name: "Radio Games", value: "radiogames" },
    { name: "File Explorer", value: "fileexplorer" },
    { name: "Pagination", value: "pagination" },
    { name: "Infinite Scroll", value: "infinitescroll" },
    { name: "Steppers", value: "steppers" },
    { name: "Multi Select", value: "multiselect" },
    { name: "Grid Lights", value: "gridlights" },
    { name: "Password Generator", value: "passwordgenerator" },
    { name: "Login", value: "login" },
    { name: "OTP", value: "otp" },
    { name: "Line Graph", value: "lineGraph" },
    { name: "Accordion", value: "accordion" },
    { name: "Seat Booking", value: "seatBooking" },
    { name: "Star Rating", value: "starrating" },
    { name: "Google Steets", value: "googleSheets" },
    { name: "Employee Portal", value: "employeePortal" },
  ];
  const conceptualLinks = [
    { name: "Render Props", value: "renderProps" },
    { name: "Todo List with HOC", value: "todoList" },
    { name: "mouseTracker", value: "mouseTracker" },
    { name: "test", value: "test" },
  ];
  return (
    <div>
      <SectionHeader data={"Content Page"}> </SectionHeader>
      {links
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item, index) => {
          return (
            <ButtonComponent
              key={index}
              label={item.name}
              onClick={() => navigate(item.value)}
              color="blueviolet"
            ></ButtonComponent>
          );
        })}
      <hr></hr>
      <h2>Conceptual Ideas</h2>
      {conceptualLinks.map((item, index) => {
        return (
          <ButtonComponent
            key={index}
            label={item.name}
            onClick={() => navigate(item.value)}
            color="blueviolet"
          ></ButtonComponent>
        );
      })}
      {/* <h2>Conceptual Ideas</h2>
      <ul>
        <li>1.</li>
        <li>2.</li>
        <li>3.</li>
        <li>4.</li>
      </ul> */}
    </div>
  );
};

export default RootFolder;
