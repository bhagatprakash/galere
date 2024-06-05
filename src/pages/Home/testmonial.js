import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile from "../../assest/images/profile-1.png";
import profile1 from "../../assest/images/profile.png";
import profile2 from "../../assest/images/profile-3.png";
import profile3 from "../../assest/images/profile-4.png";
const testimonials = [
  {
    text: "Joe Smith",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing.",
    position: "CEO at Homeland",
    rating: 5,
  },
  {
    text: "Ana Maria",
    author:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing.",
    position: "CEO at Homeland",
    rating: 5,
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <button className="slick-prev bg-black text-white p-2 rounded-full shadow-md ">
        ←
      </button>
    ),
    nextArrow: (
      <button className="slick-next bg-black text-white-500 p-2 rounded-full shadow-md">
        →
      </button>
    ),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
    ),
  };
  return (
    <div className="my-20 max-w-[1320px] mx-auto">
      <div className="bg-accent/20 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
        <div className="p-5 lg:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
          <div class="my-5 ">
            <div className="flex gap-5">
              <div className=" bg-blue-500 rounded-[30px]">
                <img src={profile} alt="Testimonials" />
              </div>
              <div className=" bg-yellow-500 rounded-[30px]">
                <img src={profile1} alt="Testimonials" />
              </div>
            </div>
            <br />
            <div className="flex gap-5">
              <div className=" bg-blue-500 rounded-[30px]">
                <img src={profile3} alt="Testimonials" />
              </div>
              <div className=" bg-yellow-500 rounded-[30px]">
                <img src={profile2} alt="Testimonials" />
              </div>
            </div>
          </div>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="p-4 sm:p-6 bg-white border border-gray-500 text-center">
                <p className="text-base sm:text-lg text-left italic mb-2 sm:mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex text-left mb-2 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.275 3.94a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.375 2.45a1 1 0 00-.364 1.118l1.275 3.94c.3.921-.755 1.688-1.538 1.118l-3.375-2.45a1 1 0 00-1.175 0l-3.375 2.45c-.783.57-1.838-.197-1.538-1.118l1.275-3.94a1 1 0 00-.364-1.118l-3.375-2.45c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.275-3.94z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-lg sm:text-[15px] text-left font-semibold">
                  {testimonial.author}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
