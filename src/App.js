import React from "react";
import './App.css';
import SignInSide from "./Components/login/logIn";  // Login Page Component
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from "./main";
import HomepageMain from "./Homepage/HomepageMain/Mainhome";
import Doctormainpage from "./HomepageSubparts/Doctors/doctorsmainpage";

// import Footer from "../src/Components/Footer";
// import Navbar from "../src/Components/Navbar/Navbar";
// import Img from "../src/Components/Img.png";
// import background from "../src/Components/images/show_everyone.jpeg";
// import Maincard from "../src/MainpageCards/Maincard";
// import SignInSide from "./Components/login/logIn";  // Login Page Component

function App() {
  return (

    <div>
      <Route exact path='/' component={Main}></Route>
      <Route path='/signup' component={SignInSide}></Route>
      <Route path='/homepage' component={HomepageMain}></Route>
      <Route path='/expertdoctors' component={Doctormainpage}></Route>
      
    {/* <div className="forNavbar">
      <Navbar></Navbar>
      <img className="image" src={background} alt="background-image" />
    </div>

    <div>
      <Maincard></Maincard>
      <br></br>
    </div> */}

    {/* <div>
      <SignInSide></SignInSide>
    </div> */}

    {/* <div className="page-container">
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
    </div> */}

    </div>


  );
}
export default App;
