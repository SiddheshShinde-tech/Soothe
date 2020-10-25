import React from 'react'
import './cardstyle.css'

const CardUi = props => {
  return(
    <div className="card text-center">
      <div className="bord">
        <div className="cardimg">
            <img src={props.imgsrc} className="cardimage" ></img>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">
            {props.title}
          </h4>
          <p className="card-text text-secondary">{props.description}</p>
          <a href="http://example.com" class="round-button">Explore</a>
          </div>
        </div>
    </div>
   )
 }
 
export default CardUi