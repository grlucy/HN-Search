import React from "react";
import { useSelector, useDispatch } from "react-redux";

import API from "../../utils/API";
import Result from "../Result";
import { resultsAction } from "../../actions";

function Results() {
  const searchHistory = useSelector((state) => state.searchHistory);
  const sortType = useSelector((state) => state.sortType);
  const currentResults = useSelector((state) => state.results);
  const dispatch = useDispatch();

  const currentTerm = searchHistory[0] || "";

  function searchTermByRelevance(term) {
    return function (dispatch) {
      return API.searchByRelevance(term)
        .then((res) => dispatch(resultsAction(res.data.hits)))
        .catch((err) => console.log("hey there", err));
    };
  }

  function searchTermByDate(term) {
    return function (dispatch) {
      return API.searchByDate(term)
        .then((res) => dispatch(resultsAction(res.data.hits)))
        .catch((err) => console.log(err));
    };
  }

  switch (sortType) {
    case "Date":
      dispatch(searchTermByDate(currentTerm));
      break;
    default:
      dispatch(searchTermByRelevance(currentTerm));
  }

  return (
    <>
      {currentResults.map((result) => (
        <Result
          title={result.title}
          author={result.author}
          created={result.created_at}
          url={result.url}
          key={result.objectID}
        />
      ))}
    </>
  );
}

export default Results;
