import { CheckCircleIcon } from "@heroicons/react/20/solid";

const benefits = [
  "Competitive salaries",
  "Flexible work hours",
  "30 days of paid vacation",
  "Annual team retreats",
  "Benefits for you and your family",
  "A great work environment",
];

function NewVision(props) {
  return (
    <div className="bg-white py-24 sm:pt-4">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-isauwRed/95 backdrop-blur-lg bg-opacity-75 px-6 py-16 ring-1 ring-isauwRed/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="text-pretty text-4xl font-bold tracking-wide text-white sm:text-4xl">
                Vision
              </h2>
              <p className="mt-2 text-pretty text-lg font-medium tracking-wide text-gray-300">
                To celebrate Indonesia's diverse culture by fostering a place of
                belonging and engaging in activities that build understanding
                and advocacy. We believe in fostering a sense of belonging by
                encouraging participation in cultural initiatives, networking
                opportunities, and advocacy efforts.
              </p>
              <h2 className="mt-8 text-pretty text-4xl font-bold tracking-wide text-white sm:text-4xl">
                Mission
              </h2>
              <p className="mt-2 text-pretty text-lg font-medium tracking-wide text-gray-300">
                To be a leading student organization that promotes Indonesian
                culture, identity, and diversity in Seattle and beyond.We strive
                to create impactful experiences that empower our members,
                enhance cultural understanding, and inspire future generations.
              </p>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </div>
  );
}

export default NewVision;
