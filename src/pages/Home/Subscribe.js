import React from "react";

function Subscribe() {
  return (
    <div className="max-w-[1320px] mx-auto  my-10">
      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 py-5 px-5 sm:px-12">
          <div className="h-full w-full   flex ">
            <h1 className="text-3xl font-bold text-left">
              Subscribe and Get Your 5 Steps Golden Visa Guide
            </h1>
          </div>

          <div>
            <div className="flex items-center mt-4 lg:mt-6">
              <input
                type="text"
                placeholder="hello@gmail.com"
                className="border-2 border-black rounded-l-lg h-[50px] bold w-full lg:w-[70%] p-2"
              />
              <button className="h-[50px] w-[180px] text-white text-[15px] rounded-r-lg font-semibold bg-black">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
