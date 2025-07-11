import React from "react";
import Header from "../../components/Header";

const Gallery = () => {
    const categories = [
    "WALLPAPER",
    "NATURE",
    "TEXTURES",
    "TRAVEL",
    "FILM",
    "PEOPLE",
    "ARCHITECTURE_AND_INTERIORS",
    "STREET_PHOTOGRAPHY",
    "EXPERIMENTAL",
    "FLAT",
    "HAND_DRAWN",
    "ICONS",
    "LINE_ART",
    "PATTERNS"
    ];
  return (
    <>
      <Header />
      {/* Design container with search box in center below it listed categories horizontal and then list of images  */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gallery text-white p-8 text-center mb-8">
          <div>
            <h1 className="text-5xl font-bold uppercase">Gallery</h1>
            <p className="text-gray-100 text-lg mt-2">
              Explore our collection of stunning images
            </p>
          </div>

          {/* Search Box */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search images..."
              className="border bg-white mt-4 text-black outline-0 border-gray-300 placeholder:text-gray-800 rounded-lg px-5 py-3 w-full max-w-7xl"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-y-4 justify-center space-x-4 mb-6">
            {categories.map((category, index) => (
                <button key={index} className="bg-gray-100 px-4 text-gray-800 py-2 rounded hover:bg-gray-200 cursor-pointer">
              {category}
            </button>
            ))
        }
            
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example Images */}
          {[...Array(30)].map((_, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <img
                src={`https://picsum.photos/200/300?random=${index}`}
                alt={`Random ${index}`}
                className="w-full h-auto rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
