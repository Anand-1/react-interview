import React from "react";
import CheckoutStepper from "./CheckoutStepper";
import "./stepper.css";
import SectionHeader from "../Common/SectionHeader/SectionHeader";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide Customer Details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Where you wish to be delivered.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Please Pay.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered.</div>,
  },
];

const Stepper = () => {
  return (
    <div>
      <SectionHeader data={"Stepper Component"} />
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
};

export default Stepper;
