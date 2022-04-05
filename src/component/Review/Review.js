import React from "react";

const Review = ({ comm }) => {
  const { ratting, comment, name } = comm;
  return (
    <div className="m-5 p-5 rounded-xl h-[600px] ">
      <h1 className="text-3xl text-center font-serif font-bold pt-3">
        Name: {name}
      </h1>
      <p className="text-xl text-justify my-3 ">
        <small className="text-2xl">Comment:</small> {comment}
      </p>
      <p className="text-xl text-justify my-3 font-semibold relative ">
        <small className="text-2xl">Ratting:</small> {ratting} Stars
      </p>
    </div>
  );
};

export default Review;
