import React, { Component } from 'react'
import therapy1 from '../Therapy/Therapyassets/therapy1.png'
import therapy2 from '../Therapy/Therapyassets/therapy2.png'
import therapy3 from '../Therapy/Therapyassets/therapy3.png'
import therapy4 from '../Therapy/Therapyassets/therapy4.png'
import './therapymainpage.css'

class Therapymainpage extends Component {
 state = {}
 render() {
  return(
      <div>
      <div className="Headtherapy">
        <img></img>
        <h1><center>Take Therapy</center></h1>
      </div>


      <div className="MainDivisiontherapy">
          <div className="SubDivisiontherapy">
              <div className="MainCardtherapy">
                  <div className="Card-imagetherapy">
                    <img className="therapyimage" src={therapy1}></img>
                  </div>
                  <div className="Card-bodytherapy">
                    
                  <a href="https://mindyourmind.ca/apps/StressMeLess/index.html" class="round-button">Take Therapy</a>
                  </div>
              </div>


              <div className="MainCardtherapy">
                  <div className="Card-imagetherapy">
                    <img className="therapyimage" src={therapy2}></img>
                  </div>
                  <div className="Card-bodytherapy">
                    <a href="https://mindyourmind.ca/apps/squishem_desktop/" class="round-button">Take Therapy</a>
                  </div>
              </div>

          </div>



          <div className="SubDivisiontherapy">
              <div className="MainCardtherapy">
                  <div className="Card-imagetherapy">
                    <img className="therapyimage" src={therapy3}></img>
                  </div>
                  <div className="Card-bodytherapy">
                    
                  <a href="https://mindyourmind.ca/apps/Monstressity/" class="round-button">Take Therapy</a>
                  </div>
              </div>

              <div className="MainCardtherapy">
                  <div className="Card-imagetherapy">
                    <img className="therapyimage" src={therapy4}></img>
                  </div>
                  <div className="Card-bodytherapy">
                  <a href="https://mindyourmind.ca/apps/QuoteBloom/en/story_html5.html" class="round-button">Take Therapy</a>
                  </div>
              </div>

          </div>

      </div>
      </div>

    )
   }
 }

export default Therapymainpage