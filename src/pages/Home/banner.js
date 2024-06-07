import React from "react";
import BannerImage from "../../assest/images/banner-image.jpg";
import BannerImage2 from "../../assest/images/banner-baground.jpg";

function Banner() {
  return (
    <div className="max-w-[1320px] px-8 mx-auto my-12 flex flex-col lg:flex-row">
      <div className="lg:w-[60%] text-left sm:text-[30px]  py-10">
        <p className="text-[36px] sm:text-[44px] md:text-[54px] lg:text-[68px] font-bold bg-clip-text text-transparent  from-blue-500 to-gray-500 bg-textImage">
          YOUR NEW HOME
        </p>
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[68px] font-bold  bg-clip-text text-transparent  from-pink-500 to-violet-500 bg-textImage2">
          IN PARADISE
        </h2>
        <p className="text-[15px] sm:text-[18px] my-5 text-gray-500">
          Over twenty years finding the best second homes for your family in the
          hot tropics of Galera. We do it all from residence permits to property
          management.
        </p>

        <div className="flex w-[90%] items-center my-[60px] flex-col sm:flex-row">
          <input
            type="text"
            placeholder="+ 324-45845222"
            className="border-2 text-[15px] border-yellow-400 rounded-l-lg h-[40px] w-full sm:w-auto sm:flex-1 p-2"
          />
          <button className="h-[40px] w-full sm:w-auto sm:flex-0 flex items-center justify-center text-white text-[15px] rounded-r-lg font-semibold bg-yellow-400 mt-2 sm:mt-0 px-4">
            Request a call now
          </button>
        </div>
      </div>
      <div className="relative flex justify-center lg:justify-end lg:w-[50%]">
        <div className="relative">
          <img
            src={BannerImage2}
            alt="backgroundImage"
            className="absolute top-0 left-0 w-full h-full lg:rounded-full lg:max-w-[350px] sm:h-[400px] md:w-[900px] md:h-[500px] lg:h-auto rounded-lg img-hover"
            style={{ objectFit: "cover", zIndex: 0 }}
          />

          <div className="absolute top-[-25px] right-0   p-4 z-10 flex flex-col items-start ">
            <span className=" text-4xl font-bold font-sanss   text-yellow-300">
              Hot
            </span>
            <span className=" text-4xl font-bold font-sanss  text-yellow-300">
              Hot
            </span>
            <span className=" text-4xl font-bold font-sanss  text-yellow-300">
              Hot
            </span>
          </div>
          <img
            src={BannerImage}
            alt="bannerImage"
            className="relative lg:rounded-full lg:max-w-[350px] w-full sm:h-[400px] sm:w-[600px]  md:w-[900px] md:h-[500px] lg:h-auto rounded-lg"
            style={{
              objectFit: "cover",
              zIndex: 1,
              transform: "translateX(20px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
