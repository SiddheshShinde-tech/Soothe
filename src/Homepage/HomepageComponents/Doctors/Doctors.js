import React from 'react'
import './assessdoctors.css'
import doctorsHome from '../../HomepageAssets/doctorsHome.jpg'
import {Link} from 'react-router-dom'

const Doctors = props => {
    return (
      <div className="DoctorsMainContainer">
        <div className="DoctorsContainer" style={{boxSizing: 'border-box'}}> 
        <div className="cardHeader9">
          <h2>Doctors</h2>
        </div>
        <div className="DoctorsCardContent">
          <div className="DoctorsImageContainer">
            <img className="DoctorsImage" src={doctorsHome}></img>
          </div>
          <div className="DoctorsDescription">
          <p className="DoctorsDescriptionContent">Do you feel depressed, anxious, worried about relationship issues or suicidal? Do you have a question related to your own or someone else's mental health?</p>
            <p className="DoctorsDescriptionContent">India’s Best Online Therapy and Counselling Consultation Website. Soothe provides the best psychologist and counsellors in India. Our trained counsellors are qualified and are available day and night. We are here to help answer any questions you might have about mental health. Get Face-to-face Counselling Therapy Consultation. It is convenient, Affordable and Private. Confidentiality is highly maintained. You can take up therapy as per your convenience without hampering your daily schedules. You can mutually fix the session with the therapist as well.</p>
            <br></br>
            <div>
          <Link to="/expertdoctors" class="round-button">Consult Doctor</Link>
        </div>
          </div>
        </div>
        </div>
      </div>
    )
}
export default Doctors