import React from "react";
import Banner from "./banner";
import Cards from "./card";
import Place from "./place";

function Index() {
  return (
    <div>
      {/* banner section  */}
      <Banner />

      {/* card section  */}
      <Cards />

      {/* place section  */}
      <Place />
    </div>
  );
}

export default Index;
