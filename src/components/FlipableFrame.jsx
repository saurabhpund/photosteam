import React from "react";

const FlipableFrame = ({ frontImage, backImage, alt = "Image" }) => {
  return (
    <div className="w-full perspective h-auto max-w-full rounded-lg">
      <div className="relative w-full h-0 pb-[100%] transition-transform duration-1000 transform-style preserve-3d hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden border-8 border-amber-900 shadow-2xl p-2 bg-white">
          <img
            src={frontImage}
            alt={alt}
            className="w-full h-full object-contain rounded"
          />
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 border-8 border-orange-900 shadow-xl p-2 bg-white">
          <img
            src={backImage}
            alt={`${alt} back`}
            className="w-full h-full object-contain rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipableFrame;
