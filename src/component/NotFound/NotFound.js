import React from "react";
import img from "../../img/HTML-404-Page.gif";
const NotFound = () => {
  return (
    <div>
      <h1 className="text-5xl">
        This page is NotFound <small className="text-9xl">404</small>
      </h1>
      <img className="w-full mt-10 h-96" src={img} alt="" />
    </div>
  );
};

export default NotFound;
