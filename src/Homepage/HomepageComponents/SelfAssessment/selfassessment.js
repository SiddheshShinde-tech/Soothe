import React from 'react'
import './selfassessment.css'
import doctorsHome from '../../HomepageAssets/doctorsHome.jpg'

const SelfAssessment = props => {
    return (
      <div className="SelfMainContainer">
        <div className="SelfContainer" style={{boxSizing: 'border-box'}}> 
        <div className="cardHeader6">
          <h2>Self Assessment</h2>
        </div>
        <div className="SelfCardContent">
          <div className="SelfImageContainer">
            <img className="SelfImage" src={doctorsHome}></img>
          </div>
          <div className="SelfDescription">
            <p className="SelfDescriptionContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br></br>
            <div>
          <a href="http://example.com" class="round-button">Take Therapy</a>
        </div>
          </div>
        </div>
        </div>
      </div>
    )
}
export default SelfAssessment