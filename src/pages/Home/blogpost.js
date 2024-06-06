import React from "react";
import card from "../../assest/images/fcard.jpg";
import card1 from "../../assest/images/fcard-2.jpg";

function BlogPost() {
  return (
    <div className="max-w-[1320px] mx-auto ">
      <div className=" mx-4  my-5 sm:mx-10">
        <h1 className="text-[15px]  text-gray-600 text-left font-semibold ">
          BLOG POSTS
        </h1>
        <h1 className="text-[24px]  sm:text-[35px] text-left font-semibold ">
          Amazing Tips to Survive
        </h1>
      </div>
      <div className="bg-accent/20">
        <div className="max-w-[1320px] flex flex-col md:flex-row px-4 sm:px-12 py-5 sm:py-0">
          <div className="text-left md:w-1/2">
            <h1 className="text-[24px] sm:text-[30px] font-semibold">
              Find Cheap Flights and Transfer in Puerto Galera
            </h1>
            <p className="text-[16px] sm:text-[18px]">
              Aliquet donec cras amet orci in in neque. Ut sed diam quis
              consectetur purus lorem eu, sit. Aliquam eget arcu sed urna
              feugiat. In integer nisl at dui malesuada. Diam pellentesque
              lobortis elementum lacus.
            </p>
          </div>

          <div className="relative inline-block md:w-1/2 mt-4 sm:mt-0 sm:ml-4">
            <img
              src={card}
              alt="image"
              className="rounded-lg object-cover w-full h-[370px]"
            />
            <span className="absolute bottom-0 right-0 mb-2 mr-2 bg-white p-1 rounded">
              5 min Read
            </span>
          </div>
        </div>
        {/* card-2 */}
        <div className="max-w-[1320px] flex flex-col md:flex-row py-10 px-4 sm:px-12">
          <div className="text-left md:w-1/2">
            <h1 className="text-[24px] sm:text-[30px] my-5 font-semibold">
              10 Tips to Get the Best Fishing Experience in Puerto Galera
            </h1>
            <p className="text-[16px] sm:text-[18px]">
              Aliquet donec cras amet orci in in neque. Ut sed diam quis
              consectetur purus lorem eu, sit. Aliquam eget arcu sed urna
              feugiat. In integer nisl at dui malesuada. Diam pellentesque
              lobortis elementum lacus.
            </p>
          </div>

          <div className="relative inline-block md:w-1/2 mt-4 sm:mt-0 sm:ml-4">
            <img
              src={card1}
              alt="image"
              className="rounded-lg object-cover w-full h-[370px]"
            />
            <span className="absolute bottom-0 right-0 mb-2 mr-2 bg-white p-1 rounded">
              5 min Read
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
