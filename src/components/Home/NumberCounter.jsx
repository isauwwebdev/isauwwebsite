"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
  { id: 1, name: "Years of Operation", value: 20, suffix: "+" },
  { id: 2, name: "Past Members", value: 1000, suffix: "+" },
];

export default function Counter() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 h-screen flex items-center justify-center">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15"
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl text-center">
          <h2 className="text-base/8 font-semibold text-indigo-400">
            Our track record
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Trusted by thousands of creators worldwide
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
            >
              <dt className="text-sm/6">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={20}
                  suffix={stat.suffix}
                />
              </dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center justify-center gap-16 text-center mt-16 w-full">
          <div className="flex items-center justify-center w-full">
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}
