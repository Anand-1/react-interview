import React from "react";

export default function ProductCard({ item }) {
  return (
    <div
      style={{
        padding: 20,
        margin: 10,
        backgroundColor: "lightgray",
      }}
      key={item.id}
    >
      {item.description}
    </div>
  );
}
