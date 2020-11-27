import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import health from "./images/Healthy2.png";
import mild from "./images/Mild2.png";
import Moderate from "./images/moderate2.png";
import Severe from "./images/severe2.png";

function Result(props) {

  function textResult(val)
  {
    if(val>=0 && val<=4)
    {
      return(<div className="common">
      <h2>Healthy</h2>
      <img src={health} alt="healthy-img"></img>
      <br></br>
      <br></br>
      <h2>Your Result:</h2>
      <h3>Your initial results for this questionnaire indicate that you have very few if any adverse symptoms and
are functioning within the healthy range for the general population.</h3>
      </div>);
    }
    else if(val>=5 && val<=10)
    {
      return(<div className="common">
      <h2>Mild</h2>
      <img src={mild} alt="mild-img"></img>
      <br></br>
      <br></br>
      <h2>Your Result:</h2>
      <h3>Your initial results for this questionnaire indicate that you have few adverse symptoms and may experience only minor limitations or interference in your daily tasks and activities.</h3>
      </div>
        );
    }
    else if(val>=11 && val<=14)
    {
      return(<div className="common">
      <h2>Moderate</h2>
      <img src={Moderate} alt="moderate-img"></img>
      <br></br>
      <br></br>
      <h2>Your Result:</h2>
      <h3>Your initial results for this questionnaire indicate that you may be experiencing some moderate symptoms, noticeable levels of interference and some limitations on your daily tasks and activities.</h3>
      </div>);
    }
    else{
      return(<div className="common">
      <h2>Severe</h2>
      <img src={Severe} alt="severe-img"></img>
      <br></br>
      <br></br>
      <h2>Your Result:</h2>
      <h3>Your initial results for this questionnaire indicate that you may be experiencing significant psychological or physical symptoms, marked levels of interference and limitations on your daily tasks and activities.</h3>
      </div>);
    }
  }

  return (
    <div>
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className="common">
        <h2>Thank You for taking the assessment.</h2>   
        <h3>Your score is <strong>{props.quizResult}</strong> !</h3>
      </div>
      
    </CSSTransitionGroup>

    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        {textResult(props.quizResult)}  
      </div>
      
    </CSSTransitionGroup>

    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
      <h2>What can you do next ?</h2>
      <br></br>
      <br></br>
      <ul>
      <li>If you are worried about your psychological health or safety, you should immediately consult with your General Practicioner or a qualified health professional.</li>
      <br></br>
      <li>Find out more about things you can do to help you feel better.</li>
      <br></br>
      <li>If your worry or panic feels out of control, and especially if you feel like you may hurt yourself, then talking to someone is really important. Get immediate assistance from the Depression Helpline 0800 111 757.</li>
      <br></br>
      {/* <li>Buttons on Blogs,Games,etc.</li> */}
      </ul>
      </div>
      
    </CSSTransitionGroup>

    {/* <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>

        Dummy 
        
      </div>
      
    </CSSTransitionGroup> */}
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
