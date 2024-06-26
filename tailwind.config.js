/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerbg: "url('./assest/images/banner-baground.jpg')",
        banner: "url('./assest/images/text-image.jpg')",
        textImage: "url('./assest/images/text-image.jpg')",
        textImage2: "url('./assest/images/text-image2.jpg')",
        hight: "h-full",
      },
      boxShadow: {
        insetcustom: "inset 0 0 0 2000px rgba(18, 72, 107, .9)",
      },
      screens: {
        "1025-1165": { min: "1025px", max: "1165px" },
      },
      colors: {
        bgColors: "#12486b",
      },
      fontFamily: {
        sanss: ['"Montserrat Alternates"', "sans-serif"],
      },
    },
  },
  safelist: ["container"],
  plugins: [],
};
