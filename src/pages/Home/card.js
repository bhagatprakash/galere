import React from "react";
import { cardData } from "../../assest/data/cardData";

function Cards() {
  return (
    <div className="max-w-[1320px] mx-auto relative">
      <div className="my-3 mx-10">
        <h1 className="text-[18px] text-gray-600 text-left font-semibold">
          PROPERTIES FOR RENT AND SELL
        </h1>
        <h1 className="text-[35px] text-left font-medium font-sanss">
          Our Most Recent Selection
        </h1>
      </div>
      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 gap-6 sm:text-center md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-12">
          {cardData.map((card, index) => (
            <div key={index} className="my-6 rounded-lg">
              <div className="lg:h-[225px] h-[350px] overflow-hidden relative rounded-lg">
                <img
                  src={card.imgSrc}
                  alt="card"
                  className="w-full h-full object-cover hover:scale-125 duration-1000 rounded-t-lg"
                  style={{ objectFit: "cover" }}
                />
                <span className="absolute top-0 right-0 bg-gray-500 rounded-[10px] opacity-80 m-2 p-2 text-[15px] font-semibold text-white">
                  {card.status}
                </span>
              </div>
              <h5 className="text-[20px] text-left font-bold my-3 opacity-90">
                {card.title}
              </h5>
              <p className="text-[17px] text-left my-3">
                <i className="fa-solid fa-location-dot text-gray-500 mx-2"></i>
                {card.location}
              </p>
              <div className="pt-4 pb-2 flex justify-between items-center mr-2">
                <span className="inline-block text-[22px] font-bold text-left">
                  <span className="text-yellow-400 font-extrabold mx-2">$</span>
                  {card.price} {card.priceSuffix}
                </span>
                <div className="flex space-x-4">
                  <span className="inline-block text-[15px] font-semibold text-gray-800">
                    <i className="fa-solid fa-bed mx-1 text-[18px] text-gray-800"></i>{" "}
                    {card.beds}
                  </span>
                  <span className="inline-block text-[15px] font-semibold text-gray-800">
                    <i className="fa-solid fa-bath mx-1 text-[18px] text-gray-800"></i>{" "}
                    {card.baths}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Cards;
