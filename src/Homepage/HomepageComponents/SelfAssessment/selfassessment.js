import React from 'react'
import './selfassessment.css'
import doctorsHome from '../../HomepageAssets/doctorsHome.jpg'
import {Link} from "react-router-dom";

const SelfAssessment = props => {
    return (
      <div className="SelfMainContainer">
        <div className="SelfContainer" style={{boxSizing: 'border-box'}}> 
        <div className="cardHeadersiddhesh">
          <h2 className="siddheshfontheading">Self Tracking and Assessment</h2>
        </div>
        <div className="SelfCardContent">
          <div className="SelfImageContainer">
            <img className="SelfImage" src={doctorsHome}></img>
          </div>
          <div className="SelfDescription">
            <p className="SelfDescriptionContent">A portal that gamifies stress/anxiety/depression management in an actionable manner to provide relief. It quantifies the difference in a user's actual and ideal stress/anxiety/depression level as credits to be spent on a prescribed set of activities before the day ends. By doing so, users inadvertently take actionable steps to deal with their condition.</p>
            <br></br>
            <div>
          {/* <a href="http://example.com" class="round-button">Take Therapy</a> */}
          <Link to="/welcome" class="round-button">Get Started</Link>
        </div>
          </div>
        </div>
        </div>
      </div>
    )
}
export default SelfAssessment