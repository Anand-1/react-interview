import React from "react";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";
import Products from "./Products";

export default function RenderProps() {
  return (
    <>
      <SectionHeader data={"Render Props"}></SectionHeader>
      <Products />
    </>
  );
}
