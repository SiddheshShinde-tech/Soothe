import React from "react";
import "./tracking.css";
import image from "./image/logo6.png" ;
import {Link} from "react-router-dom";
import { temp } from "./checkbox2";
import FinalSlider from "./Slider2";

var salutation="";
var quote="";

if(temp==1)
    {
        salutation="Reward yourself now with a/an icecream for the hard work you've put in !!";
        quote='Life is like an ice cream, enjoy it before it melts."';
    }
    else if(temp==2)
    {
        salutation="Reward yourself now with a/an volunteer for the hard work you've put in !!";
        quote='"I am only one, but I am one. I cannot do everything, but I can do something. And I will not let what I cannot do interfere with what I can do. Volunteers do not necessarily have the time; they just have the heart."';
    }
    else if(temp==3)
    {
        salutation="Reward yourself now by giving a pat to yourself for the hard work you've put in !!";
        quote="'Much of someone's real character lies in what they don't say about themselves.' 'Self-praise is the first sign of insecurity.' Some things sound better if they don't come from you.'";
    }
    else if(temp==4)
    {
        salutation="Reward yourself now by playing a Android Game for the hard work you've put in !!";
        quote='"It was rather difficult to throw a game when you had no idea what you were doing to win it in the first place. ..."';
    }
    else if(temp==5)
    {
        salutation="Reward yourself now by going for Shopping for the hard work you've put in !!";
        quote='"There is a little bit of magic found in buying something new. It is instant gratification, a quick fix."';
    }
    else{
        salutation="Reward yourself now with a short nap for the hard work you've put in !!";
        quote='"Think what a better world it would be if we all, the whole world, had cookies and milk about three o clock every afternoon and then lay down on our blankets for a nap"';
    }

function showdown()
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
            <h2 className="jobtext">Great Job</h2>
            <p className="salutationtext">{salutation}</p>
            <p className="quotetext">{quote}</p>

            <h2 className="reviewText">Review</h2>
            <p className="finaletext">Good job spending all your anxiety credits, you're getting better!</p>
            <div className="handlesidddddddd">
            <FinalSlider />
            </div>
            <div class="forbutton">
            <Link to="/homepage" className="">Take a Break</Link>
            </div>
            <div class="forbutton">
            <Link to="/welcome" className="">Try Again</Link>
            </div>
            </div>
            <div className="welcome-area image-area">
                <img class="welcome-image" src="https://thumbs.gfycat.com/GrotesqueShockedBirdofparadise-size_restricted.gif"></img>
            </div>
        </div>
    </div>
    </div>
    </div>);
}

export default showdown;