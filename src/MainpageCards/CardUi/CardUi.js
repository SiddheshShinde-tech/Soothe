import React from 'react'
import './cardstyle.css'
import {Link} from 'react-router-dom'

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
          <Link to='/signup' class="round-button">Explore</Link>
          </div>
        </div>
    </div>
   )
 }
 
export default CardUi