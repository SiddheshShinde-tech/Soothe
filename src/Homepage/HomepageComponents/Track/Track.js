import React, { Component } from 'react'
import './track.css'
import trackHome from '../../HomepageAssets/trackHome.jpg'



class Track extends Component {
 render() {
  return(
   <div className="TrackMainContainer">
       <div className="TrackContainer" style={{boxSizing: 'border-box'}}>
       <div className="cardHeader6">
          <h2>Track Your Medication</h2>
        </div>
       <div className="TrackCardContent">
          <div className="Description">
            <p className="DescriptionContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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