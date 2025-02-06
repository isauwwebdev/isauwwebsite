"use client";
import React from "react";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <div
      className="relative flex items-center justify-center w-40 h-40 bg-center bg-cover"
      style={{ backgroundImage: "url('/images/star.png')" }}
    >
      <CountUp
        start={0}
        end={200}
        duration={20}
        suffix="+"
        className="text-3xl font-bold text-white"
      />
    </div>
  );
}
