import React, { Component } from 'react'
import './games.css'
import gamesHome from '../../HomepageAssets/gamesHome.jpg'



class Games extends Component {
 render() {
  return(
   <div className="GameMainContainer">
       <div className="GamesContainer" style={{boxSizing: 'border-box'}}>
       <div className="cardHeader1">
          <h2>Games</h2>
        </div>
       <div className="GameCardContent">
          <div className="Description">
            <p className="DescriptionContent">When you have a long way to go around mental health issues that have a strong affects on mood and cognition of a human which makes you feel more alone or unconcerned most of the time then you might have a tough drowned in the depression. 
Soothe here will help you out the most explicitly turning your battling depression into a game uniting the relentless spirit of playful positivity.</p>
            <a href="http://example.com" class="round-button">Play Games</a>
          </div>
          <div className="GamesImageContainer">
            <img className="GamesImage" src={gamesHome}></img>
          </div>
        </div>
        
        <div>
          
        </div>
        </div>
    </div>
    )
   }
 }

export default Games