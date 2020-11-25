import React from "react";
import "./App.css";
import SignInSide from "./Components/login/logIn"; // Login Page Component
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./main";
import HomepageMain from "./Homepage/HomepageMain/Mainhome";
import Doctormainpage from "./HomepageSubparts/Doctors/doctorsmainpage";
import Post from "./containers/Post";
import FirstTest from "./HomepageSubparts/Assessment/src/index-assessment";
import SecondTest from "./HomepageSubparts/Assessment/src/App-assessment-two";
import SelfTrack from "./HomepageSubparts/Self Tracking/welcome";
import TypeOfDisorder from "./HomepageSubparts/Self Tracking/disorderType";
import LevelAnxiety from "./HomepageSubparts/Self Tracking/level";
import Challenge from "./HomepageSubparts/Self Tracking/challenge";
import Reward from "./HomepageSubparts/Self Tracking/reward";
import CheckBack from "./HomepageSubparts/Self Tracking/checkback";
import Objective from "./HomepageSubparts/Self Tracking/objective";
import ShowDown from "./HomepageSubparts/Self Tracking/final";
import Therapymainpage from "./HomepageSubparts/Therapy/therapymainpage";
 
function App() {
  return (
    <div>
      <Route exact path="/" component={Main}></Route>
      <Route path="/signup" component={SignInSide}></Route>
      <Route path="/homepage" component={HomepageMain}></Route>
      <Route path="/expertdoctors" component={Doctormainpage}></Route>
      <Route path="/therapy" component={Therapymainpage}></Route>
      <Route path="/post/:postId" component={Post} />
      <Route path="/anxietyTest" component={FirstTest}></Route>
      <Route path="/depressionTest" component={SecondTest}></Route>
      <Route path="/welcome" component={SelfTrack}></Route>
      <Route path="/selectoption" component={TypeOfDisorder}></Route>
      <Route path="/Anxious" component={LevelAnxiety}></Route>
      <Route path="/Depressed" component=""></Route>
      <Route path="/Challenge" component={Challenge}></Route>
      <Route path="/Reward" component={Reward}></Route>
      <Route path="/CheckBack" component={CheckBack}></Route>
      <Route path="/Letsdoit" component={Objective}></Route>
      <Route path="/Showdown" component={ShowDown}></Route>
    </div>
  );
}
export default App;
