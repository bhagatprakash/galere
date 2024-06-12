import React from "react";
import Banner from "./banner";
import Cards from "./card";
import Place from "./place";
import Subscribe from "./Subscribe";
import Testimonials from "./testmonial";
import BlogPost from "./blogpost";


function Index() {
  return (
    <div>
      {/* banner section  */}
      <Banner />
      {/* card section  */}
      <Cards />
      {/* place section  */}
      <Place />
      {/* Subscribe  */}
      <Subscribe />
      {/* Testimonials  */}
      <Testimonials />
      {/* blogCard  */}
      <BlogPost />
  
    </div>
  );
}

export default Index;
