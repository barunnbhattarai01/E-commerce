import React from "react";

function Photo() {
  const photos = [
  "one.jpg",
  "two.jpg",
  "three.jpg",
  "four.jpg",
  "five.jpg"
  ];

  return (
    <div className="h-screen w-auto bg-white">
    <div className=" dark:border-gray-700  p-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Images Gallery
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((src, index) => (
          <div
            className="m-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
            key={index}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Photo;