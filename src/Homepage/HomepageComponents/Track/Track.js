import React, { Component } from 'react'
import './track.css'
import trackHome from '../../HomepageAssets/trackHome.jpg'



class Track extends Component {
 render() {
  return(
   <div className="TrackMainContainer">
       <div className="TrackContainer" style={{boxSizing: 'border-box'}}>
       <div className="cardHeader6">
          <h2 className="siddheshfontheading">Track Your Medication</h2>
        </div>
       <div className="TrackCardContent">
          <div className="Description">
          {/* <p className="notavailableguys">Feature not available yet.</p> */}

            <p className="DescriptionContent">You'll record when you take your medications and receive medication reminders. You can use this to help manage numerous people's medication regimens, thanks to the ability to have multiple profiles. It also tracks your prescriptions and reminds you when it's time for a refill.</p>
            <a href="http://example.com" class="round-button">Track</a>
          </div>
          <div className="TrackImageContainer">
            <img className="TrackImage" src={trackHome}></img>
          </div>
        </div>
        
        <div>
          
        </div>
        </div>
    </div>
    )
   }
 }

export default Track