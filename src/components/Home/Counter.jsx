"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
  { id: 1, name: "Years of operation", value: 20, suffix: "+" },
  { id: 2, name: "Past members", value: 1000, suffix: "+" },
  { id: 3, name: "Funds raised", value: 100000, suffix: "+" },
  { id: 4, name: "Events organized", value: 100, suffix: "+" },
];

export default function Counter() {
  return (
    <div className="bg-white py-24 sm:pt-6 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-isauwRed sm:text-5xl">
              Serving the community something
            </h2>
            <p className="mt-4 text-lg/8 text-gray-600">
              Serving the UW and Seattle community something something something
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm/6 font-semibold text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
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
        </div>
      </div>
    </div>
  );
}
