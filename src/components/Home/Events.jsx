import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const cards = [
  {
    title: "Event 1",
    description: "Short description about Event 1",
    imgSrc:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Event 2",
    description: "Short description about Event 2.",
    imgSrc:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Event 3",
    description: "Short description about Event 3.",
    imgSrc:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Event 4",
    description: "Short description about Event 4.",
    imgSrc:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Event 5",
    description: "Short description about Event 5.",
    imgSrc:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Event 6",
    description: "Short description about Event 6.",
    imgSrc:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Event 7",
    description: "Short description about Event 7.",
    imgSrc:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Event 8",
    description: "Short description about Event 8.",
    imgSrc:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Event 9",
    description: "Short description about Event 9.",
    imgSrc:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export default function Events() {
  return (
    <div className="bg-isauwCreme p-5">
      <h1 className="text-6xl text-isauwRed text-center pt-12 font-bold mb-4">
        Our Events
      </h1>
      <p className="font-spartan text-md text-center mb-lg-8 mb-sm-2">
        The Indonesian Students Organization at UW hosts a variety of events in
        UW, ranging from cultural events, career-building events, social events,
        and more! Follow our social media platforms for future events like
        these!
      </p>
      <SwipeCarousel />
    </div>
  );
}

const SwipeCarousel = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const dragX = useMotionValue(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2); // Tablet
      } else {
        setCardsPerSlide(3); // Desktop
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);

    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(cards.length / cardsPerSlide);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      if (dragX.get() === 0) {
        setCardIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, [dragX, totalSlides]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && cardIndex < totalSlides - 1) {
      setCardIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && cardIndex > 0) {
      setCardIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-isauwCreme py-8">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${cardIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex w-full"
      >
        {[...Array(totalSlides)].map((_, idx) => (
          <div key={idx} className="flex w-full justify-center gap-4 shrink-0">
            {cards
              .slice(idx * cardsPerSlide, idx * cardsPerSlide + cardsPerSlide)
              .map((card, subIdx) => (
                <motion.div
                  key={subIdx}
                  animate={{ scale: 0.95 }}
                  transition={SPRING_OPTIONS}
                  whileHover={{ y: -10 }} // Moves the card up by 10px on hover
                  className="relative flex flex-col my-6 bg-isauwRed hover:opacity-90 shadow-sm border border-slate-200 rounded-lg w-96"
                >
                  <div className="relative h-56 m-4 mb-2 overflow-hidden text-white rounded-md">
                    <img
                      src={card.imgSrc}
                      alt="card-image"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h6 className="mb-2 text-isauwCreme font-spartan text-xl font-semibold">
                      {card.title}
                    </h6>
                    <p className="text-isauwCreme leading-normal text-sm font-spartan font-light mb-5">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        ))}
      </motion.div>
      <Dots cardIndex={cardIndex} setCardIndex={setCardIndex} totalSlides={totalSlides} />
      <div className="flex w-full justify-center mt-11">
        <a href="https://www.isauw.org/events" class="text-white font-semibold bg-isauwGold rounded-lg text-sm px-5 py-2.5 hover:opacity-30 hover:scale-90">Learn more</a>
      </div>
    </div>
  );
};

const Dots = ({ cardIndex, setCardIndex, totalSlides }) => (
  <div className="mt-4 flex w-full justify-center gap-2">
    {Array.from({ length: totalSlides }).map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCardIndex(idx)}
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          transition: "background-color 0.3s",
          backgroundColor: idx === cardIndex ? "#7d000080" : "#7d0000",
        }}
      />
    ))}
  </div>
);
