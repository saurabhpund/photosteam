import React from "react";
import FlipableFrame from "./FlipableFrame";
import Img1 from "../assets/photo-1.jpg";
import Img2 from "../assets/photo-2.jpg";

const GridOfFrames = () => {
  const frameData = [
    {
      id: 1,
      frontImage: Img1,
      backImage: Img2
    },
    {
      id: 2,
      frontImage: Img2,
      backImage: Img1
    },
    // You can add more frames here...
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {frameData.map((elem) => (
        <FlipableFrame
          key={elem.id}
          frontImage={elem.frontImage}
          backImage={elem.backImage}
        />
      ))}
    </div>
  );
};

export default GridOfFrames;
