import React from "react";

function EmployeeInfo({ employee }) {
  const { id, ...restdata } = employee;
  console.log(restdata);
  return <div>{id}</div>;
}
export default EmployeeInfo;
