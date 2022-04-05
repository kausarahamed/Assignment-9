import React from "react";
import useComment from "../../Hooks/UseComment";
import Review from "../Review/Review";

const Reviews = () => {
  const [comment, setComment] = useComment();
  console.log(comment);

  return (
    <div>
      {comment.map((comm) => (
        <Review key={comm.id} comm={comm}></Review>
      ))}
    </div>
  );
};

export default Reviews;
