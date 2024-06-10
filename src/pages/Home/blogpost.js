import React from "react";
import { cardData } from "../../assest/data/blogdata";

function BlogPost() {
  return (
    <div className="max-w-[1320px] mx-auto ">
      <div className=" mx-4  my-5 sm:mx-10">
        <p className="text-[15px]  text-gray-600 text-left font-semibold ">
          BLOG POSTS
        </p>
        <h1 className="text-[24px]  sm:text-[35px] text-left font-medium font-sanss">
          Amazing Tips to Survive
        </h1>
      </div>
      <div className="bg-accent/20">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="max-w-[1320px] flex flex-col md:flex-row px-4 sm:px-12 py-5 sm:py-0"
          >
            <div className="text-left md:w-1/2">
              <h1 className="text-[24px] sm:text-[30px] font-semibold opacity-90">
                {card.title}
              </h1>
              <p className="text-[16px] sm:text-[18px] text-gray-500">
                {card.description}
              </p>
            </div>

            <div className="relative inline-block md:w-1/2 mt-4 sm:mt-40px sm:ml-4">
              <img
                src={card.imgSrc}
                alt={card.altText}
                className="rounded-[20px] object-cover w-full h-[300px]"
                style={{ objectFit: "cover" }}
              />
              <span className="absolute bottom-0 right-0 mb-2 mr-2 bg-gray-200 p-2 w-[120px] rounded">
                {card.readTime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPost;
