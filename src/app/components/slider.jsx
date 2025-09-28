"use client";
import { useEffect, useState } from "react";

const slides = [
  { id: 1, src: "/movie 1.jpg", alt: "Slide 1" },
  { id: 2, src: "/movie 2.jpg", alt: "Slide 2" },
  { id: 3, src: "/movie 3.jpg", alt: "Slide 3" },
{ id: 4, src: "/movie 4.jpg", alt: "Slide 4" },
{ id: 5, src: "/movie 5.jpg", alt: "Slide 5" },
];

 function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-5 w-full overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 h-[250px] sm:h-[350px] md:h-[500px]"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;