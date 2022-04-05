import React from "react";
import useComment from "../../Hooks/UseComment";
import Review from "../Review/Review";

const Reviews = () => {
  const [comment, setComment] = useComment();
  console.log(comment);

  return (
    <div className="pt-10 grid grid-cols-3 gap-5 py-10 shadow-2xl">
      {comment.map((comm) => (
        <Review key={comm.id} comm={comm}></Review>
      ))}
    </div>
  );
};

export default Reviews;
