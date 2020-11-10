import React from "react";
import "./App.css";
import Footer from "../src/Components/Footer";
import Navbar from "../src/Components/Navbar/Navbar";
import Img from "../src/Components/Img.png";
import background from "../src/Components/images/show_everyone.jpeg";
import Maincard from "../src/MainpageCards/Maincard";

function Main() {
  return (
    <div>
      <div className="forNavbar">
        <Navbar></Navbar>
        <img className="image" src={background} alt="background-image" />
      </div>

      <div>
        <Maincard></Maincard>
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
export default Main;
