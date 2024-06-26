import React from "react";
import { cardData } from "../../assest/data/placedata";
function Place() {
  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="my-5 mx-10">
        <h1 className="text-[18px] text-gray-600 text-left font-semibold">
          WHAT IS THIS PLACE
        </h1>
        <h1 className="text-[35px] text-left font-medium font-sanss">
          The Magic of Puerto Galera
        </h1>
      </div>
      {cardData.map((card, index) => (
        <div key={index} className="bg-accent/20 my-5">
          <div className="max-w-[1320px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-5 px-5 sm:px-12 gap-5">
            {card.order === "imageFirst" && (
              <div className="flex md:col-span-1">
                <img
                  src={card.image}
                  alt="bannerImage"
                  className="lg:rounded-full lg:max-w-[300px] w-full sm:h-[400px] md:w-[900px] md:h-[500px] lg:h-auto rounded-lg object-fit object-cover"
                />
              </div>
            )}
            <div
              className={`md:col-span-2 my-10 flex flex-col justify-center ${
                card.order === "textFirst" ? "md:order-last" : ""
              }`}
            >
              <h1 className="text-[30px] font-bold opacity-85 my-5 text-left sm:text-center lg:text-left">
                {card.title}
              </h1>
              <p className="text-[17px] text-gray-500 text-left lg:text-left">
                {card.description}
              </p>
            </div>
            {card.order === "textFirst" && (
              <div className="flex justify-center lg:order-last order-first">
                <img
                  src={card.image}
                  alt="bannerImage"
                  className="lg:rounded-full lg:max-w-[300px] w-full sm:h-[400px] md:h-[500px] md:w-[900px] lg:h-auto rounded-lg object-fit object-cover"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Place;
