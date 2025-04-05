import React, { useEffect, useState } from "react";

export default function DuetoeventListeners() {
  const [images, setImages] = useState[[]];
  const addImages = (newImages) => {
    setImages([...images, newImages]);
  };

  useEffect(() => {
    const handleClick = () => {
      console.log("Image Clicked");
    };
    document.addEventListener("click", handleClick);
    addImages("new-image.jpg");
    //
    return () => document.removeEventListener("click", handleClick);
  }, [images]);
  return (
    <div>
      <h2>Image Carousel</h2>
      {images.map((image, index) => {
        <img key={index} src={image} alt={`Image ${index}`}></img>;
      })}
    </div>
  );
}
