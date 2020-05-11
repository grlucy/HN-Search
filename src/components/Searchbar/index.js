import React from "react";

import Button from "../Button";

function Searchbar() {
  return (
    <div className="mt-3">
      <form>
        <input
          className="form-control form-control-sm mb-1"
          placeholder="Search term"
        />
        <Button text="Search" />
      </form>
    </div>
  );
}

export default Searchbar;
