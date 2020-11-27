import React from "react";
import image from "./image/logo6.png" ;
import {Link} from "react-router-dom";
import CheckBoxReward from "./checkbox2";


function swags()
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
            <h3 class="forh1 challengeeeee">Reward</h3>
            <p>We encourage you to pick a reward to award yourself with after you've spent your anxiety credits. This would reinforce the positive habit of dealing with anxiety in an actionable manner</p>
            <p className="rewardText">Pick a reward (Choose one)</p>
            
            <CheckBoxReward />

            <div class="forbutton">
            <Link to="/CheckBack" className="round-button">Next</Link>
            </div>
            </div>
            <div className="welcome-area image-area">
                <img class="welcome-image" src="http://cdn.lowgif.com/full/3b8b17ede04086d7-reward-badges-by-mayank-dhawan-dribbble.gif"></img>
            </div>
        </div>
    </div>
    </div>  
            </div>
    
    );
}

export default swags;