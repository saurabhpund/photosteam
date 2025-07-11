import React from "react";
import Img1 from "../../assets/photo-1.jpg";
import Img2 from "../../assets/photo-2.jpg";
import Img3 from "../../assets/photo-3.jpg";
import Img4 from "../../assets/photo-4.jpg";
import FlipableFrame from "../../components/FlipableFrame";

const Hero = () => {
      const frameData = [
    { id: 1, frontImage: Img1, backImage: Img2 },
    { id: 2, frontImage: Img3, backImage: Img4 },
    { id: 3, frontImage: Img2, backImage: Img1 },
    { id: 4, frontImage:
       Img4, backImage: Img3 },
  ];
   return (
    <section className="max-w-screen-xl mx-auto gap-3 flex flex-col md:flex-row items-center justify-between p-8">
      {/* LEFT TEXT SECTION */}
      <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Discover Unique Art
        </h1>
        <p className="text-gray-600 mb-6">
          Handpicked frames from amazing artists. Flip to see the back and explore what makes each piece special.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
          Explore Collection
        </button>
      </div>

      {/* RIGHT GRID OF FLIPABLE FRAMES */}
      <div className="md:w-1/2  grid-cols-2 lg:grid hidden gap-4 group">
        {frameData.map((item) => (
          <FlipableFrame
            key={item.id}
            frontImage={item.frontImage}
            backImage={item.backImage}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
