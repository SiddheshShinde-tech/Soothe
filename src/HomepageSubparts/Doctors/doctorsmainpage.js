import React, { Component } from 'react'
import doctor1 from '../../HomepageSubparts/Doctors/Doctorsassets/doctor1.jpg'
import doctor2 from '../../HomepageSubparts/Doctors/Doctorsassets/doctor2.jpg'
import doctor3 from '../../HomepageSubparts/Doctors/Doctorsassets/doctor3.jpg'
import doctor4 from '../../HomepageSubparts/Doctors/Doctorsassets/doctor4.JPG'
import doctor5 from '../../HomepageSubparts/Doctors/Doctorsassets/doctor5.jpg'
import doctor6 from '../../HomepageSubparts/Doctors/Doctorsassets/doctor6.jpg'
import doctor7 from '../../HomepageSubparts/Doctors/Doctorsassets/doctor7.jpg'
import doctor8 from '../../HomepageSubparts/Doctors/Doctorsassets/doctor8.jpg'

import './doctorsmainpage.css'

class Doctormainpage extends Component {
 state = {}
 render() {
  return(
      <div>
      <div className="Head">
        <img></img>
        <h1><center>Expert Doctors</center></h1>
      
      </div>
      <div className="MainDivision">
          <div className="SubDivision">
              <div className="MainCard">
                  <div className="Card-image">
                    <img className="doctorimage" src={doctor1}></img>
                  </div>
                  <div className="Card-body">
                    <h2 className="DoctorsName">Dr. Brahm Kapur</h2>
                    <p className="DoctorsExp"> Psychiatrist <i>20 yrs Experience. </i></p>
                    <p className="DoctorsQual">MBBS, MD (Psychiatry)</p>
                    <p className="Timing">10:00 AM to 11:00PM Mon-Fri</p>
                    <p className="Fees">500 INR</p>
                    <a href="http://example.com" class="round-button-doctor">Consult</a>
                  </div>
              </div>


              <div className="MainCard">
                  <div className="Card-image">
                    <img className="doctorimage" src={doctor2}></img>
                  </div>
                  <div className="Card-body">
                    <h4 className="DoctorsName">Dr. Gopal Bhatia</h4>
                    <p className="DoctorsExp"> Psychiatrist <i>20 yrs Experience. </i></p>
                    <p className="DoctorsQual">MBBS MD</p>
                    <p className="Timing">10:00 AM to 9:00PM Sat-Sun</p>
                    <p className="Fees">400 INR</p>
                    <a href="http://example.com" class="round-button-doctor">Consult</a>
                  </div>
              </div>


              <div className="MainCard">
                  <div className="Card-image">
                    <img className="doctorimage" src={doctor3}></img>
                  </div>
                  <div className="Card-body">
                  <h4 className="DoctorsName">Dr. Parmanand Kulhara</h4>
                    <p className="DoctorsExp">  Psychiatrist <i>45 yrs Experience. </i></p>
                    <p className="DoctorsQual">MBBS, MD, FRC Psych, FAMS</p>
                    <p className="Timing">9:00 AM to 9:00PM Mon-Sat</p>
                    <p className="Fees">600 INR</p>
                    <a href="http://example.com" class="round-button-doctor">Consult</a>
                  </div>
              </div>

              <div className="MainCard">
                  <div className="Card-image">
                    <img className="doctorimage" src={doctor4}></img>
                  </div>
                  <div className="Card-body">
                  <h4 className="DoctorsName">Dr. Savita Malhotra</h4>
                    <p className="DoctorsExp"> Psychiatrist <i>15 yrs Experience. </i></p>
                    <p className="DoctorsQual">MBBS, MD, PhD (Psychiatry)</p>
                    <p className="Timing">11:00 AM to 8:00PM Fri-Sun</p>
                    <p className="Fees">350 INR</p>
                    <a href="http://example.com" class="round-button-doctor">Consult</a>
                  </div>
              </div>

          </div>






          <div className="SubDivision">
              <div className="MainCard">
                  <div className="Card-image">
                    <img className="doctorimage" src={doctor5}></img>
                  </div>
                  <div className="Card-body">
                    <h4 className="DoctorsName">Dr. Cherian John</h4>
                    <p className="DoctorsExp"> Phychiatrist <i>25 yrs Experience. </i></p>
                    <p className="DoctorsQual">DPM, MRCPSYCH, DNB</p>
                    <p className="Timing">11:00 AM to 11:00PM Mon-Sun</p>
                    <p className="Fees">500 INR</p>
                    <a href="http://example.com" class="round-button-doctor">Consult</a>
                  </div>
              </div>


              <div className="MainCard">
                  <div className="Card-image">
                    <img className="doctorimage" src={doctor6}></img>
                  </div>
                  <div className="Card-body">
                    <h4 className="DoctorsName">Dr. Seshadri Harihar</h4>
                    <p className="DoctorsExp"> Psychiatrist <i>10 yrs Experience. </i></p>
                    <p className="DoctorsQual">MBBS, MRC Psychiatry</p>
                    <p className="Timing">9:00 AM to 10:00PM Mon-Fri</p>
                    <p className="Fees">400 INR</p>
                    <a href="http://example.com" class="round-button-doctor">Consult</a>
                  </div>
              </div>


              <div className="MainCard">
                  <div className="Card-image">
                    <img className="doctorimage" src={doctor7}></img>
                  </div>
                  <div className="Card-body">
                    <h4 className="DoctorsName">Dr. Atasi Gupta</h4>
                    <p className="DoctorsExp">  Psychiatrist <i>10 yrs Experience. </i></p>
                    <p className="DoctorsQual">MSc in Psychology</p>
                    <p className="Timing">9:00 AM to 9:00PM Thurs-Sun</p>
                    <p className="Fees">400 INR</p>
                    <a href="http://example.com" class="round-button-doctor">Consult</a>
                  </div>
              </div>

              <div className="MainCard">
                  <div className="Card-image">
                    <img className="doctorimage" src={doctor8}></img>
                  </div>
                  <div className="Card-body">
                  <h4 className="DoctorsName">Dr. Anand Mathur</h4>
                    <p className="DoctorsExp"> Psychiatrist <i>25 yrs Experience. </i></p>
                    <p className="DoctorsQual">Bsc, MBBS, DPM, FIPS</p>
                    <p className="Timing">10:00 AM to 11:00PM Mon-Sun</p>
                    <p className="Fees">600 INR</p>
                    <a href="http://example.com" class="round-button-doctor">Consult</a>
                  </div>
              </div>

          </div>

      </div>

      </div>

    )
   }
 }

export default Doctormainpage