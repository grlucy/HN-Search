import React from "react";

// components
import Header from "./components/Header";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="main-content">
        <Header />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <Search />
              </div>
              <div className="col-sm-8">
                <Sort />
                <Results />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
