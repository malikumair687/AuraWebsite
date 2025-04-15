import React from "react";

const Popular = () => {
  return (
    <div className="w-full p-10 min-h-screen flex flex-col gap-10 bg-white">
      {/* First Row */}
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-4 p-5 lg:w-1/2">
          <h3 className="px-4 py-1 text-orange-500 bg-orange-100 rounded-full w-fit font-medium">
            Choose Your Place
          </h3>
          <h1 className="text-5xl font-bold">Popular Destinations</h1>
          <p className="text-lg text-gray-600">
            Join us as we explore the wonders of the globe, one incredible
            journey at a time.
          </p>
          <button className="px-6 py-2 bg-[#FB5607] text-white text-lg font-semibold rounded-md w-fit hover:bg-orange-600 transition">
            Find Packages
          </button>
        </div>

        <div className="flex gap-6 lg:w-1/2">
          <div className="relative w-1/2 h-72 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/web.avif"
              alt="London"
            />
            <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
              Web Development
            </p>
          </div>
          <div className="relative w-1/2 h-72 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/contentW.avif"
              alt="London"
            />
            <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
              Content Writing
            </p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="relative w-full lg:w-1/3 h-64 rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/graphics.webp"
            alt="London"
          />
          <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
            Graphics Designing
          </p>
        </div>
        <div className="relative w-full lg:w-1/3 h-64 rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/shopify.avif"
            alt="Europe"
          />
          <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
            Shopify Store
          </p>
        </div>
        <div className="relative w-full lg:w-1/3 h-64 rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/amazon.avif"
            alt="Africa"
          />
          <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
            Amazon Store
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="relative w-full lg:w-1/3 h-64 rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/videoEd.webp"
            alt="London"
          />
          <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
            Video Editing
          </p>
        </div>
        <div className="relative w-full lg:w-1/3 h-64 rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/Game.avif"
            alt="Europe"
          />
          <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
            Game Development
          </p>
        </div>
        <div className="relative w-full lg:w-1/3 h-64 rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/contentSp.webp"
            alt="Africa"
          />
          <p className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">
            Content Specialist
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popular;
