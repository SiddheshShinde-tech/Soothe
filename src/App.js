import React from "react";
import "./App.css";
import SignInSide from "./Components/login/logIn"; // Login Page Component
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./main";
import HomepageMain from "./Homepage/HomepageMain/Mainhome";
import Doctormainpage from "./HomepageSubparts/Doctors/doctorsmainpage";
import Post from "./containers/Post";
import FirstTest from "./HomepageSubparts/Assessment/src/index-assessment";
import SecondTest from "./HomepageSubparts/Assessment/src/App-assessment-two";
import SelfTrack from "./HomepageSubparts/Self Tracking/welcome";
import TypeOfDisorder from "./HomepageSubparts/Self Tracking/disorderType";
import LevelAnxiety from "./HomepageSubparts/Self Tracking/level";
 
function App() {
  return (
    <div>
      <Route exact path="/" component={Main}></Route>
      <Route path="/signup" component={SignInSide}></Route>
      <Route path="/homepage" component={HomepageMain}></Route>
      <Route path="/expertdoctors" component={Doctormainpage}></Route>
      <Route path="/post/:postId" component={Post} />
      <Route path="/anxietyTest" component={FirstTest}></Route>
      <Route path="/depressionTest" component={SecondTest}></Route>
      <Route path="/welcome" component={SelfTrack}></Route>
      <Route path="/selectoption" component={TypeOfDisorder}></Route>
      <Route path="/Anxious" component={LevelAnxiety}></Route>
      <Route path="/Depressed" component=""></Route>
      <Route path="/Challenge" component=""></Route>
    </div>
  );
}
export default App;
