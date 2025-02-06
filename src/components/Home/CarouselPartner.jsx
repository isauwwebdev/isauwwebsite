import React, { useEffect } from "react";
import M from "materialize-css"; // Import Materialize JavaScript
import "materialize-css/dist/css/materialize.min.css"; // Import Materialize CSS styles

export default function CarouselPartner() {
  useEffect(() => {
    // Initialize the Materialize carousel when the component mounts
    const elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems);

    // Optional: jQuery-style initialization (if using jQuery)
    // $('.carousel').carousel();
  }, []);

  return (
    <div className="container">
      <h1 className="red-text text-center font-bold text-3xl pt-8">
        Our Partners & Sponsors
      </h1>

      {/* Materialize Carousel */}
      {/* TODO: try to understand the carousel materialize CSS and how to use it */}
      {/* https://www.youtube.com/watch?v=rm8737zd-B8 */}
      {/* https://www.youtube.com/watch?v=G3_S3Kma-iM */}
      <div className="carousel center">
        <a className="carousel-item" href="#one!">
          <img src="/images/1.png" alt="Image 1" />
        </a>
        <a className="carousel-item" href="#two!">
          <img src="/images/2.png" alt="Image 2" />
        </a>
      </div>
    </div>
  );
}
