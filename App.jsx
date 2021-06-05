import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <div className="class1">
        <div className="c1">
          <Note />
        </div>
        <div className="c2">
          <Note />
        </div>
        <div className="c3">
          <Note />
        </div>
      </div>
    </div>
  );
}

export default App;
