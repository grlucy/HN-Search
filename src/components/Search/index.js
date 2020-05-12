import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Searchbar from "../Searchbar";
import SearchTerm from "../SearchTerm";
import { viewSearchAction } from "../../actions";

function Search() {
  const viewSearch = useSelector((state) => state.viewSearch);
  const searchHistory = useSelector((state) => state.searchHistory);
  const dispatch = useDispatch();

  return (
    <div className="bg-primary rounded p-3 mb-3">
      <div
        className="d-flex align-items-center justify-content-between"
        onClick={() => dispatch(viewSearchAction())}
      >
        <h4 className="text-white mb-0">Search</h4>
        <h4 className="text-white mb-0">
          <i
            className={viewSearch ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          ></i>
        </h4>
      </div>
      {viewSearch && <Searchbar />}
      {viewSearch && searchHistory[0] && (
        <>
          <p className="font-weight-bold text-white my-3">
            Previous Search Terms:
          </p>
          <div style={{ maxHeight: "192px", overflow: "auto" }}>
            {searchHistory.map((item, index) => (
              <SearchTerm term={item} index={index} key={index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
