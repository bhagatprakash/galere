import React from "react";
import place from "../../assest/images/place-1.jpg";
import place1 from "../../assest/images/place-2.jpg";
import place2 from "../../assest/images/place-3.jpg";

function Place() {
  return (
    <div className="max-w-[1320px] mx-auto relative">
      <div className="my-5 mx-10">
        <h1 className="text-[18px]  text-gray-600 text-left font-semibold ">
          WHAT IS THIS PLACE
        </h1>
        <h1 className="text-[35px] text-left font-semibold ">
          The Magic of Puerto Galera
        </h1>
      </div>
      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 py-5 px-5 sm:px-12">
          {/* image */}
          <div className="h-full w-full sm:w-[350px]  flex ">
            <img
              src={place}
              alt="bannerImage"
              className="rounded-full w-full sm:w-[350px] text-left"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div>
            <h1 className="text-[30px] font-bold my-5 text-left sm:text-center lg:text-left">
              Discover the Hidden Gem of This Planet
            </h1>
            <p className="text-[18px] text-gray-500 text-left sm:text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </div>

      {/* card-2  */}

      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 py-5 px-5 sm:px-12">
          <div className="w-full lg:justify-start">
            <h1 className="text-[30px] font-bold my-5 text-left sm:text-center lg:text-left">
              The Perfect Lifestyle for You
            </h1>
            <p className="text-[18px] text-gray-500 text-left sm:text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>

          {/* image */}
          <div className="h-full w-full sm:w-[350px] sm:mx-auto flex ">
            <img
              src={place1}
              alt="bannerImage"
              className="rounded-full w-full sm:w-[350px] text-left lg:justify-end"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* card-3  */}

      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 py-5 px-5 sm:px-12">
          {/* image */}
          <div className="h-full w-full sm:w-[350px]  flex ">
            <img
              src={place2}
              alt="bannerImage"
              className="rounded-full w-full sm:w-[350px] text-left lg:justify-start"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div>
            <h1 className="text-[30px] font-bold my-5 text-left sm:text-center lg:text-left">
              Real Estate Boom in The Last 10 Years
            </h1>
            <p className="text-[18px] text-gray-500 text-left sm:text-center lg:text-left lg:justify-end">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place;
