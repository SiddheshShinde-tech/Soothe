import React from "react";
import image from "./image/logo6.png";
import {Link} from "react-router-dom";
import KeyboardTimePickerExample from "./time";


function whatsup()
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
            <h3 className="forh1 challengeeeee">Check Back With Us</h3>
            <p className="timetext2">Set a time today to spend your anxiety credits by and check back with in with us! We'll help to re-evaluate your anxiety levels again.</p>
            <p className="timetext">Set a time today :</p>
            <KeyboardTimePickerExample />
            <div class="forbutton">
            <Link to="/Letsdoit" className="round-button timebutton">Start Challenge</Link>
            </div>
            </div>
            <div className="welcome-area image-area">
                <img class="welcome-image" src="https://upload.wikimedia.org/wikipedia/commons/4/40/Alarm_Clock_Animation_High_Res.png"></img>
            </div>
        </div>
    </div>
    </div>

    </div>
        
    );
}

export default whatsup;