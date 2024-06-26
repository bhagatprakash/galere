import React from "react";
import propetyImage from "../../assest/images/propety image.jpg";
import image from "../../assest/images/card-1.jpg";
import image1 from "../../assest/images/card-3.jpg";
import image2 from "../../assest/images/card-4.jpg";
import image3 from "../../assest/images/card-5.jpg";
import image4 from "../../assest/images/card-6.jpg";
import image5 from "../../assest/images/card-1.jpg";
import location from "../../assest/images/location.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuBedDouble } from "react-icons/lu";
import { FaBath } from "react-icons/fa";
import { TbLivePhotoOff } from "react-icons/tb";
import { AiOutlineBoxPlot } from "react-icons/ai";
import { FaUmbrellaBeach } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

function Properties() {
  return (
    <>
      <div className="max-w-[1320px] mx-auto grid grid-cols-1">
        <div className="w-full">
          <img
            src={propetyImage}
            alt="propetyImage"
            className="w-full h-[600px] rounded-lg"
          />
        </div>
      </div>
      {/* contant  */}
      <div className="max-w-[1320px] mx-auto my-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-accent/20 my-5">
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3   gap-5">
            <div className=" md:col-span-1">
              <h1 className="text-[40px] text-left font-bold">5.000.000 $</h1>
              <h2 className="text-[20px] text-left font-bold text-gray-500">
                4.900.000 €
              </h2>
            </div>
            <div className="md:col-span-2  justify-center">
              <h1 className="text-[40px] text-left font-bold">
                Incredible Villa With Sea Views
              </h1>
              <h2 className="flex  text-[16px] text-left font-semibold text-gray-500">
                <FaMapMarkerAlt />
                <span className="mx-3">FLORES DE VERANO, GALERA.</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-accent/20 my-10">
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3   gap-5">
            <div className=" md:col-span-1">
              <h1 className="text-[18px] text-left">Reference</h1>
              <h2 className="text-[17px] text-left font-bold "># PS123456</h2>
            </div>
            <div className="md:col-span-2  justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-left">
                <h1 className="text-[19px]">Bedrooms</h1>
                <h1 className="text-[19px]">Bathrooms</h1>
                <h1 className="text-[19px]">Living Area</h1>
                <h1 className="text-[19px]">Plot Area</h1>
                <h1 className="text-[19px]">To the Beach</h1>
                <h1 className="text-[19px]">Build Year</h1>
                <p className="flex text-xl font-bold">
                  <span className="mx-5 my-1">
                    <LuBedDouble />
                  </span>
                  2
                </p>
                <p className="flex text-xl font-bold">
                  <span className="mx-5 my-1">
                    <FaBath />
                  </span>
                  6
                </p>
                <p className="flex text-xl font-bold">
                  <span className="mx-2 my-1">
                    <TbLivePhotoOff />
                  </span>
                  500
                </p>
                <p className="flex text-xl font-bold">
                  <span className="mx-2 my-1">
                    <AiOutlineBoxPlot />
                  </span>
                  2000
                </p>
                <p className="flex text-xl font-bold">
                  <span className="mx-3 my-1">
                    <FaUmbrellaBeach />
                  </span>
                  250
                </p>
                <p className="flex text-xl font-bold">
                  <span className="mx-3 my-1">
                    <SlCalender />
                  </span>
                  2023
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-accent/20 my-10">
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
            <div className=" md:col-span-1">
              <h1 className="text-[30px] font-medium text-left">
                About the Property
              </h1>
            </div>
            <div className="md:col-span-2  justify-center">
              <p className="text-left text-[17px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit
                amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src={image}
            alt="img"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src={image1}
            alt="img"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src={image2}
            alt="img"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src={image3}
            alt="img"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src={image4}
            alt="img"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src={image5}
            alt="img"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="my-10">
          <div className="bg-accent/20 my-10">
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
              <div className=" md:col-span-1">
                <h1 className="text-[30px] font-medium text-left">
                  Can I Rent it if I Buy it?
                </h1>
              </div>
              <div className="md:col-span-2  justify-center">
                <p className="text-left text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-accent/20 my-10">
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
              <div className=" md:col-span-1">
                <h1 className="text-[30px] font-medium text-left">
                  Do You Offer Property Maintenance?
                </h1>
              </div>
              <div className="md:col-span-2  justify-center">
                <p className="text-left text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-accent/20 my-10">
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
              <div className=" md:col-span-1">
                <h1 className="text-[30px] font-medium text-left">
                  Can I Get a Loan?
                </h1>
              </div>
              <div className="md:col-span-2  justify-center">
                <p className="text-left text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-accent/20 my-10">
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
              <div className=" md:col-span-1">
                <h1 className="text-[30px] font-medium text-left">
                  Do I Get the Golden Visa?
                </h1>
              </div>
              <div className="md:col-span-2  justify-center">
                <p className="text-left text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 my-10">
          <div className="bg-white p-8  rounded shadow-md w-full ">
            <h2 className="text-3xl  font-semibold mb-6">Contact</h2>
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label
                  for="name"
                  className="block text-[16px] font-medium text-gray-700 text-left"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Dipak Pal"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block text-[16px] font-medium text-gray-700 text-left"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="@abcgmail.com"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  for="number"
                  className="block text-[16px] font-medium text-gray-700 text-left"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="number"
                  placeholder="+123-1200-254"
                  name="number"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  for="address"
                  className="block text-[16px] font-medium text-gray-700 text-left"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  cols="50"
                  name="comment"
                  form="usrform"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  Enter text here...
                </textarea>
              </div>
              <div className="my-5">
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white p-2 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="text-left">
            <h1 className="text-3xl text-left font-semibold">Map</h1>
            <p className="text-[18px]">*The location is approximate</p>
            <img
              src={location}
              alt="propertyImage"
              className="w-full h-[550px] rounded-lg object-cover "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Properties;
