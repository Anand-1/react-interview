import React from "react";
import CheckoutStepper from "./CheckoutStepper";
import "./stepper.css";

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
      <h1>Stepper Component</h1>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
};

export default Stepper;
