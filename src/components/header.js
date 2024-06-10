import React, { useEffect } from "react";
import HeaderImage from "../assest/images/header image.svg";

function Header() {
  useEffect(() => {
    document.getElementById("hamburger").onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
  }, []);
  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <header>
          <nav className="flex flex-wrap items-center justify-between my-5 lg:px-20 ">
            <div>
              <img
                src={HeaderImage}
                className="h-[40px] my-3"
                alt="header-image"
              />
            </div>
            <div className="flex lg:hidden">
              <button id="hamburger">
                <img
                  className="toggle block"
                  src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                  width="40"
                  height="40"
                />
                <img
                  className="toggle hidden"
                  src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                  width="40"
                  height="40"
                />
              </button>
            </div>
            <div className="  toggle w-full lg:w-auto lg:flex row-gap-25 text-bold mt-5 md:mt-0 md:border-none hidden">
              <a
                href="#"
                className="block   text-[18px]  px-3 py-3  font-semibold text-center"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-[17px]  px-3 py-3  font-semibold text-center"
              >
                About Us
              </a>
              <a
                href="#"
                className="block   px-3 py-3 text-[17px]  font-semibold text-center"
              >
                Properties
              </a>
              <a
                href="#"
                className="block  px-3 py-3 text-[17px]  font-semibold   text-center "
              >
                Blogs
              </a>
              <a
                href="#"
                className="block  px-3 py-3 text-[17px]  font-semibold  text-center "
              >
                Contact
              </a>
            </div>
            <a
              href="#"
              className="toggle lg:flex w-full lg:w-auto  sm:text-center text-center  text-[18px]  font-semibold  items-center justify-center hidden"
            >
              +34 921 123 123
            </a>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;
