import { combineReducers } from "redux";

import viewSearchReducer from "./view-search";
import sortTypeReducer from "./sort-type";
import searchTermReducer from "./search-term";
import searchHistoryReducer from "./search-history";

const allReducers = combineReducers({
  viewSearch: viewSearchReducer,
  sortType: sortTypeReducer,
  searchTerm: searchTermReducer,
  searchHistory: searchHistoryReducer,
});

export default allReducers;
