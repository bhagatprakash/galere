import React from "react";
import card from "../../assest/images/card-1.jpg";
import card1 from "../../assest/images/card-3.jpg";
import card2 from "../../assest/images/card-4.jpg";
import card3 from "../../assest/images/card-5.jpg";
import card4 from "../../assest/images/card-6.jpg";

function Cards() {
  return (
    <div className="max-w-[1320px] mx-auto relative">
      <div className="my-5 mx-10">
        <h1 className="text-[18px]  text-gray-600 text-left font-semibold ">
          PROPERTIES FOR RENT AND SELL
        </h1>
        <h1 className="text-[35px] text-left font-semibold ">
          Our Most Recent Selection
        </h1>
      </div>
      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 gap-6 sm:text-center md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-12">
          {/* card-1  */}
          <div className="my-6  rounded-lg ">
            <div className="lg:h-[225px]  h-[350px] overflow-hidden relative rounded-lg">
              <img
                src={card}
                alt="card"
                className="w-full h-full object-cover hover:scale-125 duration-1000 rounded-t-lg content-fit"
                style={{ objectFit: "cover" }}
              />
              <span className="absolute top-0 right-0 bg-gray-500 rounded-[10px] opacity-80 m-2 p-2 text-[15px] font-semibold text-white">
                For Sale
              </span>
            </div>

            <h5 className="text-[22px] text-left font-bold bold my-5">
              Stunning Apartment With Sea Views
            </h5>

            <p className="text-[17px] text-left my-5">
              <i className="fa-solid fa-location-dot text-gray-500 mx-2"></i>
              Isla Negros Dumaguete, Galera.
            </p>

            <div className="pt-4 pb-2   flex justify-between items-center mr-2">
              <span className="inline-block text-[22px] font-bold text-left">
                <span className="text-yellow-400 font-extrabold mx-2">$</span>
                5,000,000
              </span>
              <div className="flex space-x-4">
                <span className="inline-block text-[15px] font-semibold text-gray-800">
                  <i className="fa-solid fa-bed mx-1 text-[18px] text-gray-800"></i>{" "}
                  5
                </span>
                <span className="inline-block text-[15px] font-semibold text-gray-800">
                  <i className="fa-solid fa-bath mx-1 text-[18px] text-gray-800"></i>{" "}
                  6
                </span>
              </div>
            </div>
          </div>
          {/* card-2  */}
          <div className="my-6  rounded-lg ">
            <div className="lg:h-[225px]  h-[350px] overflow-hidden relative rounded-lg">
              <img
                src={card1}
                alt="card"
                className="w-full h-full object-cover hover:scale-125 duration-1000 rounded-t-lg"
                style={{ objectFit: "cover" }}
              />
              <span className="absolute top-0 right-0 bg-gray-500 rounded-[10px] opacity-80 m-2 p-2 text-[15px] font-semibold text-white">
                For Sale
              </span>
            </div>

            <h5 className="text-[23px] text-left font-bold bold my-5">
              Incredible Villa With Sea Views
            </h5>

            <p className="text-[17px] text-left my-5">
              <i className="fa-solid fa-location-dot text-gray-500 mx-2"></i>
              Flores de Verano, Galera.
            </p>

            <div className="pt-4 pb-2   flex justify-between items-center mr-2">
              <span className="inline-block text-[22px] font-bold text-left">
                <span className="text-yellow-400 font-extrabold mx-2">$</span>
                900 <span className="text-yellow-400">/Month</span>
              </span>
              <div className="flex space-x-4">
                <span className="inline-block text-[15px] font-semibold text-gray-800">
                  <i className="fa-solid fa-bed mx-1 text-[18px] text-gray-800"></i>{" "}
                  5
                </span>
                <span className="inline-block text-[15px] font-semibold text-gray-800">
                  <i className="fa-solid fa-bath mx-1 text-[18px] text-gray-800"></i>{" "}
                  6
                </span>
              </div>
            </div>
          </div>
          {/* card-3  */}
          <div className="my-6  rounded-lg ">
            <div className="lg:h-[225px]  h-[350px] overflow-hidden relative rounded-t-lg">
              <img
                src={card3}
                alt="card"
                className="w-full h-full object-cover hover:scale-125 duration-1000 rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <span className="absolute top-0 right-0 bg-gray-500 rounded-[10px] opacity-80 m-2 p-2 text-[15px] font-semibold text-white">
                For Sale
              </span>
            </div>

            <h5 className="text-[23px] text-left font-bold bold my-5">
              Beautiful New Villa in the Beach
            </h5>

            <p className="text-[17px] text-left my-5">
              <i className="fa-solid fa-location-dot text-gray-500 mx-2"></i>
              Tributo de la Gracia, Galera.
            </p>

            <div className="pt-4 pb-2   flex justify-between items-center mr-2">
              <span className="inline-block text-[22px] font-bold text-left">
                <span className="text-yellow-400 font-extrabold mx-2">$</span>
                5,000,000 <span className="text-yellow-400">/Month</span>
              </span>
              <div className="flex space-x-4">
                <span className="inline-block text-[15px] font-semibold text-gray-800">
                  <i className="fa-solid fa-bed mx-1 text-[18px] text-gray-800"></i>{" "}
                  5
                </span>
                <span className="inline-block text-[15px] font-semibold text-gray-800">
                  <i className="fa-solid fa-bath mx-1 text-[18px] text-gray-800"></i>{" "}
                  6
                </span>
              </div>
            </div>
          </div>
          {/* card-4  */}
          <div className="my-6  rounded-lg ">
            <div className="lg:h-[225px]  h-[350px] overflow-hidden relative rounded-t-lg">
              <img
                src={card2}
                alt="card"
                className="w-full h-full object-cover hover:scale-125 duration-1000 rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <span className="absolute top-0 right-0 bg-gray-500 rounded-[10px] opacity-80 m-2 p-2 text-[15px] font-semibold text-white">
                For Sale
              </span>
            </div>

            <h5 className="text-[23px] text-left font-bold bold my-5">
              Apartment With Private Beach and Bar
            </h5>

            <p className="text-[17px] text-left my-5">
              <i className="fa-solid fa-location-dot text-gray-500 mx-2"></i>
              Gloria del Dorada, Galera.
            </p>

            <div className="pt-4 pb-2   flex justify-between items-center mr-2">
              <span className="inline-block text-[22px] font-bold text-left">
                <span className="text-yellow-400 font-extrabold mx-2">$</span>
                1.200
              </span>
              <div className="flex space-x-4">
                <span className="inline-block text-[15px] font-semibold text-gray-800">
                  <i className="fa-solid fa-bed mx-1 text-[18px] text-gray-800"></i>{" "}
                  5
                </span>
                <span className="inline-block text-[15px] font-semibold text-gray-800">
                  <i className="fa-solid fa-bath mx-1 text-[18px] text-gray-800"></i>{" "}
                  6
                </span>
              </div>
            </div>
          </div>
          {/* card-5  */}
          <div className="my-6  rounded-lg ">
            <div className="lg:h-[225px]  h-[350px] overflow-hidden relative rounded-t-lg">
              <img
                src={card4}
                alt="card"
                className="w-full h-full object-cover hover:scale-125 duration-1000 rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <span className="absolute top-0 right-0 bg-gray-500 rounded-[10px] opacity-80 m-2 p-2 text-[15px] font-semibold text-white">
                For Sale
              </span>
            </div>

            <h5 className="text-[23px] text-left font-bold bold my-5">
              Floating Villa That You Will Not Forget
            </h5>

            <p className="text-[17px] text-left my-5">
              <i className="fa-solid fa-location-dot text-gray-500 mx-2"></i>
              Mirador de la Gloria, Lombok.
            </p>

            <div className="pt-4 pb-2   flex justify-between items-center mr-2">
              <span className="inline-block text-[22px] font-bold text-left">
                <span className="text-yellow-400 font-extrabold mx-2">$</span>
                3.500.000
              </span>
              <div className="flex space-x-4">
                <span className="inline-block text-[15px] font-semibold text-gray-800">
                  <i className="fa-solid fa-bed mx-1 text-[18px] text-gray-800"></i>{" "}
                  5
                </span>
                <span className="inline-block text-[15px] font-semibold text-gray-800">
                  <i className="fa-solid fa-bath mx-1 text-[18px] text-gray-800"></i>{" "}
                  7
                </span>
              </div>
            </div>
          </div>
          {/* card-6  */}
          <div className="my-6  rounded-lg ">
            <div className="lg:h-[225px]  h-[350px] overflow-hidden relative rounded-t-lg">
              <img
                src={card}
                alt="card"
                className="w-full h-full object-cover hover:scale-125 duration-1000 rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <span className="absolute top-0 right-0 bg-gray-500 rounded-[10px] opacity-80 m-2 p-2 text-[15px] font-semibold text-white">
                For Sale
              </span>
            </div>

            <h5 className="text-[23px] text-left font-bold bold my-5">
              Beautiful First Line Apartment in Holend
            </h5>

            <p className="text-[17px] text-left my-5">
              <i className="fa-solid fa-location-dot text-gray-500 mx-2"></i>
              Moscatel de las Flores, Galera.
            </p>

            <div className="pt-4 pb-2   flex justify-between items-center mr-2">
              <span className="inline-block text-[22px] font-bold text-left">
                <span className="text-yellow-400 font-extrabold mx-2">$</span>
                120.000
              </span>
              <div className="flex space-x-4">
                <span className="inline-block text-[15px] font-semibold text-gray-800">
                  <i className="fa-solid fa-bed mx-1 text-[18px] text-gray-800"></i>{" "}
                  3
                </span>
                <span className="inline-block text-[15px] font-semibold text-gray-800">
                  <i className="fa-solid fa-bath mx-1 text-[18px] text-gray-800"></i>{" "}
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
