export const viewSearchAction = () => {
  return {
    type: "CLICK_SEARCH",
  };
};

export const sortTypeAction = (type) => {
  return {
    type: type,
  };
};

export const searchAction = (term) => {
  return {
    type: "SEARCH",
    payload: term,
  };
};
