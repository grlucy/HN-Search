import React from "react";
import { useSelector } from "react-redux";

import API from "../../utils/API";

function Result() {
  const searchHistory = useSelector((state) => state.searchHistory);
  const sortType = useSelector((state) => state.sortType);

  const currentTerm = searchHistory[0] || "";

  API.searchByRelevance(currentTerm)
    .then((res) => console.log(res.data.hits))
    .catch((err) => console.log(err));

  return (
    <>
      <hr />
      <h2>Title</h2>
      <p>Author</p>
      <p>
        <i>created_at</i>
      </p>
      <p>
        <a
          href="http://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          url
        </a>
      </p>
    </>
  );
}

export default Result;
