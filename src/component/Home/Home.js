import React from "react";
import useComment from "../../Hooks/UseComment";
import img from "../../img/photo-1581591524425-c7e0978865fc.avif";
import Review from "../Review/Review";
const Home = () => {
  const [comment, setComment] = useComment();
  const firstThree = comment.slice(0, 3);
  return (
    <div>
      <div className="grid grid-cols-2 mt-10 mx-5 ">
        <div>
          <h1 className="text-5xl font-bold italic">
            The Best Digital Camera Review
          </h1>
          <p className="text-xl mt-5">
            The Sony a7 IV is the fourth generation of the company's core a7
            full-frame mirrorless camera model. It's the most advanced yet,
            bringing many of the improvements Sony has made in terms of
            autofocus and interface design since the launch of the a7 III, back
            in February 2018.
          </p>
        </div>

        <div className="ml-10">
          <img src={img} alt="" />
        </div>
      </div>
      <div>
        {firstThree.map((comment) => (
          <Review key={comment.id} comm={comment}></Review>
        ))}
      </div>
    </div>
  );
};

export default Home;
