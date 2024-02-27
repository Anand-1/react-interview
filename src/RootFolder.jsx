import React from "react";
import { Link } from "react-router-dom";

const RootFolder = () => {
  const links = [
    { name: "progress", value: "progressbar" },
    { name: "dropdowns", value: "dropdowns" },
    { name: "checkboxes", value: "checkboxes" },
    { name: "radiogames", value: "radiogames" },
    { name: "fileexplorer", value: "fileexplorer" },
    { name: "pagination", value: "pagination" },
    { name: "infinitescroll", value: "infinitescroll" },
    { name: "steppers", value: "steppers" },
    { name: "multiselect", value: "multiselect" },
    { name: "gridlights", value: "gridlights" },
    { name: "passwordgenerator", value: "passwordgenerator" },
    { name: "login", value: "login" },
    { name: "otp", value: "otp" },
  ];
  return (
    <div>
      <h1>Content Page </h1>
      {links.map((item, index) => {
        return (
          <span key={index}>
            <Link to={item.value}>{item.name} | </Link>
          </span>
        );
      })}
    </div>
  );
};

export default RootFolder;
