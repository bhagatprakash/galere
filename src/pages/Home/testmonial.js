import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile from "../../assest/images/profile-1.png";
import profile1 from "../../assest/images/profile.png";
import profile2 from "../../assest/images/profile-3.png";
import profile3 from "../../assest/images/profile-4.png";
import { testimonials } from "../../assest/data/testmonialData";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <button className="slick-prev bg-black text-white p-2 rounded-full shadow-md absolute bottom-4 right-16 z-10">
        ←
      </button>
    ),
    nextArrow: (
      <button className="slick-next bg-black text-white p-2 rounded-full shadow-md absolute bottom-4 right-4 z-10">
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
    <div className="my-20 max-w-full lg:max-w-[1320px] mx-auto">
      <div className="bg-accent/20">
        <div className="flex flex-col lg:flex-row items-center py-5 sm:py-0">
          {/* image */}
          <div className="w-full lg:w-1/3 flex flex-col sm:flex-row sm:justify-center sm:items-center sm:flex-wrap gap-5 mb-5 sm:mb-0">
            <div className="flex flex-col-2 items-center justify-center sm:flex-cols gap-5 mb-5">
              <div className="bg-blue-500 rounded-[30px] w-[40%] sm:w-[150px] h-[150px] flex items-center justify-center overflow-hidden">
                <img
                  src={profile}
                  alt="Testimonials"
                  className="h-[90%] object-cover"
                />
              </div>
              <div className="bg-yellow-500 rounded-[30px] w-[40%] text-center sm:w-[150px] h-[150px] flex items-center justify-center overflow-hidden">
                <img
                  src={profile1}
                  alt="Testimonials"
                  className="h-[90%] object-cover object-fit"
                />
              </div>
            </div>
            <div className="flex flex-col-2 items-center justify-center sm:flex-cols gap-5">
              <div className="bg-blue-500 rounded-[30px] w-[40%] sm:w-[150px] h-[150px] flex items-center justify-center overflow-hidden">
                <img
                  src={profile3}
                  alt="Testimonials"
                  className="h-[95%] my-1 mx-3 object-cover object-fit"
                />
              </div>
              <div className="bg-yellow-500 rounded-[30px] w-[40%] sm:w-[150px] h-[150px] flex items-center justify-center overflow-hidden">
                <img
                  src={profile2}
                  alt="Testimonials"
                  className="h-[95%] my-1 object-cover  object-fit"
                />
              </div>
            </div>
          </div>
          {/* slider */}
          <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0 lg:ml-4">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2 sm:px-4">
                  <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
                    <p className="text-lg lg:text-3xl font-semibold text-left italic mb-2 sm:mb-4">
                      {testimonial.text}
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
                    <h3 className="text-[15px] leading-7 tracking-wider lg:text-[16px] text-gray-500 text-left font-semibold">
                      {testimonial.author}
                    </h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
