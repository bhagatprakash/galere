import React from "react";
import place from "../../assest/images/place-1.jpg";
import place1 from "../../assest/images/place-2.jpg";
import place2 from "../../assest/images/place-3.jpg";

function Place() {
  return (
    <div className="max-w-[1320px] mx-auto ">
      <div className="my-5 mx-10">
        <h1 className="text-[18px]  text-gray-600 text-left font-semibold ">
          WHAT IS THIS PLACE
        </h1>
        <h1 className="text-[35px] text-left font-semibold ">
          The Magic of Puerto Galera
        </h1>
      </div>
      {/* card  */}
      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 md:grid-cols-1 md:text-center md:justify-items-center lg:grid-cols-3 py-5 px-5 sm:px-12 gap-5">
          {/* image */}
          <div className="flex justify-center md:col-span-1">
            <img
              src={place}
              alt="bannerImage"
              className="rounded-full w-full max-w-[350px] h-[500px] object-cover"
            />
          </div>

          <div className="md:col-span-2 my-10 flex flex-col justify-center">
            <h1 className="text-[30px] font-bold my-5 text-left sm:text-center lg:text-left">
              Real Estate Boom in The Last 10 Years
            </h1>
            <p className="text-[18px] text-gray-500 text-left sm:text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
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
        <div className="max-w-[1320px] grid grid-cols-1 md:grid-cols-1 md:text-center md:justify-items-center lg:grid-cols-3 py-5 px-5 sm:px-12 gap-5">
          {/* image */}

          <div className="md:col-span-2 my-10 flex flex-col justify-center">
            <h1 className="text-[30px] font-bold my-5 text-left sm:text-center lg:text-left">
              The Perfect Lifestyle for You
            </h1>
            <p className="text-[18px] text-gray-500 text-left sm:text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
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
          <div className="flex justify-center md:col-span-1">
            <img
              src={place1}
              alt="bannerImage"
              className="rounded-full w-full max-w-[350px] h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* card-3  */}

      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 md:grid-cols-1 md:text-center md:justify-items-center lg:grid-cols-3 py-5 px-5 sm:px-12 gap-5">
          {/* image */}
          <div className="flex justify-center md:col-span-1">
            <img
              src={place2}
              alt="bannerImage"
              className="rounded-full w-full max-w-[350px] h-[500px] object-cover"
            />
          </div>

          <div className="md:col-span-2 my-10 flex flex-col justify-center">
            <h1 className="text-[30px] font-bold my-5 text-left sm:text-center lg:text-left">
              Real Estate Boom in The Last 10 Years
            </h1>
            <p className="text-[18px] text-gray-500 text-left sm:text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
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
