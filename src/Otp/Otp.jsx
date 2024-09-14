//https://www.youtube.com/watch?v=nQ-hy4PUta8
import React, { useState } from "react";
import "./otp.css";
import OtpInput from "./OtpInput";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
const Otp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpInput, setOtpInput] = useState(false);
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Input !");
      return;
    }
    setOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
  };
  return (
    <div className="container">
      <SectionHeader data={"OTP Box"} />
      {!otpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input type="text" value={phoneNumber} onChange={handlePhoneNumber} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <div>Our Phone number is {phoneNumber}</div>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </>
      )}
    </div>
  );
};

export default Otp;
