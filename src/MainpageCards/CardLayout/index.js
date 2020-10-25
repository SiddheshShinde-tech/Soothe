import React, { Component } from 'react'
import blog from "../assets/blogs.jpg"
import therapy from "../assets/therapies.jpg"
import game from "../assets/games.jpg"
import assessment from "../assets/assessment.jpg"
import tracker from "../assets/medtrack.jpg"
import doctors from "../assets/doctors.jpg"
import CardUi from '../CardUi/CardUi'
import './style.css'



class CardLayout extends Component {
 render() {
  return(
      <div className="manincont">
   <div className="container-fluid d-flex justify-content-center">
       <div className="row">
           <div className="col-md-4">
               <CardUi imgsrc={assessment} title="Assessments" description="Take Free Assessment to check how mentally fit you are."></CardUi>
           </div>
           <div className="col-md-4">
               <CardUi imgsrc={therapy} title="Free & Paid Therapies" description="Experience the Digital Psychotherapies we provide."></CardUi>
           </div>
           <div className="col-md-4">
               <CardUi imgsrc={game} title="Games & Fun" description="Relax your mind with interesting games. Enjoy!"></CardUi>
           </div>
       </div>
   </div>

   <div className="container-fluid d-flex justify-content-center">
       <div className="row">
           <div className="col-md-4">
               <CardUi imgsrc={blog} title="Blogs" description= "Reading makes you feel you better. Boost your mental health with lifestyle tips."></CardUi>
           </div>
           <div className="col-md-4">
               <CardUi imgsrc={tracker} title="Track Your Medication" description="Do you often forget about therapies and medications. We will remind you!"></CardUi>
           </div>
           <div className="col-md-4">
               <CardUi imgsrc={doctors} title="Expert Doctors" description="Meet our expert Doctors and experience the change. Click here to know more. "></CardUi>
           </div>
       </div>
   </div>

</div>
    )
   }
 }

export default CardLayout