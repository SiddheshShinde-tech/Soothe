import React from "react";
import "./tracking.css";
import image from "./image/logo6.png";
import {Link} from "react-router-dom";
import track from "./image/Objective.png"
import MYList from "./list";

function task()
{
    return(
    <div>
    <h2 className="topbar">Soothe</h2>
    <div className="belowtopbar">
    <img className="image-handle" src={image}></img>
    <h1 class="headingheadddd">Self Tracking and Assessment Portal</h1>
    </div>

    <div className="FullDivision">    
    <div className="MainDivisionSid">
        <div className="SubDivision">
            <div className="welcome-area text-area">
            <h3 class="forh1">Objective</h3>
            <br></br>
            <MYList />
            <br></br>
            <div class="forbutton">
            <Link to="/Showdown" className="round-button">I'm Done!</Link>
            </div>
            </div>
            <div className="welcome-area image-area">
                <img class="welcome-image" src={track}></img>
            </div>
        </div>
    </div>
    </div>
    </div>);
}

export default task;
