// components/FeaturedGallery.jsx
import React from "react";
import Img4 from "../../assets/photo-4.jpg";
import Img5 from "../../assets/photo-5.jpg";
import Img6 from "../../assets/photo-6.jpg";

const images = [
  { id: 1, src: Img4, title: "Sunset", price: 10, isFree: false },
  { id: 2, src: Img5, title: "Mountains", price: 0, isFree: true },
  { id: 3, src: Img6, title: "City Lights", price: 5, isFree: false },
];

const FeatureGallery = () => {
  return (
    <section className="py-16 px-4 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Images</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img.id} className="relative group   overflow-hidden rounded-xl transition-transform ease shadow">
            <img src={img.src} alt={img.title} loading="lazy" className="w-full hover:transform  h-64 object-cover" />
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGallery;
