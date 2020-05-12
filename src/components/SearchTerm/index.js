import React from "react";

function SearchTerm() {
  return (
    <div className="d-flex align-items-center mb-2">
      <div className="rounded-left bg-light p-2 flex-grow-1">
        <p>ABC</p>
      </div>
      <div className="rounded-right bg-light p-2">
        <p>
          <i class="fas fa-times"></i>
        </p>
      </div>
    </div>
  );
}

export default SearchTerm;
