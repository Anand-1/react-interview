import React from "react";
import { Link } from "react-router-dom";

const RootFolder = () => {
  return (
    <div>
      <Link to="/progressbar">Progress</Link>
      <hr></hr>
      <Link to="/dropdowns">dropdowns</Link>
      <hr></hr>
      <Link to="/checkboxes">checkboxes</Link>
      <hr></hr>
      <Link to="/radiogames">radiogames</Link>
      <hr></hr>
      <Link to="/fileexplorer">fileexplorer</Link>
      <hr></hr>
      <Link to="/pagination">pagination</Link>
      <hr></hr>
      <Link to="/infinitescroll">infinitescroll</Link>
      <hr></hr>
      <Link to="/progressbar">Progress</Link>
      <hr></hr>
      <Link to="/steppers">steppers</Link>
      <hr></hr>
      <Link to="multiselect">multiselect</Link>
    </div>
  );
};

export default RootFolder;
