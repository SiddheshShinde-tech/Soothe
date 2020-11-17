import React from "react";
import image from "./image/logo6.png" ;
import chall2 from "./image/chall2.jpg";
import {Link} from "react-router-dom";
import CheckBox from "./checkbox";

function canyouDoIt()
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
                        <div className="welcome-area text-area center">
                            <h3 class="forh1 challengeeeee">The Challenge</h3>
                            <p className="text1">Your extra anxiety is converted into credits.</p>
                            <div className="formula">
                                <p className="center">Current Anxiety - Ideal Anxiety</p>
                                <p className="center">= Anxiety Credits</p>
                            </div>
                            <p className="text2">Your objective is to spend all of it to bring your current anxiety level down to an ideal level before the day ends</p>
                            <div className="colour-box">
                                <div className="credittttt">
                                    <h5 className="creditText">Spend Credits on       </h5>
                                    <p className="paratext">x Anxiety Credits</p>
                                </div>
                                <div className="checkboxesssss">
                                    <CheckBox />
                                </div>
                            </div>
                            <div class="center">
                            <Link to="/challenge" className="round-button">Next</Link>
                            </div>
                        </div>
                            <div className="welcome-area image-area">
                                <img class="welcome-image special" src={chall2}></img>
                            </div>
                    </div>
                </div>  
            </div>


        </div>
    );
}

export default canyouDoIt;