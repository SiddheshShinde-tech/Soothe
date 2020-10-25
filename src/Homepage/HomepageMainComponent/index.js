import React, { Component } from 'react'
import Assignment from '../HomepageComponents/Assignment/index'
import Blogss from '../HomepageComponents/Blogss/Blogss'
import './style.css'
import Doctors from '../HomepageComponents/Doctors/Doctors'
import Games from '../HomepageComponents/Games/games'
import SelfAssessment from '../HomepageComponents/SelfAssessment/selfassessment'
import Therapy from '../HomepageComponents/Therapy/Therapy'
import Track from '../HomepageComponents/Track/Track'

class HomepageMainComponent extends Component {
 render() {
  return(
   <div className="maincomponent">
       <Assignment></Assignment>
       <Games></Games>
       <Therapy></Therapy>
       <Blogss></Blogss>
       <Doctors></Doctors>
       <Track></Track>
       <SelfAssessment></SelfAssessment>
   </div>
    )
   }
 }

export default HomepageMainComponent