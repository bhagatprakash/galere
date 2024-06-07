import React from "react";

function Subscribe() {
  return (
    <div className="max-w-[1320px] mx-auto  my-10">
      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1  md:grid-cols-2 gap-6  py-5 px-5 sm:px-12">
          <div className="h-full w-full   flex ">
            <h1 className="text-3xl font-bold text-left opacity-85">
              Subscribe and Get Your 5 Steps Golden Visa Guide
            </h1>
          </div>

          <div>
            <div className="flex w-[90%] items-center  flex-col sm:flex-row">
              <input
                type="text"
                placeholder="hello@gmail.com"
                className="border-2 border-black  text-[15px] rounded-l-lg h-[50px] w-full sm:w-auto sm:flex-1 p-2"
              />
              <button className="h-[50px] w-full sm:w-auto sm:flex-0 flex items-center justify-center text-white text-[14px] bg-black rounded-lg font-semibold  mt-2 sm:mt-0 px-4">
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
