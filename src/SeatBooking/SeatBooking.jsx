import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader/SectionHeader";

export default function SeatBooking() {
  const data = Array.from(Array(20).keys()).map((item) => ({
    id: item,
    status: false,
  }));
  const [seats, setData] = useState(data);
  const [selectedSeats, setSelectedSeats] = useState("None");
  const handleBooking = (item) => {
    let newData = seats.map((p) => {
      return p.id === item ? { ...p, status: true } : p;
    });
    setData(newData);

    let selected = newData
      .filter((item) => item.status === true)
      .map((item) => item.id)
      .join();
    setSelectedSeats(selected);
  };

  const handleReset = () => {
    setData(data);
  };
  return (
    <>
      <SectionHeader data={"Seat Booking"} />
      <div style={{ display: "flex" }}>
        {seats.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleBooking(index)}
              style={{
                backgroundColor: item.status ? "grey" : "red",
                padding: "10px",
                width: "10px",
                margin: "10px",
              }}
            >
              {index}
            </div>
          );
        })}
      </div>
      <div>
        {" "}
        Seats Selected : <span>{selectedSeats}</span>
      </div>
      <button onClick={() => handleReset()}> Reset Seats</button>
    </>
  );
}
