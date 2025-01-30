"use client";

import Image from "next/image";

function ExampleCarouselImage({ text }) {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        backgroundColor: "#ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>{text}</span>
    </div>
  );
}

export default ExampleCarouselImage;
