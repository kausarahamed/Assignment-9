import React from "react";
import img from "../../img/photo-1581591524425-c7e0978865fc.avif";
const Home = () => {
  return (
    <div className="grid grid-cols-2 mt-10 ">
      <div>
        <h1 className="text-5xl font-bold italic">
          The Best Digital Camera Review
        </h1>
        <p className="text-xl mt-5">
          The Sony a7 IV is the fourth generation of the company's core a7
          full-frame mirrorless camera model. It's the most advanced yet,
          bringing many of the improvements Sony has made in terms of autofocus
          and interface design since the launch of the a7 III, back in February
          2018.
        </p>
      </div>

      <div className="ml-10">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
