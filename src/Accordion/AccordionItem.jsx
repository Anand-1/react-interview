import React, { useState } from "react";

function AccordionItem({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div
        style={{ backgroundColor: "lightgray" }}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{isActive ? "-" + title : "+" + title}</div>
      </div>
      <div>{isActive && content}</div>
    </div>
  );
}

export default AccordionItem;
