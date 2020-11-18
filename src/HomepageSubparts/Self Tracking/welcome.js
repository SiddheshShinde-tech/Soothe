import React from "react";
import "./tracking.css";
import image from "./image/logo6.png" ;
import welcome from "./image/doctor-welcome.jpg"
import {Link} from "react-router-dom";

function greet()
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
            <h3 class="forh1">Welcome to the Self Assessment and Tracking Portal</h3>
            <p class="key-features">Key Features:</p>
            <ul>
                <li class="features">It quantifies the difference in a user's actual and ideal stress/anxiety/depression level</li>
                <li class="features">Users then decide on the activities to spend their credits on, the reward they get for completing them , and a time for Portal to notify them to check back in.</li>
                <li class="features">Using technology to aid issues centered around stress/anxiety/depression.</li>
            </ul>
            <div class="forbutton">
            <Link to="/selectoption" className="round-button">Get Started</Link>
            </div>
            </div>
            <div className="welcome-area image-area">
                <img class="welcome-image" src={welcome}></img>
            </div>
        </div>
    </div>
    </div>
    </div>);
}

export default greet;

//#f98282 #fa9a9a