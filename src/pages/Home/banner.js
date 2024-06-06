import React from "react";
import BannerImage from "../../assest/images/banner-image.jpg";

function Banner() {
  return (
    <div className="max-w-[1320px] px-8 mx-auto my-12 flex flex-col lg:flex-row">
      <div className="lg:w-[60%] text-left sm:text-[30px]  py-10">
        <h1 className="text-[36px] sm:text-[44px] md:text-[54px] lg:text-[68px] font-bold bg-clip-text text-transparent  from-blue-500 to-gray-500 bg-textImage">
          YOUR NEW HOME
        </h1>
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[68px] font-bold  bg-clip-text text-transparent  from-pink-500 to-violet-500 bg-textImage2">
          IN PARADISE
        </h2>
        <p className="text-[16px] sm:text-[18px] text-gray-500">
          Over twenty years finding the best second homes for your family in the
          hot tropics of Galera. We do it all from residence permits to property
          management.
        </p>

        <div className="flex items-center mt-4  lg:mt-6">
          <input
            type="text"
            placeholder="+8999 12 322"
            className="border-2 border-yellow-400 rounded-l-lg h-[40px] bold w-full lg:w-[50%] p-2"
          />
          <button className="h-[40px] w-[180px] text-white text-[15px] rounded-r-lg font-semibold bg-yellow-400">
            Request a call now
          </button>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end  ">
        {/* md:w-full */}
        <img
          src={BannerImage}
          alt="bannerImage"
          className="lg:rounded-full lg:max-w-[350px] w-full sm:h-[400px] md:w-[900px] md:h-[500px]  lg:h-auto rounded-lg object-fit"
        />
      </div>
    </div>
  );
}

export default Banner;
