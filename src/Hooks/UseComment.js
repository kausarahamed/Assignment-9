import { useState, useEffect } from "react";

const useComment = () => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch("fakedata.json")
      .then((response) => response.json())
      .then((json) => setComment(json));
  }, []);
  return [comment, setComment];
};
export default useComment;
