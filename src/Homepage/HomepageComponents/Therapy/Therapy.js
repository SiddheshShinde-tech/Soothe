import React from 'react'
import './therapy.css'
import therapyHome from '../../HomepageAssets/therapyHome.jpg'


const Therapy = props => {
    return (
      <div className="TherapyMainContainer">
        <div className="AssignmentContainer" style={{boxSizing: 'border-box'}}> 
        <div className="cardHeader3">
          <h2>Therapy</h2>
        </div>
        <div className="TherapyCardContent">
          <div className="TherapyImageContainer">
            <img className="TherapyImage" src={therapyHome}></img>
          </div>
          <div className="TherapyDescription">
          <p className="TherapyDescriptionContent">Are you struggling with feelings of anxiety, anger, or depression?</p>
            <p className="TherapyDescriptionContent">Do you feel ill-equipped to deal with conflict, a life transition, or the challenges of personal and professional relationships? Is your mind full of worried thoughts of not being good enough or feeling like an imposter? Are you seeking ways to learn more effective coping strategies and new tools to tackle life’s adversities?</p>
            <p className="TherapyDescriptionContent">Then take a appoint of yourself with the therapies and nudge yourself towards relaxation and calmness.</p>
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
export default Therapy