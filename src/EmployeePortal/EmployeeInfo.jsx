import React from "react";

function EmployeeInfo({ employee }) {
  const { id, ...restdata } = employee;
  return <div>{id}</div>;
}
export default EmployeeInfo;
