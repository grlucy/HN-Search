import React from "react";

function Header() {
  return (
    <header
      className="bg-dark mb-4"
      style={{
        backgroundImage:
          'url("/assets/images/utsav-srestha-HeNrEdA4Zp4-unsplash.jpg")',
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <h1
              className="text-white text-center py-2"
              style={{ textShadow: "1px 1px 4px #555" }}
            >
              Search Hacker News
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
