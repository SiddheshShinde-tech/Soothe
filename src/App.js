import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Img from "./components/Img.png";
import background from "./components/images/show_everyone.jpeg";

function App() {
  return (
    <div>
    <div className="App">
      <Navbar />
      <img className="image" src={background} alt="background-image" />
    </div>
    <div>
      {/* Kept for Ananya */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
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
    </div>
  );
}
 
export default App;
