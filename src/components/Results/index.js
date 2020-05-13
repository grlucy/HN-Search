import React from "react";
import { useSelector } from "react-redux";

import API from "../../utils/API";
import Result from "../Result";

function Results() {
  const searchHistory = useSelector((state) => state.searchHistory);
  const sortType = useSelector((state) => state.sortType);

  const currentTerm = searchHistory[0] || "";

  switch (sortType) {
    case "Date":
      API.searchByDate(currentTerm)
        .then((res) => console.log(res.data.hits))
        .catch((err) => console.log(err));
      break;
    default:
      API.searchByRelevance(currentTerm)
        .then((res) => console.log(res.data.hits))
        .catch((err) => console.log(err));
  }

  return (
    <>
      <p>Results</p>
    </>
  );
}

export default Results;
