import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Img from "./Components/Img.png";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap"></div>
      <div className="Footer-img" style={{backgroundImage: `url(${Img})`}}>
        <div className="Footer-img-content">
          <p>Get in touch</p>
          <button type="button" class="btn btn-outline-info btn-sm">
            Contact us
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
