"use client";

import { useState } from "react";

export default function ProjectImageSlider({ images = [] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="w-full mb-6">
      {/* Cross-fading Image Container */}
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "56.25%" /* aspect ratio */ }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Project image ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-contain rounded transition-opacity duration-300 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] text-white w-10 h-10 rounded-full flex items-center justify-center transition z-20"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] text-white w-10 h-10 rounded-full flex items-center justify-center transition z-20"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {images.length > 1 && (
        <div className="flex justify-center items-center gap-1 mt-2 w-full">
          {images.map((_, i) => {
            const total = images.length;
            const activeWidth = 40;
            const inactiveWidth = 60 / (total - 1);
            const widthPercent =
              i === index ? `${activeWidth}%` : `${inactiveWidth}%`;

            return (
              <span
                key={i}
                style={{ width: widthPercent }}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? "bg-black" : "bg-gray-400"
                }`}
                onClick={() => setIndex(i)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
