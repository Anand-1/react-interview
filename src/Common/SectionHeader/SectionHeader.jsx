import React from "react";
import "./Sectionheader.css";
import { useNavigate } from "react-router-dom";
export default function SectionHeader({ data }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="headerSection">
        <div onClick={() => navigate("/")}>Home</div>
        <div>{data}</div>
      </div>
    </>
  );
}
