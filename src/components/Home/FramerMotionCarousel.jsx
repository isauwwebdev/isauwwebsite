import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FigmaLogoIcon,
  SketchLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  VercelLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const slides = [
  { icon: "/images/ISAUW_Logo_White_bird.png", height: "220" },
  { icon: "/images/catalyst_logo_white.png", height: "220" },
  { icon: "/images/IPA_logo_white.png", height: "120" },
];

const CenterModeCarousel = () => {
  const duplicatedSlides = [...slides, ...slides];

  const FAST_DURATION = 5;
  const SLOW_DURATION = 10;

  const [duration, setDuration] = useState(FAST_DURATION);
  // TODO: implement this https://www.youtube.com/watch?v=Ot4nZ6UjJLE
  // TODO: be able to scroll through the carousel (dragging)
  // TODO: make the carousel infinitely scroll (no going back to original index)

  return (
    <div
      className="relative h-[30rem] overflow-hidden py-12 mx-auto bg-isauwRed align-center my-auto justify-center flex items-center"
      style={{ width: "70%" }}
    >
      <div className="absolute left-0 right-0 top-0 bottom-0 mx-auto inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-isauwRed before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-isauwRed after:to-transparent after:filter after:blur-3"></div>

      <motion.div
        className="flex h-full items-center"
        animate={{
          x: ["0%", "-70%"],
          transition: {
            ease: "linear",
            duration: duration,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${120 / slides.length}%` }}
          >
            <div className="flex items-center justify-center h-full">
              <img
                src={slide.icon}
                alt="sponsor logo"
                style={{ height: `${slide.height}px` }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CenterModeCarousel;
