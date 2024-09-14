import React, { useState } from "react";
import "./employee.css";
import EmployeeInfo from "./EmployeeInfo";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
let info = require("./data.json");

function Portal() {
  const handleclick = (e) => {
    setData(e);
  };
  const [data, setData] = useState(info[0]);
  return (
    <>
      <SectionHeader data={"Employee Portal"}>Employee Portal</SectionHeader>
      <div className="container-box">
        <div>
          {data &&
            info.map((item) => {
              return (
                <span key={item.id} onClick={() => handleclick(item)}>
                  {item.firstName + item.lastName}
                  <br></br>
                </span>
              );
            })}
        </div>
        <div>
          <span>Employee Info</span>
          <EmployeeInfo employee={data} />
        </div>
      </div>
    </>
  );
}

export default Portal;
