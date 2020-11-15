import React from "react";
import image from "./image/logo6.png" ;
import Slider from "./inputSlider";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import fanky from "./image/depression-friend.jpg"

function levelup()
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
                            <h3 class="forh1">We are here to help you</h3>
                            <Slider />
                            <div class="nextButton">
                            <Link to="/challenge" className="round-button">Next</Link>
                            </div>
                        </div>
                            <div className="welcome-area image-area">
                                <img class="welcome-image" src={fanky}></img>
                            </div>
                    </div>
                </div>  
            </div>

        </div>
    );
}

export default levelup;