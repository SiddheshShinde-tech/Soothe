import React from 'react'
import { Card } from 'react-bootstrap'
import './sidebar.css'


const HomepageSidebar = (props) => {
  return(
    <div className="sidebarContainer2" style={{
      width:props.width
    }}>
        <div style={{marginBottom:"20px", paddingBottom: "5px", boxSizing: 'border-box',  background: '#f98282'}}>
        <div className="cardHeader2">
          <span>Main Menu</span>
        </div>
        <div className="cardbody2">
          <div className="submenu">
            <h5><center>Assessment</center> </h5>
          </div>
          <br></br>
          <div className="submenu">
          <h5><center>Games</center> </h5>
          </div>
          <br></br>
          <div className="submenu">
          <h5><center>Therapy</center> </h5>
          </div>
          <br></br>
          <div className="submenu">
          <h5><center>Doctors</center> </h5>
          </div>
          <br></br>
          <div className="submenu">
          <h5><center>Blogs</center> </h5>
          </div>
          <br></br>
          <div className="submenu">
          <h5><center>Ananya</center> </h5>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

        </div>
      </div>
      </div>
   )
 }

export default HomepageSidebar