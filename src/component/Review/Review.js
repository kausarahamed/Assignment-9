import React from "react";

const Review = ({ comm }) => {
  const { ratting, comment, name } = comm;
  return (
    <div>
      <h1>{name}</h1>
      <p>{comment}</p>
      <p>{ratting}</p>
    </div>
  );
};

export default Review;
