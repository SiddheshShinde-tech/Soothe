import React from "react";
import './App.css';
import SignInSide from "./Components/login/logIn";  // Login Page Component
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from "./main";
import HomepageMain from "./Homepage/HomepageMain/Mainhome";
import Doctormainpage from "./HomepageSubparts/Doctors/doctorsmainpage";


function App() {
  return (

    <div>
      <Route exact path='/' component={Main}></Route>
      <Route path='/signup' component={SignInSide}></Route>
      <Route path='/homepage' component={HomepageMain}></Route>
      <Route path='/expertdoctors' component={Doctormainpage}></Route>
      
    </div>


  );
}
export default App;
