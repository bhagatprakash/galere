import React from "react";
import headerImage from "../assest/images/header image.svg";

function Footer() {
  return (
    <>
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col mx-auto sm:flex-row  justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-center md:text-left my-10 px-5 gap-6 ">
            <div className="cursor-pointer text-white lg:mx-auto   ">
              <img
                src={headerImage}
                alt="blog img"
                className="h-[40px] my-5 mx-auto md:mx-0"
              />
              <p className="text-[17px] my-3 text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat
              </p>
              <div className="space-x-3 text-center lg:text-left  py-3">
                <i className="text-[18px] p-2 fa-brands fa-whatsapp border rounded-[20%] bg-yellow-400 hover:bg-red-300 hover:text-white"></i>
                <i className="text-[18px] p-2 fa-brands fa-facebook border rounded-[20%] bg-yellow-400 hover:bg-red-300 hover:text-white"></i>
                <i className="text-[18px] p-2 fa-brands fa-twitter border rounded-[20%] bg-yellow-400 hover:bg-red-300 hover:text-white"></i>
                <i className="text-[18px] p-2 fa-brands fa-youtube border rounded-[20%] bg-yellow-400 hover:bg-red-300 hover:text-white"></i>
              </div>
            </div>

            <div className="cursor-pointer text-white md:items-center md:hidden lg:block"></div>
            <div className="cursor-pointer text-white  lg:block"></div>

            <div className="cursor-pointer md:ml-[80px] ">
              <h1 className="text-[20px] font-semibold my-5">Menu</h1>
              <p className="text-[17px] text-gray-600 py-1">Home</p>
              <p className="text-[17px] text-gray-600 py-1">About</p>
              <p className="text-[17px] text-gray-600 py-1">Properties</p>
              <p className="text-[17px] text-gray-600 py-1">Blog</p>
              <p className="text-[17px] text-gray-600 py-1">Agents</p>
              <p className="text-[17px] text-gray-600 py-1">Contact</p>
            </div>
            <div className="cursor-pointer">
              <h1 className="text-[20px] font-semibold my-5">Utility Pages</h1>
              <p className="text-[17px] text-gray-600 py-1">Styleguide</p>
              <p className="text-[17px] text-gray-600 py-1">Licensing</p>
              <p className="text-[17px] text-gray-600 py-1">Instruction</p>
              <p className="text-[17px] text-gray-600 py-1">Change-Logo</p>
              <p className="text-[17px] text-gray-600 py-1">
                Password Protected
              </p>
              <p className="text-[17px] text-gray-600 py-1">
                404 Not Found Page
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <hr className="h-[1px] bg-gray-500 border-0 w-[100%] max-w-[1500px]" />
        </div>

        <p className="text-[16px] p-5 md:mx-20 text-gray-600">
          Copyright © 2024 galera | Designed by Dipak Pal - Powered by Simbanic
        </p>
      </div>
    </>
  );
}

export default Footer;
