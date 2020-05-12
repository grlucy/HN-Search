import axios from "axios";

export default {
  searchByRelevance: function (searchTerm) {
    return axios.get("http://hn.algolia.com/api/v1/search?query=" + searchTerm);
  },
  searchByDate: function (searchTerm) {
    return axios.get(
      "http://hn.algolia.com/api/v1/search_by_date?query=" + searchTerm
    );
  },
};
