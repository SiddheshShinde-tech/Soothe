import React from 'react'
import MainComponent from '../../Homepage/HomepageMainComponent'
import NavBar from '../../Components/Navbar/Navbar'

import './mainhome.css'
import HomepageSidebar from "../HomepageSidebar/newsidebar";


const HomepageMain = (props) => {
  return(
    <div className="homecontainer">
      <NavBar></NavBar>
      <div>
      <HomepageSidebar></HomepageSidebar>
      <MainComponent></MainComponent>
      </div>
    </div>
   )
 }
export default HomepageMain