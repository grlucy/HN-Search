import { combineReducers } from "redux";

import viewSearchReducer from "./view-search";
import sortTypeReducer from "./sort-type";
import searchTermReducer from "./search-term";

const allReducers = combineReducers({
  viewSearch: viewSearchReducer,
  sortType: sortTypeReducer,
  searchTerm: searchTermReducer,
});

export default allReducers;
