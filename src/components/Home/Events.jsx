import React from "react";

export default function Events() {
  return (
    <div className="bg-isauwCreme p-5">
      <h1 className="text-6xl text-isauwRed text-center pt-12 font-bold mb-4">
        Our Events
      </h1>
      <p className="font-spartan text-md text-center">
        The Indonesian Students Organization at UW hosts a variety of events in
        UW, ranging from cultural events, career-building events, social events,
        and more! Follow our social media platforms for future events like
        these!
      </p>
      <div className="flex justify-center gap-4">
        <div class="relative flex flex-col my-6 bg-isauwRed shadow-sm border border-slate-200 rounded-lg w-96">
          <div class="relative h-56 m-4 mb-2 overflow-hidden text-white rounded-md">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="card-image"
            />
          </div>
          <div class="p-4">
            <h6 class="mb-2 text-isauwCreme font-spartan text-xl font-semibold">
              Seattle 101
            </h6>
            <p class="text-isauwCreme leading-normal text-sm font-spartan font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              itaque non dicta possimus quaerat asperiores quisquam sequi est
              officiis sint provident suscipit architecto ex illo ratione animi
              magni, beatae et!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
