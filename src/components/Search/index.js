import React from "react";

import Searchbar from "../Searchbar";
import SearchTerm from "../SearchTerm";

function Search() {
  return (
    <div className="searchHeader bg-primary rounded p-3 mb-3">
      <div className="d-flex align-items-center justify-content-between">
        <h4 className="text-white mb-0">Search</h4>
        <h4 className="text-white mb-0">
          <i className="fas fa-chevron-up"></i>
        </h4>
      </div>
      <Searchbar />
      <p className="font-weight-bold text-white my-3">Previous Search Terms:</p>
      <SearchTerm />
      <SearchTerm />
      <SearchTerm />
    </div>
  );
}

export default Search;
