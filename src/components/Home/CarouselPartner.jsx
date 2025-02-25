import React, { useEffect } from "react";
import M from "materialize-css"; // Import Materialize JavaScript
import "materialize-css/dist/css/materialize.min.css"; // Import Materialize CSS styles

export default function CarouselPartner() {
  useEffect(() => {
    const elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {
      fullWidth: false, // Keep false to allow multiple images
      indicators: true, // Show dots below
      numVisible: 3, // Display three images at a time
      padding: 10, // Adds spacing between items
      shift: 30, // Adjusts shift between items
    });
  }, []);

  return (
    <div className="container">
      <h1 className="red-text text-center font-bold text-3xl pt-8">
        Our Partners & Sponsors
      </h1>

      {/* Materialize CSS Carousel */}
      <div className="carousel">
        <a className="carousel-item" href="#one!">
          <img src="/images/1.png" alt="Image 1" />
        </a>
        <a className="carousel-item" href="#two!">
          <img src="/images/2.png" alt="Image 2" />
        </a>
        <a className="carousel-item" href="#three!">
          <img src="/images/3.png" alt="Image 3" />
        </a>
        <a className="carousel-item" href="#four!">
          <img src="/images/4.png" alt="Image 4" />
        </a>
        <a className="carousel-item" href="#five!">
          <img src="/images/5.png" alt="Image 5" />
        </a>
      </div>
    </div>
  );
}
